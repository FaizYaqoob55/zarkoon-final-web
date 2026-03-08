import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { CertificationsSection } from "../components/CertificationsSection";
import { AboutSection } from "../components/AboutSection";
import { CareerSection } from "../components/CareerSection";
import { FAQSection } from "../components/FAQSection";
import { AffiliationsSection } from "../components/AffiliationsSection";

export function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CertificationsSection />
      <AboutSection />
      <CareerSection />
      <FAQSection />
      <AffiliationsSection />
    </>
  );
}
