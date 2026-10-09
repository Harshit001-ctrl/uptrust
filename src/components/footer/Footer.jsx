import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const CONTACTS = [
  {
    label: "upthrust.agency",
    href: "https://upthrust.agency",
    description: "add description here",
    email: "hello@upthrust.agency",
  },
  {
    label: "upthrust.io",
    href: "https://upthrust.io",
    description: "add description here",
    email: "hello@upthrust.io",
  },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

const NEWSLETTER = {
  heading: "Sign up for our emails",
  consent:
    "By checking this box I sign up for our newsletter and receive marketing emails and updates on our services. You can unsubscribe at any time.",
  placeholder: "typehere@youremail.com",
  submitLabel: "Submit",
};

const WORDMARK = ["Upthrust", "Design"];

const WORDMARK_TEXT =
  "font-anton font-normal uppercase tracking-normal" +
  " text-[40px] leading-[54.3px]" +
  " md:text-[100px] md:leading-[135.8px]" +
  " lg:text-[200px] lg:leading-[271.68px]";

const TAGLINE = "Lorem ipsum dolor sit amet consectetur";
const LEGAL = ["Privacy Policy", "© Upthrust Design"];

function ArrowLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-1 underline underline-offset-4 ${className}`}
    >
      {children}
      <ArrowUpRight className="size-4" strokeWidth={2.5} />
    </a>
  );
}

export default function Footer({
  wordmark = WORDMARK,
  contacts = CONTACTS,
  socials = SOCIALS,
  newsletter = NEWSLETTER,
  tagline = TAGLINE,
  legal = LEGAL,
}) {
  return (
    <footer className="w-full bg-black pt-[48px] text-white md:pt-[80px] lg:min-h-[900px] lg:pt-[120px] lg:pb-[40px]">
      <div className="px-6 md:px-[48px] lg:px-[70px]">
        <h2
          className={`flex items-center justify-center whitespace-nowrap ${WORDMARK_TEXT}`}
        >
          <span>{wordmark[0]}</span>

          <Image
            src="/flower.svg"
            alt=""
            width={64}
            height={58}
            className="h-[20px] w-[22px] shrink-0 self-end md:h-[36px] md:w-[40px] lg:h-[58px] lg:w-[64px]"
          />

          <span>{wordmark[1]}</span>
        </h2>
      </div>

      <div className=" border-t border-white">
        <div className="flex flex-col lg:min-h-[520px] lg:flex-row">
          <div className="flex flex-col justify-between px-6 pt-[20px] md:px-[48px] lg:w-[1010px] lg:px-[20px]">
            <div className="flex flex-col gap-8 md:flex-row md:gap-[40px]">
              {contacts.map((contact) => (
                <div
                  key={contact.label}
                  className="md:w-[275.5px] lg:h-[172.6px]"
                >
                  <ArrowLink href={contact.href} className="text-[13px]">
                    {contact.label}
                  </ArrowLink>
                  <p className="mt-[28px] text-[13px]">{contact.description}</p>
                  <p className="text-[13px] text-white/50">{contact.email}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 pb-6 text-[11px] text-white/50 lg:mt-0">
              {tagline}
            </p>
          </div>

          <div className="flex flex-1 flex-col justify-between gap-10 border-t border-white px-6 py-[20px] text-[13px] md:px-[48px] lg:border-l lg:border-t-0 lg:px-[40px]">
            <form className="flex flex-col gap-4">
              <p>{newsletter.heading}</p>

              <label className="flex gap-2 text-[10px] leading-[150%] text-white/60">
                <input
                  type="checkbox"
                  name="consent"
                  className="mt-[2px] size-3 shrink-0 accent-white"
                />
                <span>{newsletter.consent}</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder={newsletter.placeholder}
                // site-wide orange focus outline yahan nahi chahiye, iske badle
                // focus pe neeche ki line white ho jaati hai
                className="w-full border-b border-white/30 bg-transparent pb-1 text-[12px] placeholder:text-white/40 focus:border-white focus-visible:outline-none"
              />

              <button type="submit" className="self-start text-[12px] underline underline-offset-4">
                {newsletter.submitLabel}
              </button>
            </form>

            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                {contacts.map((contact) => (
                  <ArrowLink key={contact.label} href={contact.href}>
                    {contact.label}
                  </ArrowLink>
                ))}
              </div>

              <p>
                {socials.map((social, i) => (
                  <span key={social.label}>
                    <a href={social.href} className="hover:underline">
                      {social.label}
                    </a>
                    {i < socials.length - 1 && ", "}
                  </span>
                ))}
              </p>

              <div className="text-[11px] text-white/50">
                {legal.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
