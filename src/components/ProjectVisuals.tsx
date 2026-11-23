import { bublhubLogo, bublhubScreens, clientShots, fanClients, quizShot } from "@/content/work";
import { BrowserFrame, PhoneFrame, Radar } from "./frames";

const browserSizes = "(max-width: 960px) 80vw, 420px";

export function BublHubVisual() {
  return (
    <div className="visual visual-bublhub" aria-hidden="true">
      <Radar logo={bublhubLogo} />
      <PhoneFrame image={bublhubScreens.community} sizes="220px" />
    </div>
  );
}

export function TeaPoweredFan() {
  return (
    <div className="visual visual-fan" aria-hidden="true">
      {fanClients.map((name) => (
        <BrowserFrame key={name} {...clientShots[name]} sizes={browserSizes} />
      ))}
    </div>
  );
}

export function QuizWindow() {
  return (
    <div className="visual visual-quiz" aria-hidden="true">
      <BrowserFrame {...quizShot} sizes={browserSizes} />
    </div>
  );
}

/** Three phones for the top of the BublHub case study. */
export function PhoneLineup() {
  return (
    <div className="visual lineup" aria-hidden="true">
      <PhoneFrame image={bublhubScreens.chat} sizes="220px" />
      <PhoneFrame image={bublhubScreens.community} sizes="240px" />
      <PhoneFrame image={bublhubScreens.spotlight} sizes="220px" />
    </div>
  );
}
