import Link from "next/link";
import { cq } from "../layout/frame";

/** Reusable Anton display link (nav CTA, footer links, …). */
export default function NavLink({
  href = "#",
  fontSize = 36,
  children,
  className = "",
}) {
  return (
    <Link
      href={href}
      className={
        "font-anton text-[22px] leading-none font-normal tracking-normal text-[#FF3D00] uppercase no-underline" +
        " transition-opacity hover:opacity-80" +
        " sm:text-[28px]" +
        " lg:text-[length:var(--nav-fs)] lg:leading-none" +
        " lg:[text-box-edge:cap_alphabetic] lg:[text-box-trim:trim-both]" +
        ` ${className}`
      }
      style={{ "--nav-fs": cq(fontSize) }}
    >
      {children}
    </Link>
  );
}
