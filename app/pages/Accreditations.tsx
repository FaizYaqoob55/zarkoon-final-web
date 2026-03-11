import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  ChevronRight,
  ShieldCheck,
  Award,
  BadgeCheck,
  ClipboardList,
  Star,
  HeartPulse,
} from "lucide-react";
import { CertificationsSection } from "../components/CertificationsSection";

const heroImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920";

// ─── Accreditation Data ───────────────────────────────────────────────────────
const accreditations = [
  {
    id: "nsi",
    abbr: "NSI",
    label: "GOLD",
    name: "National Security Inspectorate (NSI)",
    accent: "#1E5A8E",
    description:
      "Zarkoon Security holds NSI Gold approval, the highest level of independent third-party certification available to UK security companies. Achieving NSI Gold status demonstrates that our management systems, operations, and field delivery all meet the most stringent standards set by the security industry's foremost certification body.",
  },
  {
    id: "safecontractor",
    abbr: "SAFE",
    label: "CONTRACTOR",
    name: "SafeContractor Approved",
    accent: "#1E5A8E",
    description:
      "Our SafeContractor accreditation confirms that Zarkoon Security has passed a thorough independent audit of our health and safety management systems and documentation. This membership gives our clients complete confidence that every deployment we undertake is managed with the safety of personnel and the public as the highest priority.",
  },
  {
    id: "bsia",
    abbr: "BSIA",
    label: "MEMBER",
    name: "British Security Industry Association (BSIA)",
    accent: "#0A1929",
    description:
      "As a proud member of the BSIA — the leading trade association representing the private security industry in the UK — Zarkoon Security subscribes to a strict code of conduct and best-practice standards. BSIA membership signals to clients that we operate with integrity, transparency, and a genuine commitment to raising professional standards across the industry.",
  },
  {
    id: "sia-acs",
    abbr: "SIA",
    label: "ACS",
    name: "SIA Approved Contractor Scheme (ACS)",
    accent: "#1E5A8E",
    description:
      "Zarkoon Security is fully compliant with the SIA's Approved Contractor Scheme — the government-backed quality framework requiring all regulated security suppliers to demonstrate excellence in management, service delivery, and officer welfare. ACS status is a prerequisite for supplying licensed security operatives to many major contracts across the public and private sectors.",
  },
  {
    id: "iso9001",
    abbr: "ISO",
    label: "9001",
    name: "ISO 9001 Quality Management",
    accent: "#0A1929",
    description:
      "Our ISO 9001:2015 certification is the international benchmark for quality management systems. It underpins the way Zarkoon Security recruits, trains, deploys, and reviews its security personnel. By following the ISO 9001 framework, we maintain measurable service standards and a culture of continuous improvement — ensuring every client receives a consistently excellent level of protection.",
  },
  {
    id: "hse",
    abbr: "HSE",
    label: "COMPLIANT",
    name: "Health & Safety Compliance (HSE)",
    accent: "#1E5A8E",
    description:
      "Zarkoon Security maintains full compliance with all UK Health and Safety Executive (HSE) regulations. Our safety management framework encompasses thorough risk assessments, detailed method statements, dynamic threat evaluation procedures, and regular officer welfare checks — ensuring that every client site is operated with zero compromise on the wellbeing of our teams and the public.",
  },
];

export function Accreditations() {
  return (
    <div className="min-h-screen font-['Outfit'] bg-white">
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

      {/* ── Intro Cards Section ── */}
      <section className="py-20 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 – Committed to Safety */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-10 border-t-4 border-[#1E5A8E] group">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-[#1E5A8E]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1E5A8E] transition-colors duration-300">
                  <ShieldCheck className="w-6 h-6 text-[#1E5A8E] group-hover:text-white transition-colors duration-300" />
                </div>
                <h2 className="text-[#0A1929] text-2xl font-bold tracking-tight">
                  Committed to Safety
                </h2>
              </div>
              <p className="text-[#4A5568] text-base font-light leading-relaxed">
                At Zarkoon Security, the health and safety of our teams, clients,
                and the public is paramount. Our CHAS accreditation and ongoing
                compliance with BS 9999 and all relevant UK health &amp; safety
                legislation ensures every officer on the ground operates within a
                framework of fully audited, best-practice safety standards. We
                conduct regular internal audits and site-specific risk assessments
                to keep our standards consistently high.
              </p>
            </div>

            {/* Card 2 – Quality Standards */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-10 border-t-4 border-[#5DADE2] group">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-[#5DADE2]/10 rounded-xl flex items-center justify-center group-hover:bg-[#5DADE2] transition-colors duration-300">
                  <Award className="w-6 h-6 text-[#5DADE2] group-hover:text-white transition-colors duration-300" />
                </div>
                <h2 className="text-[#0A1929] text-2xl font-bold tracking-tight">
                  Quality Standards
                </h2>
              </div>
              <p className="text-[#4A5568] text-base font-light leading-relaxed">
                Our ISO 9001 quality management certification is a cornerstone of
                how we deliver excellence to every client. The ISO framework drives
                a culture of continuous improvement across recruitment, training,
                deployment, and customer service. Combined with our SIA Approved
                Contractor Scheme status, these standards guarantee that every
                aspect of our operation meets a benchmark that clients and
                stakeholders can trust.
              </p>
            </div>
          </div>
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
            Our accreditations and partner certifications are not just badges —
            they are a testament to our commitment to professional standards,
            ethical practice, and client satisfaction at every level of our
            organisation.
          </p>
        </div>
      </section>

      {/* ── Our Accredited Partners Grid ── */}
      <section className="py-20 pb-28 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#1E5A8E] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-sm mb-4">
              CERTIFIED
            </div>
            <h2 className="text-[#0A1929] text-4xl md:text-5xl font-bold tracking-tight">
              Our Accredited Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accreditations.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 flex flex-col group"
              >
                {/* Stylised Badge Icon */}
                <div className="h-24 flex items-center justify-center mb-6">
                  <div
                    className="flex flex-col items-center justify-center w-24 h-20 rounded-xl border-2 shadow-sm group-hover:shadow-md transition-all duration-300"
                    style={{
                      borderColor: item.accent,
                      backgroundColor: item.accent + "0f",
                    }}
                  >
                    <span
                      className="font-black text-xl tracking-widest leading-none"
                      style={{ color: item.accent }}
                    >
                      {item.abbr}
                    </span>
                    <span
                      className="text-[9px] font-bold tracking-[0.15em] mt-1 uppercase"
                      style={{ color: item.accent + "cc" }}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[#0A1929] text-lg font-bold mb-3 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-[#4A5568] text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-[#4A5568] text-base mb-6 font-light">
              Want to learn more about our certifications or request compliance
              documentation?
            </p>
            <Link to="/contact-us">
              <Button className="bg-[#1E5A8E] hover:bg-[#5DADE2] text-white px-12 py-6 rounded-full font-bold text-lg shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-widest border-2 border-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our Professional Certifications (Shared) ── */}
      <CertificationsSection />
    </div>
  );
}
