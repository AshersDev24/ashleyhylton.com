import { NextResponse } from "next/server";
import type { MailService } from "@sendgrid/mail";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
  website?: string;
  botField?: string;
  turnstileToken?: string;
  elapsedMs?: number;
};

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const rate = new Map<string, { count: number; resetAt: number }>();

function getIp(req: Request) {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  return "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const windowMs = 60_000;
  const max = 6;

  const entry = rate.get(ip);
  if (!entry || entry.resetAt < now) {
    rate.set(ip, { count: 1, resetAt: now + windowMs });
    return { ok: true as const };
  }

  if (entry.count >= max) return { ok: false as const };
  entry.count += 1;
  rate.set(ip, entry);
  return { ok: true as const };
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { ok: true as const };
  if (!token)
    return {
      ok: false as const,
      error: "Verification failed. Please try again.",
    };

  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (ip && ip !== "unknown") form.append("remoteip", ip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: form,
    }
  ).catch(() => null);

  if (!res || !res.ok)
    return {
      ok: false as const,
      error: "Verification failed. Please try again.",
    };

  const data = (await res.json().catch(() => null)) as {
    success?: boolean;
  } | null;

  if (!data?.success)
    return {
      ok: false as const,
      error: "Verification failed. Please try again.",
    };

  return { ok: true as const };
}

function safeHeader(req: Request, name: string, max = 200) {
  const v = req.headers.get(name);
  if (!v) return "";
  return v.slice(0, max);
}

function extractSendgridMessage(err: unknown) {
  if (!err || typeof err !== "object") return null;
  const e = err as Record<string, unknown>;
  const response = e["response"];
  if (!response || typeof response !== "object") return null;
  const r = response as Record<string, unknown>;
  const body = r["body"];
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  const errors = b["errors"];
  if (!Array.isArray(errors) || errors.length === 0) return null;
  const first = errors[0];
  if (!first || typeof first !== "object") return null;
  const f = first as Record<string, unknown>;
  const message = f["message"];
  return typeof message === "string" ? message : null;
}

async function getSendGridClient() {
  const mod = (await import("@sendgrid/mail")) as unknown as {
    default: MailService;
  };
  return mod.default;
}

export async function POST(req: Request) {
  const ip = getIp(req);
  const limited = checkRateLimit(ip);
  if (!limited.ok) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Try again shortly." },
      { status: 429 }
    );
  }

  try {
    const body = (await req.json().catch(() => null)) as ContactPayload | null;

    const name = body?.name?.trim() || "";
    const email = body?.email?.trim() || "";
    const message = body?.message?.trim() || "";

    const botField = (body?.botField || "").trim();
    const website = (body?.website || "").trim();
    const elapsedMs = Number.isFinite(body?.elapsedMs)
      ? Number(body?.elapsedMs)
      : NaN;

    if (botField.length > 0 || website.length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (Number.isFinite(elapsedMs) && elapsedMs > 0 && elapsedMs < 1500) {
      return NextResponse.json({ ok: true });
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      const verified = await verifyTurnstile(body?.turnstileToken || "", ip);
      if (!verified.ok) {
        return NextResponse.json(
          { ok: false, error: verified.error },
          { status: 400 }
        );
      }
    }

    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!email.includes("@") || email.length < 5 || email.length > 200) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email." },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { ok: false, error: "Please write a longer message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        { ok: false, error: "Email is not configured yet." },
        { status: 500 }
      );
    }

    const sgMail = await getSendGridClient();
    sgMail.setApiKey(apiKey);

    const ua = safeHeader(req, "user-agent", 260);
    const referer = safeHeader(req, "referer", 260);

    const subject = `New portfolio message from ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      ``,
      `Message:`,
      `${message}`,
      ``,
      `Meta:`,
      `IP: ${ip}`,
      `UA: ${ua}`,
      `Referer: ${referer}`,
    ].join("\n");

    try {
      await sgMail.send({
        to: toEmail,
        from: fromEmail,
        subject,
        text,
        replyTo: email,
      });
    } catch (err) {
      const sgMsg = extractSendgridMessage(err);
      if (sgMsg) console.error(`SendGrid error: ${sgMsg}`);
      else console.error("SendGrid send failed");
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email service is currently unavailable. Please try again soon.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
