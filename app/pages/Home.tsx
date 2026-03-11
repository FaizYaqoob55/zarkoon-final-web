import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { AboutSection } from "../components/AboutSection";
import { CareerSection } from "../components/CareerSection";
import { FAQSection } from "../components/FAQSection";
import { AffiliationsSection } from "../components/AffiliationsSection";

export function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CareerSection />
      <FAQSection />
      <AffiliationsSection />
    </>
  );
}
