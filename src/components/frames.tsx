import Image, { type StaticImageData } from "next/image";

// CSS-only device frames around real screenshots. They are decoration: the
// card text beside them already names the project, so images get alt="".

type FrameProps = { image: StaticImageData; className?: string; sizes: string };

export function PhoneFrame({ image, className = "", sizes }: FrameProps) {
  return (
    <div className={`phone ${className}`}>
      <Image src={image} alt="" sizes={sizes} />
    </div>
  );
}

export function BrowserFrame({ image, domain, className = "", sizes }: FrameProps & { domain: string }) {
  return (
    <div className={`browser ${className}`}>
      <div className="browser-bar">
        <i />
        <i />
        <i />
        <span>{domain}</span>
      </div>
      <Image src={image} alt="" sizes={sizes} />
    </div>
  );
}

/** BublHub's glow logo with the radar rings from the BublHub web app. */
export function Radar({ logo }: { logo: StaticImageData }) {
  return (
    <div className="radar">
      <i />
      <i />
      <i />
      <i />
      <Image src={logo} alt="" sizes="96px" />
    </div>
  );
}
