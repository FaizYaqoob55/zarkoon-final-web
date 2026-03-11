import { Printer } from "lucide-react";
import logoImage from "figma:asset/c13cca16d7f41b2233e632ec5f799ebb98dc1e40.png";

/* ─── Print styles ─────────────────────────────────────────────────────────── */
const printCSS = `
  @media print {
    body { background: white !important; margin: 0; padding: 0; }
    .report-viewer-bg { background: white !important; padding: 0 !important; }
    .report-page {
      box-shadow: none !important;
      margin: 0 !important;
      break-after: page;
      border-radius: 0 !important;
    }
    .no-print { display: none !important; }
    @page { margin: 0; size: A4; }
  }
`;

export function GenderPayGapReport() {
  return (
    <div className="report-viewer-bg min-h-screen bg-[#2a2a2e] font-['Outfit']">
      <style dangerouslySetInnerHTML={{ __html: printCSS }} />

      {/* ── Floating Print Button ─────────────────────────────────────── */}
      <button
        onClick={() => window.print()}
        className="no-print fixed top-5 right-5 z-50 bg-[#1E5A8E] hover:bg-[#5DADE2] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        title="Print / Save as PDF"
      >
        <Printer className="w-5 h-5" />
      </button>

      {/* ── Container for all A4 pages ────────────────────────────────── */}
      <div className="max-w-[850px] mx-auto py-10 px-4 space-y-8">

        {/* ════════════════════════════════════════════════════════════════
            PAGE 1 — COVER
        ════════════════════════════════════════════════════════════════ */}
        <div className="report-page bg-[#4A6A82] rounded-sm shadow-2xl overflow-hidden relative" style={{ aspectRatio: "210/297" }}>
          {/* Decorative blocks */}
          <div className="absolute top-0 left-0 w-[45%] h-[15%] bg-[#1E5A8E] rounded-br-[60px]" />
          <div className="absolute bottom-[10%] right-0 w-[20%] h-[30%] bg-[#5DADE2]" />

          {/* Logo */}
          <div className="absolute top-[8%] right-[8%] flex items-center gap-3">
            <img src={logoImage} alt="Zarkoon Security" className="h-14 w-auto brightness-0 invert" />
          </div>

          {/* Content */}
          <div className="absolute top-[35%] left-[8%] right-[15%]">
            <h1 className="text-white text-[2.8rem] md:text-[3.5rem] font-black leading-[1.1] tracking-tight mb-6">
              GENDER PAY GAP<br />REPORT 2024-2025
            </h1>
            <div className="inline-block bg-[#5DADE2] text-white text-sm font-bold uppercase tracking-widest px-4 py-2 mb-8">
              ZARKOON SECURITY LIMITED
            </div>
            <div className="text-white/90 text-sm font-light space-y-1 italic mt-4">
              <p>Company Number: 09761794</p>
              <p>Registered Office: 41 Beacontree Court, Beacontree Plaza,</p>
              <p>Gillette Way, Reading, England, RG2 0BS</p>
            </div>
            <p className="text-white font-bold text-xs uppercase tracking-widest mt-8">
              REPORTING PERIOD: 1 APRIL 2024 – 31 MARCH 2025
            </p>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            PAGE 2 — OVERVIEW
        ════════════════════════════════════════════════════════════════ */}
        <div className="report-page bg-[#0A1929] rounded-sm shadow-2xl overflow-hidden relative" style={{ aspectRatio: "210/297" }}>
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=1920')" }}
          />
          {/* Blue overlay shape */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-[65%] h-full bg-[#1E5A8E]/85 rounded-br-[25%]" />
          </div>

          {/* Logo top-left */}
          <div className="absolute top-[5%] left-[6%] flex items-center gap-2 z-10">
            <img src={logoImage} alt="Zarkoon Security" className="h-10 w-auto brightness-0 invert opacity-80" />
          </div>

          {/* Content */}
          <div className="absolute top-[25%] left-[6%] right-[10%] z-10">
            <h2 className="text-white text-[3rem] md:text-[3.5rem] font-black italic uppercase tracking-tight mb-8">
              OVERVIEW
            </h2>
            <p className="text-white/90 text-base md:text-lg font-light leading-[1.8] max-w-[65%]" style={{ textAlign: "justify" }}>
              Zarkoon Security Limited is a private limited company incorporated on 4 September 2015,
              operating in the private security sector. The company provides a range of security services across the
              United Kingdom. As part of our commitment to equality and transparency, we present our Gender Pay Gap Report
              for the specified reporting period.
            </p>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            PAGE 3 — METRICS
        ════════════════════════════════════════════════════════════════ */}
        <div className="report-page bg-[#0A1929] rounded-sm shadow-2xl overflow-hidden relative" style={{ aspectRatio: "210/297" }}>
          {/* Top-left image area */}
          <div className="absolute top-0 left-0 w-[50%] h-[42%] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=900"
              alt="Security Personnel"
              className="w-full h-full object-cover opacity-70"
            />
            {/* logo overlay */}
            <div className="absolute top-[8%] left-[8%] flex items-center gap-2">
              <img src={logoImage} alt="Zarkoon Security" className="h-8 w-auto brightness-0 invert opacity-60" />
            </div>
          </div>

          {/* Logo top-right */}
          <div className="absolute top-[5%] right-[6%] flex items-center gap-2">
            <img src={logoImage} alt="Zarkoon Security" className="h-10 w-auto brightness-0 invert opacity-70" />
          </div>

          {/* Title area */}
          <div className="absolute top-[22%] right-[4%] text-right">
            <div className="inline-block bg-[#1E5A8E] px-6 py-3 mb-1">
              <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wide">Gender Pay</h2>
            </div>
            <div className="inline-block bg-[#5DADE2] px-6 py-3">
              <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wide">Gap Metrics</h2>
            </div>
          </div>

          {/* Metric cards */}
          <div className="absolute top-[50%] left-[6%] right-[6%] space-y-4">
            <div className="bg-[#0D2137] border border-[#1E5A8E]/30 rounded-lg px-8 py-5 text-center">
              <span className="text-white/80 text-base font-light">Mean (Average) Gender Pay Gap: </span>
              <span className="text-[#5DADE2] text-xl font-black">0.0%</span>
            </div>
            <div className="bg-[#0D2137] border border-[#1E5A8E]/30 rounded-lg px-8 py-5 text-center">
              <span className="text-white/80 text-base font-light">Median Gender Pay Gap: </span>
              <span className="text-[#5DADE2] text-xl font-black">0.0%</span>
            </div>
            <div className="bg-[#1E5A8E]/20 border-l-4 border-[#5DADE2] rounded-r-lg px-8 py-5 mt-4">
              <p className="text-white/80 text-sm font-light leading-relaxed text-center">
                All employees at Zarkoon Security Limited are compensated at the national minimum wage rate.
                Consequently, there is no difference in average or median hourly pay between male and female employees.
              </p>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            PAGE 4 — GENDER DISTRIBUTION TABLE
        ════════════════════════════════════════════════════════════════ */}
        <div className="report-page bg-white rounded-sm shadow-2xl overflow-hidden relative" style={{ aspectRatio: "210/297" }}>
          {/* Top image band */}
          <div className="w-full h-[38%] overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200"
              alt="Professional team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80" />
            {/* Blue diagonal accent */}
            <div className="absolute top-0 right-0 w-[40%] h-full bg-[#5DADE2]/60 skew-x-[-12deg] translate-x-[15%]" />
            {/* Logo */}
            <div className="absolute top-[8%] right-[6%] flex items-center gap-2">
              <img src={logoImage} alt="Zarkoon Security" className="h-10 w-auto brightness-0 invert opacity-80" />
            </div>
          </div>

          {/* Title */}
          <div className="px-[8%] -mt-6 relative z-10">
            <div className="inline-block bg-[#0A1929] px-6 py-3 mb-1">
              <h2 className="text-white text-xl md:text-2xl font-black uppercase tracking-wide">Gender Distribution</h2>
            </div>
            <h3 className="text-[#1E5A8E] text-2xl md:text-3xl font-black uppercase tracking-tight mt-1">
              ACROSS PAY QUARTILES
            </h3>
          </div>

          {/* Table */}
          <div className="px-[8%] mt-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1E5A8E] text-white">
                  <th className="text-left px-6 py-4 font-bold tracking-wide uppercase text-xs">Pay Quartile</th>
                  <th className="text-center px-6 py-4 font-bold tracking-wide uppercase text-xs">Male (%)</th>
                  <th className="text-center px-6 py-4 font-bold tracking-wide uppercase text-xs">Female (%)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { quartile: "Lower", male: 81.8, female: 18.2 },
                  { quartile: "Lower Middle", male: 90.2, female: 9.8 },
                  { quartile: "Upper Middle", male: 92.3, female: 7.7 },
                  { quartile: "Upper", male: 93.8, female: 6.2 },
                ].map((row, i) => (
                  <tr key={row.quartile} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 text-[#0A1929] font-semibold border-b border-gray-200">{row.quartile}</td>
                    <td className="px-6 py-4 text-center text-[#0A1929] font-bold border-b border-gray-200">{row.male}</td>
                    <td className="px-6 py-4 text-center text-[#0A1929] font-bold border-b border-gray-200">{row.female}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            PAGE 5 — BONUS PAY GAP
        ════════════════════════════════════════════════════════════════ */}
        <div className="report-page bg-[#0A1929] rounded-sm shadow-2xl overflow-hidden relative" style={{ aspectRatio: "210/297" }}>
          {/* Left image */}
          <div className="absolute top-0 left-0 w-[50%] h-[50%] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=80&w=900"
              alt="Business professional"
              className="w-full h-full object-cover opacity-60"
            />
          </div>

          {/* Logo top-right */}
          <div className="absolute top-[5%] right-[6%] flex items-center gap-2">
            <img src={logoImage} alt="Zarkoon Security" className="h-10 w-auto brightness-0 invert opacity-70" />
          </div>

          {/* Title */}
          <div className="absolute top-[30%] right-[6%]">
            <div className="inline-block bg-[#1E5A8E] px-6 py-3">
              <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wide">Bonus Pay Gap</h2>
            </div>
          </div>

          {/* Cards */}
          <div className="absolute top-[52%] left-[6%] right-[6%] space-y-3">
            <div className="bg-[#1E5A8E]/30 border-l-4 border-[#5DADE2] px-6 py-4">
              <p className="text-white/90 text-sm font-light">Mean Bonus Pay Gap: <span className="font-bold text-[#5DADE2]">Not applicable</span></p>
            </div>
            <div className="bg-[#1E5A8E]/30 border-l-4 border-[#5DADE2] px-6 py-4">
              <p className="text-white/90 text-sm font-light">Median Bonus Pay Gap: <span className="font-bold text-[#5DADE2]">Not applicable</span></p>
            </div>
            <div className="bg-[#1E5A8E]/15 border-l-4 border-[#5DADE2] rounded-r-lg px-6 py-5 mt-2">
              <p className="text-white/80 text-sm font-light leading-relaxed" style={{ textAlign: "justify" }}>
                Zarkoon Security Limited does not operate a bonus pay system; therefore, there is no bonus
                pay gap to report. Zarkoon Security Limited is committed to ensuring equal pay for equal work,
                regardless of gender. The absence of a gender pay gap in our organization underscores our
                dedication to fair and equitable compensation practices.
              </p>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            PAGE 6 — CONTACT / CLOSING
        ════════════════════════════════════════════════════════════════ */}
        <div className="report-page bg-[#0A1929] rounded-sm shadow-2xl overflow-hidden relative" style={{ aspectRatio: "210/297" }}>
          {/* Large logo centered */}
          <div className="absolute top-[20%] left-0 right-0 flex justify-center">
            <img src={logoImage} alt="Zarkoon Security" className="h-24 md:h-32 w-auto brightness-0 invert opacity-90" />
          </div>

          {/* Contact block */}
          <div className="absolute top-[50%] left-0 right-0 text-center px-[10%]">
            <h2 className="text-white text-3xl font-bold mb-8 tracking-wide">Contact Us</h2>
            <div className="space-y-3 text-white/70 text-sm font-light">
              <p>Phone: <span className="text-white font-medium">07466 493 229</span></p>
              <p>Email: <span className="text-white font-medium">info@zarkoonsecurity.co.uk</span></p>
              <p>Address: <span className="text-white font-medium">Halsway Road, Hayes, UB3 3JT</span></p>
              <p>Website: <span className="text-[#5DADE2] font-medium">www.zarkoonsecurity.co.uk</span></p>
            </div>
          </div>

          {/* Decorative accent */}
          <div className="absolute bottom-[8%] right-0 w-[25%] h-[20%] bg-[#5DADE2]/30 rounded-tl-[40px]" />

          {/* Footer line */}
          <div className="absolute bottom-[4%] left-[8%] right-[8%] border-t border-white/10 pt-4 text-center">
            <p className="text-white/40 text-xs font-light">
              © 2025 Zarkoon Security Limited. All Rights Reserved.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
