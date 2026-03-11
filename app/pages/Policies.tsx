import { Link } from "react-router-dom";
import { ChevronRight, Shield, FileText, Download } from "lucide-react";

export function Policies() {
  const corporatePolicies = [
    { id: "01", title: "Quality Policy", href: "/policies/ZSL-POL-01-Quality-Policy.pdf" },
    { id: "02", title: "Health and Safety Policy", href: "/policies/ZSL-POL-02-Health-and-Safety-Policy.pdf" },
    { id: "03", title: "Environmental Policy", href: "/policies/ZSL-POL-03-Environmental-Policy.pdf" },
    { id: "04", title: "Corporate Social Responsibility Policy", href: "/policies/ZSL-POL-04-Corporate-Social-Responsibility-Policy.pdf" },
    { id: "05", title: "Privacy Policy", href: "/policies/ZSL-POL-05-Privacy-Policy.pdf" },
    { id: "06", title: "Equal Opportunities Policy", href: "/policies/ZSL-POL-06-Equal-Opportunities-Policy.pdf" },
    { id: "08", title: "Information Security Policy", href: "/policies/ZSL-POL-08-Information-Security-Policy.pdf" },
    { id: "09", title: "Communications Policy", href: "/policies/ZSL-POL-09-Communications-Policy.pdf" },
    { id: "10", title: "Waste Management Policy", href: "/policies/ZSL-POL-10-Waste-Management-Policy.pdf" },
    { id: "12", title: "Violence & Harassment Policy", href: "/policies/ZSL-POL-12-Violence-Harassment-Policy.pdf" },
    { id: "13", title: "Drug & Alcohol Policy", href: "/policies/ZSL-POL-13-Drug-Alcohol-Policy.pdf" },
    { id: "14", title: "Contractors Assessment Policy", href: "/policies/ZSL-POL-14-Contractors-Assessment-Policy.pdf" },
    { id: "15", title: "Modern Slavery Policy", href: "/policies/ZSL-POL-15-Modern-Slavery-Policy.pdf" },
    { id: "16", title: "Anti-Bribery Policy", href: "/policies/ZSL-POL-16-Anti-Bribery-Policy.pdf" },
    { id: "17", title: "Anti-Facilitation of Tax Evasion Policy", href: "/policies/ZSL-POL-17-Anti-Facilitation-of-Tax-Evasion-Policy.pdf" },
    { id: "18", title: "Staff Training and Development Policy", href: "/policies/ZSL-POL-18-Staff-Training-and-Development-Policy.pdf" },
    { id: "19", title: "Term-Time Working Policy", href: "/policies/ZSL-POL-19-Term-Time-Working-Policy.pdf" }
  ];

  return (
    <div className="min-h-screen font-['Outfit'] bg-[#F4F6F9]">
      {/* ── Hero / Title Banner ─────────────────────────────────────────── */}
      <section className="relative bg-[#0A1929] overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-40 bg-[#1E5A8E]/40 rounded-br-[80px]" />
        <div className="absolute bottom-0 right-0 w-48 h-32 bg-[#1E5A8E]/30 rounded-tl-[60px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-[#5DADE2] uppercase tracking-widest font-bold mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white">Policies</span>
          </div>

          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
            Our Policies &<br />Commitments
          </h1>

          <div className="inline-block bg-[#1E5A8E] text-white text-sm font-bold uppercase tracking-widest px-5 py-2 mb-8">
            Zarkoon Security Limited
          </div>

          <p className="text-white/70 text-lg max-w-2xl font-light">
            Transparency and professional standards are at the core of our operations. 
            Review our corporate policies and standards here.
          </p>
        </div>
      </section>

      {/* ── Main Privacy Policy Intro ───────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-[#F4F6F9] rounded-2xl flex items-center justify-center flex-shrink-0 text-[#1E5A8E]">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-[#0A1929] text-3xl font-bold tracking-tight">
              Privacy Policy
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Your privacy is important to us. This Privacy Policy explains how Zarkoon Security Limited collects, uses, and protects your personal information.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                We collect information that you provide to us directly when you contact us for services or employment. This may include your name, contact details, and professional information.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                We use this information to provide our security services, process job applications, and communicate with you about our offerings.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Zarkoon Security Limited takes significant measures to protect your data against unauthorized access, alteration, or destruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Corporate Policies Grid ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#0A1929] text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">
              Our Corporate Policies
            </h2>
            <div className="w-20 h-1.5 bg-[#1E5A8E] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporatePolicies.map((policy) => (
              <a
                key={policy.id}
                href={policy.href}
                target={policy.href !== "#" ? "_blank" : undefined}
                rel={policy.href !== "#" ? "noopener noreferrer" : undefined}
                className="group relative flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#1E5A8E]/30 hover:-translate-y-1 overflow-hidden"
              >
                {/* Background Download Accent */}
                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <Download className="w-4 h-4 text-[#1E5A8E]" />
                </div>

                <div className="w-12 h-12 bg-[#F4F6F9] rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#1E5A8E] text-[#1E5A8E] group-hover:text-white group-hover:scale-110 shadow-inner">
                  <FileText className="w-6 h-6" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-gray-700 font-bold text-[15px] group-hover:text-[#1E5A8E] transition-colors leading-tight mb-1">
                    {policy.title}
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {policy.href === "#" ? "Coming Soon" : "View / Download"}
                  </span>
                </div>

                {/* Left Accent Bar */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1E5A8E] group-hover:h-3/4 transition-all duration-300 rounded-r-full" />
              </a>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-20 pt-12 border-t border-gray-200 text-center">
            <p className="text-gray-400 text-sm font-light uppercase tracking-widest">
              Zarkoon Security Limited &copy; 2025
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A1929] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-white text-3xl font-bold mb-6">Need more information?</h2>
          <p className="text-white/70 text-lg mb-10 font-light">
            If you have questions regarding our policies or require full documentation, 
            please don't hesitate to reach out to our compliance team.
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
