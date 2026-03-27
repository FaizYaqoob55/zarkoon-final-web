import { Link } from "react-router-dom";
import heroImage from "figma:asset/fd89c50b51e11daa406f26cd662b773770c8036f.png";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[650px] md:h-[650px] overflow-hidden font-['Outfit'] pt-[150px] md:pt-[60px] lg:pt-[80px]">
      {/* Full-Width Hero Background Image - Edge to Edge */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        {/* Premium Gradient Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1929]/90 via-[#0A1929]/70 to-transparent" />
      </div>

      {/* Text Content - Single Clean Layer (NO DUPLICATION) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Premium Subheading */}
          <p className="text-[#5DADE2] text-xs font-semibold uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
            <span className="w-12 h-[2px] bg-[#5DADE2]"></span>
            IMPENETRABLE PROTECTION
          </p>

          {/* Main Heading - SINGLE LAYER ONLY */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] mb-6 tracking-tight">
            Safeguarding You,<br />
            Securing Tomorrow:<br />
            <span className="text-[#5DADE2]">Zarkoon Security</span><br />
            Limited
          </h1>

          {/* Premium Description */}
          <p className="text-gray-200 text-lg font-light leading-relaxed mb-10 max-w-xl">
            Providing professional security limited with a commitment to public safety and social impact. From manned guarding to mobile patrols, we prioritize your safety.
          </p>

          {/* Premium CTA Button */}
          <Link to="/contact-us" className="inline-block">
            <button className="group relative bg-[#1E5A8E] text-white px-10 py-4 text-base font-semibold tracking-wide hover:bg-[#5DADE2] transition-all duration-300 shadow-2xl overflow-hidden font-['Outfit']">
              <span className="relative z-10">Book A Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DADE2] to-[#1E5A8E] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </Link>
        </div>
      </div>

      {/* Premium Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1E5A8E] via-[#5DADE2] to-[#1E5A8E]"></div>
    </section>
  );
}
