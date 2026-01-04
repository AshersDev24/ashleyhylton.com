"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type FormState = "idle" | "sending" | "sent" | "error";

type ContactApiOk = { ok: true };
type ContactApiErr = { ok: false; error?: string };
type ContactApiResponse = ContactApiOk | ContactApiErr;

function isContactApiResponse(value: unknown): value is ContactApiResponse {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return v.ok === true || v.ok === false;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        options: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

function IconSend() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 2L11 13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2l-7 20-4-9-9-4 20-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconInfo() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 10v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 7h.01"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconAlert() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 9v4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M12 17h.01"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M10.3 3.6 2.4 18.1A2 2 0 0 0 4.1 21h15.8a2 2 0 0 0 1.7-2.9L13.7 3.6a2 2 0 0 0-3.4 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function useTurnstile(siteKey: string | undefined) {
  const [containerEl, setContainerEl] = useState<HTMLDivElement | null>(null);
  const [token, setToken] = useState<string>("");
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!siteKey) return;

    const existing = document.querySelector(
      'script[data-turnstile="1"]'
    ) as HTMLScriptElement | null;
    if (!existing) {
      const s = document.createElement("script");
      s.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      s.async = true;
      s.defer = true;
      s.dataset.turnstile = "1";
      document.head.appendChild(s);
    }
  }, [siteKey]);

  useEffect(() => {
    if (!siteKey) return;
    if (!containerEl) return;

    let alive = true;

    const tryRender = () => {
      if (!alive) return;
      if (!window.turnstile) return;
      if (widgetIdRef.current) return;

      widgetIdRef.current = window.turnstile.render(containerEl, {
        sitekey: siteKey,
        theme: "dark",
        callback: (t) => setToken(t || ""),
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
      });
    };

    const iv = window.setInterval(tryRender, 150);
    tryRender();

    return () => {
      alive = false;
      window.clearInterval(iv);
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {}
      }
      widgetIdRef.current = null;
    };
  }, [siteKey, containerEl]);

  const reset = () => {
    if (!widgetIdRef.current || !window.turnstile) return;
    try {
      window.turnstile.reset(widgetIdRef.current);
    } catch {}
    setToken("");
  };

  return { setContainerEl, token, reset, enabled: Boolean(siteKey) };
}

function FieldShell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span
        className="text-xs font-medium"
        style={{ color: "rgba(244,246,247,0.62)" }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [botField, setBotField] = useState("");
  const [website, setWebsite] = useState("");

  const startedAtRef = useRef<number>(0);

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const turnstile = useTurnstile(turnstileSiteKey);

  const busy = state === "sending";
  const done = state === "sent";

  const canSend = useMemo(() => {
    if (busy) return false;
    if (done) return false;
    if (name.trim().length < 2) return false;
    if (!email.includes("@")) return false;
    if (message.trim().length < 10) return false;
    if (turnstile.enabled && !turnstile.token) return false;
    return true;
  }, [busy, done, name, email, message, turnstile.enabled, turnstile.token]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSend) return;

    setState("sending");
    setError(null);

    const now = Date.now();
    const startedAt = startedAtRef.current || now;
    const elapsedMs = Math.max(0, now - startedAt);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          botField: botField.trim(),
          website: website.trim(),
          elapsedMs,
          turnstileToken: turnstile.token || undefined,
        }),
      });

      const raw = (await res.json().catch(() => null)) as unknown;

      if (!res.ok || !isContactApiResponse(raw) || raw.ok !== true) {
        const msg =
          isContactApiResponse(raw) && raw.ok === false ? raw.error : undefined;
        setState("error");
        setError(msg || "Something went wrong. Try again.");
        if (turnstile.enabled) turnstile.reset();
        return;
      }

      setState("sent");
      if (turnstile.enabled) turnstile.reset();
    } catch {
      setState("error");
      setError("Network error. Please try again.");
      if (turnstile.enabled) turnstile.reset();
    }
  }

  function resetForm() {
    setState("idle");
    setError(null);
    setName("");
    setEmail("");
    setMessage("");
    setBotField("");
    setWebsite("");
    startedAtRef.current = Date.now();
    if (turnstile.enabled) turnstile.reset();
  }

  return (
    <div className="flex flex-col gap-10">
      <header className="page-hero">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="about-builder-avatar">
              <Image
                src="/images/me.jpg"
                alt="Ashley Hylton"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                Get in touch
              </div>
              <div
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.62)" }}
              >
                Roles • Contract • Collaboration
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Contact
            </h1>
            <p
              className="max-w-2xl text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              If you’re hiring, want to collaborate, or have a project in mind,
              send a message and I’ll get back to you.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <Link href="/projects" className="btn btn-secondary">
              <span className="btn-icon" aria-hidden="true">
                <IconInfo />
              </span>
              <span className="btn-label">View projects</span>
              <span className="btn-trail" aria-hidden="true">
                <IconArrowRight />
              </span>
            </Link>

            <Link href="/about" className="btn btn-secondary">
              <span className="btn-icon" aria-hidden="true">
                <IconInfo />
              </span>
              <span className="btn-label">About</span>
              <span className="btn-trail" aria-hidden="true">
                <IconArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <section className="surface-card md:col-span-2">
          {state === "sent" ? (
            <div className="surface-card surface-card-tight">
              <div className="flex items-start gap-3">
                <div className="project-signal-icon" aria-hidden="true">
                  <IconCheck />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-semibold">Message sent</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>
                    Thanks — I’ll get back to you as soon as possible.
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn btn-secondary"
                >
                  <span className="btn-icon" aria-hidden="true">
                    <IconSend />
                  </span>
                  <span className="btn-label">Send another</span>
                  <span className="btn-trail" aria-hidden="true">
                    <IconArrowRight />
                  </span>
                </button>

                <Link href="/projects" className="btn btn-secondary">
                  <span className="btn-icon" aria-hidden="true">
                    <IconInfo />
                  </span>
                  <span className="btn-label">View projects</span>
                  <span className="btn-trail" aria-hidden="true">
                    <IconArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div className="hidden" aria-hidden="true">
                <label>
                  <span>Do not fill</span>
                  <input
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </label>
                <label>
                  <span>Website</span>
                  <input
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <FieldShell label="Name">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-2xl px-4 py-3 text-sm outline-none"
                    placeholder="Your name"
                    autoComplete="name"
                    disabled={busy}
                    style={{
                      background: "rgba(0,1,1,0.22)",
                      boxShadow:
                        "0 0 0 1px rgba(244,246,247,0.10) inset, 0 14px 36px rgba(0,0,0,0.22)",
                      color: "var(--text)",
                    }}
                  />
                </FieldShell>

                <FieldShell label="Email">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-2xl px-4 py-3 text-sm outline-none"
                    placeholder="you@email.com"
                    autoComplete="email"
                    disabled={busy}
                    style={{
                      background: "rgba(0,1,1,0.22)",
                      boxShadow:
                        "0 0 0 1px rgba(244,246,247,0.10) inset, 0 14px 36px rgba(0,0,0,0.22)",
                      color: "var(--text)",
                    }}
                  />
                </FieldShell>
              </div>

              <FieldShell label="Message">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[160px] resize-y rounded-2xl px-4 py-3 text-sm outline-none"
                  placeholder="Tell me what you’re working on and what you need help with."
                  disabled={busy}
                  style={{
                    background: "rgba(0,1,1,0.22)",
                    boxShadow:
                      "0 0 0 1px rgba(244,246,247,0.10) inset, 0 14px 36px rgba(0,0,0,0.22)",
                    color: "var(--text)",
                  }}
                />
              </FieldShell>

              {turnstile.enabled ? (
                <div className="flex flex-col gap-2">
                  <div ref={turnstile.setContainerEl} />
                  {!turnstile.token ? (
                    <div
                      className="text-xs"
                      style={{ color: "rgba(244,246,247,0.62)" }}
                    >
                      Please complete verification to send.
                    </div>
                  ) : null}
                </div>
              ) : null}

              {state === "error" ? (
                <div className="surface-card surface-card-tight">
                  <div className="flex items-start gap-3">
                    <div className="project-signal-icon" aria-hidden="true">
                      <IconAlert />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm font-semibold">
                        Message not sent
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "rgba(255, 160, 160, 0.92)" }}
                      >
                        {error || "Something went wrong. Try again."}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="submit"
                  disabled={!canSend}
                  className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <span className="btn-icon" aria-hidden="true">
                    <IconSend />
                  </span>
                  <span className="btn-label">
                    {busy ? "Sending..." : "Send message"}
                  </span>
                  <span className="btn-trail" aria-hidden="true">
                    <IconArrowRight />
                  </span>
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="btn btn-secondary"
                  disabled={busy}
                >
                  <span className="btn-icon" aria-hidden="true">
                    <IconInfo />
                  </span>
                  <span className="btn-label">Reset</span>
                  <span className="btn-trail" aria-hidden="true">
                    <IconArrowRight />
                  </span>
                </button>
              </div>
            </form>
          )}
        </section>

        <aside className="surface-card">
          <div className="flex flex-col gap-4">
            <div>
              <div
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.62)" }}
              >
                Best for
              </div>
              <div className="mt-3 flex flex-col gap-2">
                <div className="project-mini">
                  <span className="project-mini-dot" aria-hidden="true" />
                  <span
                    className="text-xs"
                    style={{ color: "rgba(244,246,247,0.78)" }}
                  >
                    Full-time roles (UK)
                  </span>
                </div>
                <div className="project-mini">
                  <span className="project-mini-dot" aria-hidden="true" />
                  <span
                    className="text-xs"
                    style={{ color: "rgba(244,246,247,0.78)" }}
                  >
                    Contract / freelance
                  </span>
                </div>
                <div className="project-mini">
                  <span className="project-mini-dot" aria-hidden="true" />
                  <span
                    className="text-xs"
                    style={{ color: "rgba(244,246,247,0.78)" }}
                  >
                    Product collaboration
                  </span>
                </div>
              </div>
            </div>

            <div className="surface-card surface-card-tight">
              <div className="flex items-start gap-3">
                <div className="project-signal-icon" aria-hidden="true">
                  <IconInfo />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-semibold">Response time</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>
                    Typically within 48 hours.
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-card surface-card-tight">
              <div className="flex items-start gap-3">
                <div className="project-signal-icon" aria-hidden="true">
                  <IconInfo />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-semibold">Email</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>
                    Use the form for now.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
