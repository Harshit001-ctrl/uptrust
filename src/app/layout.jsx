import { Anton, Inter, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { site } from "../config/site";
import SmoothScroll from "../components/layout/SmoothScroll";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton-next",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-next",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: site.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/company-logo.svg`,
      description: site.description,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(anton.variable, inter.variable, "font-sans", figtree.variable)}
    >
      <body className="bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <SmoothScroll />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
