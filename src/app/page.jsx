import GridCanvas from "../components/layout/GridCanvas";
import Navbar from "../components/Navbar";
import HeroSection from "../components/hero/HeroSection";
import PartnersSection from "../components/partners/PartnersSection";
import ServicesSection from "../components/services/ServicesSection";
import Footer from "../components/footer/Footer";
import { site } from "../config/site";

export const metadata = {
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <GridCanvas>
        <Navbar />
        <main id="main">
          <HeroSection />
          <PartnersSection />
        </main>
      </GridCanvas>
      <ServicesSection />
      <Footer />
    </>
  );
}
