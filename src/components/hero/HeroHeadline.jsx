import { cq, FRAME_WIDTH } from "../layout/frame";
import { DiaTextReveal } from "../ui/dia-text-reveal";


const REVEAL_COLORS = ["#f97316", "#eab308", "#22c55e", "#3b82f6", "#a855f7"];

function toJustify(align) {
  if (align === "center") return "center";
  if (align === "right") return "flex-end";
  return "flex-start";
}

function mobileFontSizeFor(fontSize, shrink, minFontSize) {
  const growth = (((fontSize * shrink) / FRAME_WIDTH) * 100).toFixed(3);
  return `clamp(${minFontSize}px, ${growth}cqw, ${fontSize}px)`;
}

function buildTransform({ rotateX, rotate, skew, perspective }) {
  const parts = [];

  if (rotateX) {
    parts.push(`perspective(${cq(perspective)})`);
    parts.push(`rotateX(${rotateX}deg)`);
  }
  if (rotate) parts.push(`rotate(${rotate}deg)`);
  if (skew) parts.push(`skewX(${skew}deg)`);

  return parts.length > 0 ? parts.join(" ") : "none";
}

export default function HeroHeadline({
  text,

  top = 0,
  left = 0,
  width,
  height,

  fontSize = 200,
  shrink = 0.68,
  minFontSize = Math.max(14, Math.round(fontSize * 0.12)),
  mobileFontSize,
  tracking = 0,
  leading = 1,
  align = "left",
  color = "#FF4200",
  opacity = 1,

  skew = 0,
  rotate = 0,
  rotateX = 0,
  perspective = 900,
  origin = "left center",

  animated = true,
  animationDelay = 0,
  revealColors = REVEAL_COLORS,
  revealDuration = 2.0,

  className = "",
  ...props
}) {
  const style = {
    "--headline-top": cq(top),
    "--headline-left": cq(left),
    "--headline-width": cq(width),
    "--headline-height": cq(height),
    "--headline-font-size": cq(fontSize),
    "--headline-justify": toJustify(align),
    "--headline-transform": buildTransform({ rotateX, rotate, skew, perspective }),

    "--headline-font-size-mobile":
      mobileFontSize ?? mobileFontSizeFor(fontSize, shrink, minFontSize),

    color,
    opacity,
    lineHeight: leading,
    letterSpacing: tracking,
    transformOrigin: origin,
  };

  return (
    <div className={`hero-headline ${className}`} style={style} {...props}>
      {animated ? (
        <DiaTextReveal
          text={text}
          colors={revealColors}
          textColor={color}
          delay={animationDelay}
          duration={revealDuration}
          className="leading-[inherit]! whitespace-nowrap"
        />
      ) : (
        <span className="whitespace-nowrap">{text}</span>
      )}
    </div>
  );
}
