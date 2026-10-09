import HeroHeadline from "./HeroHeadline";
import AnnotationBlock from "./AnnotationBlock";
import AnimateIn from "../ui/AnimateIn";
import Image from "next/image";
import { cq } from "../layout/frame";

const HERO_TOP = 35 + 28;

const OFFSET_Y = HERO_TOP - 81;

const HEADLINES = [
  {
    text: "Bold Design",
    top: 51,
    left: 38.44,
    width: 1363,
    height: 160,
    fontSize: 215,
    rotateX: -60,
    perspective:1200,
    origin: "center bottom",
    skew: 0,
    align: "center",
  },
  {
    text: "That",
    top: 500,
    left: 760,
    width: 280,
    height: 40,
    fontSize: 90,
    leading: 1.4,
    skew: 0,
    align: "center",
  },
  {
    text: "Performs",
    top: 750,
    left: 155,
    width: 1129,
    height: 160,
    fontSize: 215,
    rotateX: 60,
    perspective:1500,
    origin: "center bottom",
    skew: 0,
    align: "center",
  },
];

const ANNOTATION_MOBILE_FS = "20px";

const ANNOTATIONS = [
  {
    text: ["Identity ·", "Experience ·", "Motion ·"],
    top: 568,
    left: 72,
    width: 320,
    height: 144,
    fontSize: 40,
    mobileFontSize: ANNOTATION_MOBILE_FS,
    lineHeight: "120%",
    tracking: "-0.04em",
    mark: { src: "/path1.svg", width: 124, height: 20, top: 138, left: 0 },
  },
  {
    text: ["Strategy is", "Cheaper"],
    top: 420,
    left: 291,
    width: 158,
    height: 64,
    fontSize: 24,
    mobileFontSize: ANNOTATION_MOBILE_FS,
    lineHeight: "133%",
    tracking: "-0.02em",
    mark: { src: "/path2.svg", width: 109, height: 46, top: 18, left: -10 },
  },
  {
    text: ["Comfortable", "is Expensive"],
    top: 365,
    left: 1157,
    width: 232,
    height: 80,
    fontSize: 32,
    mobileFontSize: ANNOTATION_MOBILE_FS,
    lineHeight: "125%",
    tracking: "-0.04em",
    mark: { src: "/path3.svg", width: 172, height: 9, top: 78, left: 0 },
  },
];

const ARTWORK = { src: "/Future.svg", width: 546, height: 685, top: 190, left: 447 };

const BLUEPRINT = { src: "/Group.svg", width: 400, height:400, top: 500, left: 950 };

const placeOnFrame = ({ top, left, width, height }) => ({
  "--top": cq(top),
  "--left": cq(left),
  "--width": cq(width),
  "--height": cq(height),
});

const ON_FRAME =
  "lg:absolute lg:top-[var(--top)] lg:left-[var(--left)]" +
  " lg:h-[var(--height)] lg:w-[var(--width)]";

export default function HeroSection({
  headlines = HEADLINES,
  annotations = ANNOTATIONS,
  artwork = ARTWORK,
  blueprint = BLUEPRINT,
  offsetY = OFFSET_Y,
  artworkDelay = 0.25,
  title = "Bold design that performs",
}) {
  return (
    <section
      aria-labelledby="hero-title"
      className={
        "flex flex-col items-center gap-6 px-5 pt-8 pb-12" +
        " sm:gap-8 sm:px-8" +
        " lg:absolute lg:inset-x-0 lg:bottom-0 lg:block lg:top-[var(--hero-offset)]" +
        " lg:gap-0 lg:p-0"
      }
      style={{ "--hero-offset": cq(offsetY) }}
    >
      <h1 id="hero-title" className="sr-only">
        {title}
      </h1>

      {blueprint && (
        <AnimateIn
          as="div"
          delay={artworkDelay}
          aria-hidden="true"
          className={"pointer-events-none hidden select-none lg:block " + ON_FRAME}
          style={placeOnFrame(blueprint)}
        >
          <Image
            src={blueprint.src}
            alt=""
            width={blueprint.width}
            height={blueprint.height}
            className="h-full w-full"
          />
        </AnimateIn>
      )}

      <HeroHeadline {...headlines[0]} aria-hidden="true" className="order-1" />
      <HeroHeadline {...headlines[1]} aria-hidden="true" className="order-2" />

      <AnimateIn
        as="div"
        delay={artworkDelay}
        className={
          "order-4 w-full max-w-[320px] select-none sm:max-w-[420px] lg:max-w-none " +
          ON_FRAME
        }
        style={placeOnFrame(artwork)}
      >
        <Image
          src={artwork.src}
          alt="Iridescent chrome sculpture of a classical bust"
          width={artwork.width}
          height={artwork.height}
          className="h-full w-full object-contain"
          priority
        />
      </AnimateIn>

      <HeroHeadline
        {...headlines[2]}
        aria-hidden="true"
        className="order-3 lg:z-10"
      />

      {annotations.map((note, i) => (
        <AnnotationBlock
          key={note.top}
          {...note}
          className={["order-5", "order-6", "order-7"][i]}
        />
      ))}
    </section>
  );
}
