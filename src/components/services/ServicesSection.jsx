"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ServicePanel from "./ServicePanel";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "Strategy and Insight",
    intro: "We interrogate what others assume. Then we build the brief behind the brief.",
    items: [
      "Brand strategy & positioning",
      "Messaging & tone of voice",
      "Audience & competitor research",
      "Workshops & creative sprints",
    ],
    image: "/service-1.png",
  },
  {
    title: "Brand & visual identity",
    intro: "We build systems out of it. Not just a logo, but a whole category, not just the conversation.",
    items: [
      "Identity systems & language",
      "Guidelines & naming",
      "Illustration & iconography",
      "Brand architecture & systems",
    ],
    image: "/service-2.png",
  },
  {
    title: "Product & digital experience",
    intro: "We design for humans and devices. So users stay, engage, and come back.",
    items: [
      "Web & product design",
      "Design systems & prototyping",
      "User research & testing",
      "Motion graphics & micro-interactions",
    ],
    image: "/service-3.png",
  },
  {
    title: "Creative & campaign production",
    intro: "We turn attention into action. Then we prove it worked.",
    items: [
      "Campaign creative & social content",
      "Presentations & pitch decks",
      "Marketing collateral & ad creative",
    ],
    image: "/service-4.png",
  },
];

const GAP = "gap-12 md:gap-[40px] lg:gap-[60px]";
const STAGE = "h-[100svh] md:h-[1200px] lg:h-[1920px]";
const ORANGE =
  "h-[420px] w-[2000px] md:h-[650px] md:w-[3000px] lg:h-[900px] lg:w-[4320px]";

const SCRUB = true;         
const SPEED = 1.6;         
const ORANGE_SHIFT = 0.35; 
const END_GAP = 0.1;       

export default function ServicesSection({
  services = SERVICES,
  bgImage = "/curvelines.svg",
  orangeImage = "/orange.svg",
}) {
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const orangeRef = useRef(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      const section = sectionRef.current;
      const track = trackRef.current;

      const slide = () => {
        const full = track.scrollWidth - section.offsetWidth;
        const isMobile = window.innerWidth < 1024;
        return isMobile ? full + window.innerWidth * END_GAP : full;
      };
      const stickyTop = () => (window.innerHeight - section.offsetHeight) / 2;
      const distance = () => slide() * SPEED;

      const layout = () => {
        section.style.top = `${stickyTop()}px`;
        wrapper.style.height = `${section.offsetHeight + distance()}px`;
      };
      layout();
      ScrollTrigger.addEventListener("refreshInit", layout);

      const tl = gsap.timeline({
        defaults: { ease: "none", duration: 1, force3D: true },
        scrollTrigger: {
          trigger: wrapper,
          start: () => `top ${stickyTop()}px`,
          end: () => "+=" + distance(),
          scrub: SCRUB,
          markers: false,
          invalidateOnRefresh: true,
        },
      });

      tl.to(track, { x: () => -slide() }, 0);
      tl.to(orangeRef.current, { x: () => -slide() * ORANGE_SHIFT }, 0);

      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", layout);
        window.removeEventListener("load", onLoad);
      };
    },
    { scope: wrapperRef }
  );

  return (
    <div ref={wrapperRef} className="relative w-full">
    <section
      ref={sectionRef}
      className={`sticky w-full overflow-hidden bg-black ${STAGE}`}
    >
      <Image src={bgImage} alt="" fill priority className="object-cover" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          ref={orangeRef}
          src={orangeImage}
          alt=""
          width={4320}
          height={900}
          className={`block max-w-none will-change-transform [backface-visibility:hidden] ${ORANGE}`}
        />
      </div>

      <div
        ref={trackRef}
        className={`absolute inset-0 flex items-center will-change-transform [backface-visibility:hidden] ${GAP}`}
      >
        {services.map((service) => (
          <ServicePanel key={service.title} {...service} />
        ))}
      </div>
    </section>
    </div>
  );
}
