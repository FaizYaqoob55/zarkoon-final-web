import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { CertificationsSection } from "../components/CertificationsSection";

import siaLogo from "../../assets/sia approved contractor.jpg";
import chasLogo from "../../assets/chas standard.webp";
import icoLogo from "../../assets/ico information.jpg";
import socialValueLogo from "../../assets/social value.jpg";
import nasduLogo from "../../assets/nasdu member.jpg";
import safeContractorLogo from "../../assets/SAFECONTRACTOR-LOGO-V2.webp";

const heroImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920";

const accreditations = [
  { imgSrc: siaLogo, name: "SIA Approved" },
  { imgSrc: chasLogo, name: "CHAS Accredited" },
  { imgSrc: icoLogo, name: "ICO Information" },
  { imgSrc: socialValueLogo, name: "Social Value Quality" },
  { imgSrc: nasduLogo, name: "NASDU Member" },
  { imgSrc: safeContractorLogo, name: "SafeContractor Approved" }
];

export function Accreditations() {
  return (
    <div className="min-h-screen font-['Outfit'] bg-white">
      <Helmet>
        <title>Accreditations | Zarkoon Security Limited</title>
        <meta name="description" content="Zarkoon Security holds official certifications demonstrating our commitment to the highest security standards." />
      </Helmet>
      
      {/* ── Hero Section ── */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Zarkoon Security Accreditations Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-[#0A1929]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center px-6 max-w-4xl mt-16">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight">
            Our Accreditations
          </h1>
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center space-x-2 text-sm text-[#5DADE2] uppercase tracking-widest font-bold mb-10">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-white/50" />
            <span className="text-white">Accreditations</span>
          </div>
          <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Recognised by the industry's most trusted bodies, our certifications
            reflect our unwavering commitment to quality, safety, and
            professionalism.
          </p>
        </div>
      </section>

      {/* ── Accreditations & Recognitions Banner ── */}
      <section className="py-16 bg-[#0A1929]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-snug mb-4">
            Accreditations &amp;{" "}
            <span className="text-[#5DADE2]">Recognitions</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
            Our accreditations and partner certifications are a testament to our commitment to professional standards,
            ethical practice, and client satisfaction at every level of our organisation.
          </p>
        </div>
      </section>

      {/* ── 3x2 Logo Grid Section ── */}
      <section className="py-24 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#1E5A8E] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-sm mb-4">
              OFFICIAL PARTNERS
            </div>
            <h2 className="text-[#0A1929] text-4xl md:text-5xl font-bold tracking-tight">
              Our Certified Bodies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {accreditations.map((item, idx) => {
              const isICO = item.imgSrc === icoLogo;
              const content = (
                <div
                  className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-10 flex flex-col items-center group border border-gray-100 h-full w-full"
                >
                  <div className="h-32 w-full flex items-center justify-center mb-6">
                    <img 
                      src={item.imgSrc} 
                      alt={item.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#0A1929] text-xl font-bold tracking-tight text-center">
                    {item.name}
                  </h3>
                </div>
              );

              return isICO ? (
                <a 
                  key={idx} 
                  href="https://find-and-update.company-information.service.gov.uk/company/09761794" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={idx}>
                  {content}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <p className="text-[#4A5568] text-base mb-8 font-light">
              Want to learn more about our certifications or request compliance documentation?
            </p>
            <Link to="/contact-us">
              <Button className="bg-[#1E5A8E] hover:bg-[#5DADE2] text-white px-12 py-6 rounded-full font-bold text-lg shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-widest border-2 border-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CertificationsSection />
    </div>
  );
}
