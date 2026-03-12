import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, FileText, Download } from "lucide-react";

/* Keyframe for the gold pulse — injected once into the document */
const highlightStyle = `
@keyframes policyPulse {
  0%   { box-shadow: 0 0 0 0 rgba(234,179,8,0.7), 0 0 0 0 rgba(234,179,8,0.4); }
  40%  { box-shadow: 0 0 0 10px rgba(234,179,8,0.2), 0 0 0 20px rgba(234,179,8,0); }
  100% { box-shadow: 0 0 0 0 rgba(234,179,8,0), 0 0 0 0 rgba(234,179,8,0); }
}
.policy-highlight {
  animation: policyPulse 1.8s ease-out;
  outline: 3px solid rgba(234,179,8,0.85);
  outline-offset: 3px;
  transform: scale(1.015);
  transition: transform 0.3s ease;
}
`;
if (typeof document !== "undefined" && !document.getElementById("policy-pulse-style")) {
  const tag = document.createElement("style");
  tag.id = "policy-pulse-style";
  tag.textContent = highlightStyle;
  document.head.appendChild(tag);
}

/* ─────────────────────────────────────────────────────────────────────────────
   Policy data – all 17 policies with content-synced Unsplash images
───────────────────────────────────────────────────────────────────────────── */
const policies = [
  {
    id: "01",
    title: "Quality Policy Statement",
    href: "/assets/policies/ZSL-POL-01-Quality-Policy.pdf",
    description:
      "Zarkoon Security Limited is committed to delivering high-quality security services across construction, healthcare, retail, residential, and leisure sectors. We strive for excellence through professional training, customer engagement, and adherence to recognised standards including BS EN ISO 9001:2015, BS 7499, and BS 7858. Our goal is continuous improvement in all areas of service delivery and quality management.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=85",
  },
  {
    id: "02",
    title: "Health & Safety Policy Statement",
    href: "/assets/policies/ZSL-POL-02-Health-and-Safety-Policy.pdf",
    description:
      "Zarkoon Security Limited is committed to maintaining a safe and healthy working environment for all employees, clients, and visitors. In accordance with the Health and Safety at Work Act 1974 and relevant regulations, we ensure safe systems of work, proper training, effective risk management, and continual improvement in health and safety performance. We aim to prevent accidents and work-related illness through robust procedures and responsible operations.",
    // High-vis vest / safety-first industrial environment
    image: "https://images.unsplash.com/photo-1589793463357-5fb813435467?w=700&q=85",
  },
  {
    id: "03",
    title: "Environmental Policy Statement",
    href: "/assets/policies/ZSL-POL-03-Environmental-Policy.pdf",
    description:
      "Zarkoon Security Limited is committed to minimising its environmental impact across all operations. We work to reduce energy consumption, waste, and emissions whilst complying with all relevant environmental legislation. We actively promote sustainable practices throughout our supply chain and continually seek to improve our environmental performance through measurable objectives and targets.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&q=85",
  },
  {
    id: "04",
    title: "Corporate Social Responsibility Statement",
    href: "/assets/policies/ZSL-POL-04-Corporate-Social-Responsibility-Policy.pdf",
    description:
      "Zarkoon Security Limited recognises our responsibility to operate ethically and contribute positively to the communities in which we work. We are committed to fair employment practices, community engagement, ethical procurement, and supporting charitable initiatives. Our CSR approach ensures that our business growth benefits wider society and reflects our core values.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=700&q=85",
  },
  {
    id: "05",
    title: "Privacy Statement",
    href: "/assets/policies/ZSL-POL-05-Privacy-Policy.pdf",
    description:
      "Zarkoon Security Limited is committed to protecting the privacy and security of personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We collect and process personal information lawfully, fairly, and transparently, using it only for specified, legitimate purposes. We implement appropriate technical and organisational measures to safeguard all personal data.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=85",
  },
  {
    id: "06",
    title: "Equality, Diversity & Inclusion Statement",
    href: "/assets/policies/ZSL-POL-06-Equal-Opportunities-Policy.pdf",
    description:
      "Zarkoon Security Limited is committed to promoting equality of opportunity and celebrating diversity across our workforce and operations. We do not tolerate discrimination of any kind and actively foster an inclusive culture where all individuals are treated with dignity and respect. We comply fully with the Equality Act 2010 and embed EDI principles into all aspects of our business.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=700&q=85",
  },
  {
    id: "07",
    title: "Information Security Statement",
    href: "/assets/policies/ZSL-POL-08-Information-Security-Policy.pdf",
    description:
      "Zarkoon Security Limited is committed to protecting the confidentiality, integrity, and availability of all information assets. We implement robust information security controls in line with ISO 27001 principles, ensuring that sensitive data is safeguarded against unauthorised access, loss, or breach. All employees receive regular information security awareness training.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=85",
  },
  {
    id: "08",
    title: "Communications Policy Statement",
    href: "/assets/policies/ZSL-POL-09-Communications-Policy.pdf",
    description:
      "Zarkoon Security Limited is committed to maintaining clear, professional, and effective communication across all internal and external channels. We ensure that all communications align with our brand values, legal obligations, and professional standards. Our communications framework supports transparency, accountability, and positive stakeholder relationships.",
    // Dispatch headset / high-tech security control room
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=700&q=85",
  },
  {
    id: "09",
    title: "Waste Management Policy Statement",
    href: "/assets/policies/ZSL-POL-10-Waste-Management-Policy.pdf",
    description:
      "Zarkoon Security Limited maintains a comprehensive waste management policy to minimise environmental impact and ensure compliant disposal of all waste materials. We prioritise waste reduction, reuse, and recycling across all operational sites and offices, and work with approved waste contractors to ensure responsible and legal waste management at all times.",
    // Recycling / clean disposal / environmental responsibility
    image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=700&q=85",
  },
  {
    id: "10",
    title: "Violence & Harassment Policy Statement",
    href: "/assets/policies/ZSL-POL-12-Violence-Harassment-Policy.pdf",
    description:
      "Zarkoon Security Limited has a zero-tolerance approach to violence, bullying, and harassment in any form. We are committed to providing a safe working environment where all employees feel respected and protected. Any incidents of violence or harassment are taken seriously and addressed promptly through clear investigative and disciplinary procedures.",
    image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=700&q=85",
  },
  {
    id: "11",
    title: "Alcohol and Drugs Statement",
    href: "/assets/policies/ZSL-POL-13-Drug-Alcohol-Policy.pdf",
    description:
      "Zarkoon Security Limited is committed to maintaining a safe, productive working environment free from the influence of alcohol and drugs. We operate a strict substance misuse policy and provide support mechanisms for employees facing substance-related challenges. Compliance with this policy is mandatory for all employees, contractors, and visitors to our premises.",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=700&q=85",
  },
  {
    id: "12",
    title: "Contractor Assessment",
    href: "/assets/policies/ZSL-POL-14-Contractors-Assessment-Policy.pdf",
    description:
      "Zarkoon Security Limited ensures that all contractors and subcontractors engaged in our operations are thoroughly assessed for competency, compliance, and risk management capability. Our contractor management process includes pre-qualification checks, performance monitoring, and regular reviews to maintain the highest standards of service delivery and safety.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=85",
  },
  {
    id: "13",
    title: "Modern Slavery and Human Trafficking",
    href: "/assets/policies/ZSL-POL-15-Modern-Slavery-Policy.pdf",
    description:
      "Zarkoon Security Limited has a zero-tolerance approach to modern slavery and human trafficking in all their forms. We are committed to acting ethically and with integrity in all our business relationships and to implementing effective systems and controls to ensure modern slavery is not taking place anywhere within our supply chains. We comply fully with the Modern Slavery Act 2015.",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=700&q=85",
  },
  {
    id: "14",
    title: "Anti-Bribery, Fraud, and Corruption Policy",
    href: "/assets/policies/ZSL-POL-16-Anti-Bribery-Policy.pdf",
    description:
      "Zarkoon Security Limited operates with the highest standards of integrity and is committed to preventing bribery, fraud, and corruption in all business activities. We comply with the Bribery Act 2010 and maintain robust internal controls and reporting mechanisms. All employees receive training on identifying and reporting suspicious activities or unethical conduct.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=85",
  },
  {
    id: "15",
    title: "Policy Statement on Tax Evasion Facilitation",
    href: "/assets/policies/ZSL-POL-17-Anti-Facilitation-of-Tax-Evasion-Policy.pdf",
    description:
      "Zarkoon Security Limited is committed to the prevention of tax evasion facilitation in compliance with the Criminal Finances Act 2017. We operate with full transparency in all financial dealings and ensure that appropriate due diligence and monitoring procedures are in place across our supply chain and operational relationships.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&q=85",
  },
  {
    id: "16",
    title: "Training Policy Statement",
    href: "/assets/policies/ZSL-POL-18-Staff-Training-and-Development-Policy.pdf",
    description:
      "Zarkoon Security Limited invests in the professional development of all employees through a structured and comprehensive training programme. We ensure that all security personnel receive the training required to meet SIA licensing standards, site-specific requirements, and broader organisational competencies. Ongoing development is supported to ensure excellence in service delivery.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=85",
  },
  {
    id: "17",
    title: "Term-Time Working Policy Statement",
    href: "/assets/policies/ZSL-POL-19-Term-Time-Working-Policy.pdf",
    description:
      "Zarkoon Security Limited is committed to supporting employees with flexible working arrangements, including term-time working contracts where operationally feasible. This policy sets out the framework for requesting, agreeing, and managing term-time working arrangements, ensuring both business continuity and employee wellbeing are maintained throughout the year.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=700&q=85",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Document icon SVG
───────────────────────────────────────────────────────────────────────────── */
function DocIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────────────────────── */
export function Policies() {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  function scrollToCard(id: string) {
    const el = document.getElementById(`policy-${id}`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    // Wait for the smooth scroll to finish (~650 ms) then fire the gold pulse
    setTimeout(() => {
      setHighlightedId(id);
      setTimeout(() => setHighlightedId(null), 1900);
    }, 650);
  }

  return (
    <div className="min-h-screen font-['Outfit'] bg-[#F4F6F9]">

      {/* ══════════════════════════════════════════════════════════════════════
          TOP BANNER — full-width photo with centred "Policies & Procedures"
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "480px" }}>
        {/* Background photo – high-end corporate compliance office */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=85')",
          }}
        />
        {/* Deep dark overlay so text pops */}
        <div className="absolute inset-0 bg-[#0A1929]/75" />

        {/* Diagonal accent strips */}
        <div className="absolute top-0 left-0 w-72 h-52 bg-[#1E5A8E]/30 rounded-br-[100px]" />
        <div className="absolute bottom-0 right-0 w-56 h-36 bg-[#1E5A8E]/25 rounded-tl-[80px]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6"
          style={{ minHeight: "480px" }}>
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-[#5DADE2] uppercase tracking-widest font-bold mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white">Policies</span>
          </div>

          {/* Main title */}
          <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6 uppercase">
            Policies &amp;
            <br />
            <span className="text-[#5DADE2]">Procedures</span>
          </h1>

          {/* Brand tag */}
          <div className="inline-block bg-[#1E5A8E] text-white text-sm font-bold uppercase tracking-[0.2em] px-6 py-2 mb-6">
            Zarkoon Security Limited
          </div>

          {/* Subtitle */}
          <p className="text-white/70 text-lg max-w-xl font-light">
            Transparency and professional standards lie at the core of every operation we undertake.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MASTER LIST — 3-column quick-index (click → smooth-scroll to card)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[#0A1929] text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">
              All Policies at a Glance
            </h2>
            <div className="w-20 h-1.5 bg-[#1E5A8E] mx-auto rounded-full" />
            <p className="text-gray-500 mt-4 text-base font-light">
              Click any policy title to jump straight to its detail card below.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            {policies.map((policy) => (
              <button
                key={policy.id}
                onClick={() => scrollToCard(policy.id)}
                className="group flex items-center gap-3 py-3 border-b border-gray-100 hover:border-[#1E5A8E]/30 transition-all duration-200 text-left w-full"
              >
                <span className="text-[#1E5A8E] flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <DocIcon className="w-5 h-5" />
                </span>
                <span className="text-[#0A1929] font-medium text-[15px] group-hover:text-[#1E5A8E] group-hover:underline underline-offset-2 transition-all leading-tight">
                  {policy.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          DETAIL CARDS — 2-up grid, Wills-inspired dark charcoal + image layout
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[#0A1929] text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">
              Policy Detail Cards
            </h2>
            <div className="w-20 h-1.5 bg-[#1E5A8E] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy) => (
              <div
                key={policy.id}
                id={`policy-${policy.id}`}
                className={`relative group overflow-hidden shadow-xl scroll-mt-24 transition-all duration-300 ${highlightedId === policy.id ? "policy-highlight" : ""
                  }`}
                style={{ minHeight: "420px" }}
              >
                {/* ── Blue number badge – top-right corner ── */}
                <div className="absolute top-0 right-0 z-20 w-[72px] h-[72px] bg-[#1E5A8E] flex items-center justify-center">
                  <span className="text-white text-2xl font-extrabold tracking-tight leading-none">
                    {policy.id}
                  </span>
                </div>

                {/* ── Two-column inner layout ── */}
                <div className="flex h-full" style={{ minHeight: "420px" }}>

                  {/* Left — dark charcoal content panel (60%) */}
                  <div className="flex flex-col justify-between bg-[#1C2B3A] p-8 w-full md:w-[60%] z-10">
                    <div>
                      {/* Policy icon */}
                      <div className="mb-5 text-white/50">
                        <FileText className="w-9 h-9" />
                      </div>

                      {/* Title */}
                      <h3 className="text-white text-xl font-bold leading-snug mb-4">
                        {policy.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/70 text-sm leading-relaxed font-light">
                        {policy.description}
                      </p>
                    </div>

                    {/* Download / Coming Soon button */}
                    <div className="mt-8">
                      {policy.href !== "#" ? (
                        <a
                          href={policy.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#1E5A8E] hover:bg-[#5DADE2] text-white text-sm font-bold uppercase tracking-widest px-6 py-3 transition-colors duration-300"
                        >
                          <Download className="w-4 h-4" />
                          Click To Download
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 bg-[#1E5A8E]/40 text-white/40 text-sm font-bold uppercase tracking-widest px-6 py-3 cursor-not-allowed">
                          <Download className="w-4 h-4" />
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right — content-synced image panel (40%) */}
                  <div
                    className="hidden md:block md:w-[40%] bg-cover bg-center relative"
                    style={{ backgroundImage: `url('${policy.image}')` }}
                  >
                    {/* Subtle dark veil to keep depth */}
                    <div className="absolute inset-0 bg-[#0A1929]/20" />
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A1929] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-white text-3xl font-bold mb-6">Need more information?</h2>
          <p className="text-white/70 text-lg mb-10 font-light">
            If you have questions regarding our policies or require full documentation,
            please don&apos;t hesitate to reach out to our compliance team.
          </p>
          <Link
            to="/contact-us"
            className="inline-block bg-[#1E5A8E] hover:bg-[#5DADE2] text-white px-10 py-4 rounded-full font-bold text-base shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-widest border-2 border-white/10"
          >
            Contact Compliance
          </Link>
        </div>
      </section>

    </div>
  );
}
