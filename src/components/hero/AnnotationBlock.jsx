import Image from "next/image";
import AnimateIn from "../ui/AnimateIn";
import { cq, cqMin } from "../layout/frame";

export default function AnnotationBlock({
  text,
  top = 0,
  left = 0,
  width,
  height,
  fontSize = 24,
  minFontSize = Math.max(13, Math.round(fontSize * 0.42)),
  mobileFontSize,
  lineHeight = "133%",
  tracking = "-2%",
  color = "#000000",
  rotate = 0,
  opacity = 1,
  align = "left",
  mark = null,
  animated = true,
  animationDelay = 0,
  lineStagger = 0.08,
  animateBy = "character",
  animateStagger = 0.02,
  className = "",
  ...props
}) {
  const lines = Array.isArray(text) ? text : [text];

  const em = (value) => `${(value / fontSize).toFixed(4)}em`;

  return (
    <div
      className={
        "relative font-inter font-bold uppercase" +
        " text-[length:var(--a-fs-m)]" +
        " lg:absolute lg:top-[var(--a-t)] lg:left-[var(--a-l)] lg:h-[var(--a-h)] lg:w-[var(--a-w)]" +
        " lg:text-[length:var(--a-fs)] lg:[transform:var(--a-tf)]" +
        ` ${className}`
      }
      style={{
        "--a-t": cq(top),
        "--a-l": cq(left),
        "--a-w": cq(width),
        "--a-h": cq(height),
        "--a-fs": cq(fontSize),
        "--a-fs-m": mobileFontSize ?? cqMin(fontSize, minFontSize),
        "--a-tf": rotate ? `rotate(${rotate}deg)` : "none",
        color,
        opacity,
        lineHeight,
        letterSpacing: tracking,
        textAlign: align,
      }}
      {...props}
    >
      {lines.map((line, i) => (
        <AnimateIn
          key={i}
          as="div"
          animated={animated}
          delay={animationDelay + i * lineStagger}
          by={animateBy}
          stagger={animateStagger}
          className="whitespace-nowrap"
        >
          {line}
        </AnimateIn>
      ))}

      {mark && (
        <Image
          src={mark.src}
          alt={mark.alt ?? ""}
          width={mark.width}
          height={mark.height}
          aria-hidden="true"
          className="pointer-events-none absolute block max-w-none select-none"
          style={{
            top: em(mark.top ?? 0),
            left: em(mark.left ?? 0),
            width: em(mark.width),
            height: em(mark.height),
          }}
        />
      )}
    </div>
  );
}
