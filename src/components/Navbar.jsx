import Logo from "./ui/Logo";
import NavLink from "./ui/NavLink";
import { cq } from "./layout/frame";

/**
 * At lg and up the bar scales with the design frame like everything else, so it
 * keeps the same relationship to the headline below it at every width.
 */
export default function Navbar({
  cta = { label: "Contact us", href: "#contact" },
  height = 72,
  paddingX = 72,
}) {
  return (
    <header
      className={
        "relative z-20 flex h-14 w-full items-center justify-between px-5 py-4 sm:px-8" +
        " lg:h-[var(--nav-h)] lg:px-[var(--nav-px)] lg:py-0"
      }
      style={{ "--nav-h": cq(height), "--nav-px": cq(paddingX) }}
    >
      <Logo className="w-[112px] sm:w-[132px] lg:w-[var(--nav-logo-w)]" />
      <nav aria-label="Primary">
        <NavLink href={cta.href} className="whitespace-nowrap">
          {cta.label}
        </NavLink>
      </nav>
    </header>
  );
}
