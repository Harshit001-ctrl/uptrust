import Image from "next/image";
import AnimateIn from "../ui/AnimateIn";
import { cq, cqMin } from "../layout/frame";

/** Client logos, left to right. Sizes are each SVG's natural size. */
const LOGOS = [
  { src: "/zomato.svg", alt: "Zomato", width: 143, height: 30 },
  { src: "/bosch.svg", alt: "Bosch", width: 152, height: 39 },
  { src: "/loreal.svg", alt: "L'Oréal", width: 144, height: 27 },
  { src: "/bosch.svg", alt: "Bosch", width: 152, height: 39 },
  { src: "/dell.svg", alt: "Dell", width: 109, height: 33 },
  { src: "/loreal.svg", alt: "L'Oréal", width: 144, height: 27 },
];

const STAT = {
  value: "100+",
  caption: "Brands trusted us to define how they're seen.",
};

export default function PartnersSection({
  logos = LOGOS,
  stat = STAT,
  height = 144,
  gap = 70,
  statWidth = 179,
  statHeight = 91,
  logosWidth = 1112,
  logosHeight = 74,
  delay = 0.45,
  className = "",
}) {
  return (
    <section
      aria-labelledby="partners-title"
      className={
        "w-full border-t border-black/10 px-5 pt-10 pb-12 sm:px-8" +
        " lg:absolute lg:inset-x-0 lg:bottom-0 lg:h-[var(--p-h)] lg:border-0 lg:p-0" +
        ` ${className}`
      }
      style={{ "--p-h": cq(height) }}
    >
      <h2 id="partners-title" className="sr-only">
        Brands we work with
      </h2>

      <div
        className={
          "mx-auto flex w-full flex-col items-center gap-8 text-center" +
          " lg:h-full lg:w-[var(--p-row-w)] lg:flex-row lg:items-center lg:gap-[var(--p-gap)] lg:text-left"
        }
        style={{
          "--p-gap": cq(gap),
          "--p-row-w": cq(statWidth + gap + logosWidth),
        }}
      >
        <AnimateIn
          as="div"
          delay={delay}
          className={
            "flex flex-col items-center gap-2" +
            " lg:h-[var(--p-stat-h)] lg:w-[var(--p-stat-w)] lg:shrink-0 lg:items-start lg:justify-between lg:gap-0"
          }
          style={{
            "--p-stat-w": cq(statWidth),
            "--p-stat-h": cq(statHeight),
            "--p-stat-fs": cq(36),
            "--p-stat-fs-m": cqMin(36, 32),
            "--p-cap-fs": cq(13),
            "--p-cap-fs-m": cqMin(13, 13),
          }}
        >
          <p className="font-inter text-[length:var(--p-stat-fs-m)] leading-none font-bold tracking-[-0.04em] text-black lg:text-[length:var(--p-stat-fs)]">
            {stat.value}
          </p>
          <p className="font-inter max-w-[22ch] text-[length:var(--p-cap-fs-m)] leading-[1.4] font-medium text-balance text-black/70 lg:max-w-none lg:text-[length:var(--p-cap-fs)] lg:text-black">
            {stat.caption}
          </p>
        </AnimateIn>

        <ul
          className={
            "grid w-full list-none grid-cols-2 items-center justify-items-center gap-x-6 gap-y-9 p-0" +
            " sm:grid-cols-3" +
            " lg:flex lg:h-[var(--p-logos-h)] lg:w-[var(--p-logos-w)] lg:shrink-0 lg:justify-between lg:gap-0"
          }
          style={{
            "--p-logos-w": cq(logosWidth),
            "--p-logos-h": cq(logosHeight),
          }}
        >
          {logos.map((logo, i) => (
            <AnimateIn
              as="li"
              key={`${logo.alt}-${i}`}
              delay={delay + 0.06 * (i + 1)}
              className="flex h-9 w-full shrink-0 items-center justify-center lg:h-auto lg:w-auto"
              style={{
                "--l-w": cq(logo.width),
                "--l-w-m": cqMin(logo.width, Math.round(logo.width * 0.62)),
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto max-h-full w-[var(--l-w-m)] max-w-full object-contain lg:w-[var(--l-w)] lg:max-w-none"
              />
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
