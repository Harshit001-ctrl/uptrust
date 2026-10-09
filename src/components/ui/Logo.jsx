import Image from "next/image";
import { cq } from "../layout/frame";

/** Reusable brand logo. Pass a width utility through `className` per breakpoint. */
export default function Logo({
  src = "/company-logo.svg",
  alt = "Upthrust home",
  width = 156,
  height = 32,
  priority = true,
  className = "",
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={`block h-auto w-[156px] object-contain ${className}`}
      style={{ "--nav-logo-w": cq(width) }}
    />
  );
}
