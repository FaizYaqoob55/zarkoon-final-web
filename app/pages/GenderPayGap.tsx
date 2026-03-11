import { Link } from "react-router-dom";
import { ChevronRight, Download, TrendingUp, Users, Gift, FileText } from "lucide-react";
import { Button } from "../components/ui/button";
import logoImage from "figma:asset/c13cca16d7f41b2233e632ec5f799ebb98dc1e40.png";

const quartileData = [
  { quartile: "Lower",        male: 81.8, female: 18.2 },
  { quartile: "Lower Middle", male: 90.2, female: 9.8  },
  { quartile: "Upper Middle", male: 92.3, female: 7.7  },
  { quartile: "Upper",        male: 93.8, female: 6.2  },
];

const printStyles = `
  @media print {
    /* Hide site chrome */
    header, footer, nav,
    .no-print {
      display: none !important;
    }

    /* Reset page */
    body {
      background: white !important;
      color: #0A1929 !important;
      font-family: 'Outfit', sans-serif;
      margin: 0;
      padding: 0;
    }

    /* Show print-only logo */
    .print-only {
      display: flex !important;
    }

    /* Make all sections white with dark text */
    section {
      background: white !important;
      padding: 16pt 0 !important;
      page-break-inside: avoid;
    }

    /* Override dark text to charcoal */
    h1, h2, h3, p, span, td, th, li {
      color: #0A1929 !important;
    }

    /* Accent colour on values */
    .print-accent {
      color: #1E5A8E !important;
    }

    /* Table */
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 10pt;
    }
    thead tr {
      background: #1E5A8E !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    thead th {
      color: white !important;
      padding: 8pt 12pt;
      text-align: left;
    }
    tbody tr:nth-child(even) {
      background: #F4F6F9 !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    tbody td {
      padding: 8pt 12pt;
      border-bottom: 1px solid #e2e8f0;
    }

    /* Metric rows */
    .print-metric-row {
      display: flex;
      justify-content: space-between;
      border: 1px solid #CBD5E0;
      border-radius: 6pt;
      padding: 8pt 12pt;
      margin-bottom: 6pt;
    }

    /* Accent bar on left of note */
    .print-note {
      border-left: 4pt solid #1E5A8E;
      padding: 8pt 12pt;
      margin-top: 8pt;
      background: #EBF4FB !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      border-radius: 0 6pt 6pt 0;
    }

    /* Section title accent line */
    .print-rule {
      border: none;
      border-top: 2pt solid #1E5A8E;
      width: 40pt;
      margin: 4pt 0 10pt 0;
    }

    /* Hide progress bars */
    .bar-container {
      display: none;
    }

    /* Page margins */
    @page {
      margin: 20mm 18mm;
      size: A4;
    }
  }
`;

export function GenderPayGap() {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen font-['Outfit'] bg-[#F4F6F9]">

      {/* ── Injected Print Styles ─────────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: printStyles }} />

      {/* ── Print-only document header (hidden on screen) ─────────────── */}
      <div className="print-only hidden items-center gap-4 px-0 pt-0 pb-6 border-b-2 border-[#1E5A8E] mb-6">
        <img src={logoImage} alt="Zarkoon Security Services" style={{ height: 56, width: "auto" }} />
        <div>
          <div className="text-[10pt] font-bold uppercase tracking-widest text-[#1E5A8E]">
            Zarkoon Security Limited
          </div>
          <div className="text-[9pt] text-gray-500 font-light">
            Gender Pay Gap Report 2024–2025 &nbsp;|&nbsp; Reporting Period: 1 April 2024 – 31 March 2025
          </div>
        </div>
      </div>

      {/* ── Hero / Title Banner ─────────────────────────────────────────── */}
      <section className="relative bg-[#0A1929] overflow-hidden no-print">
        <div className="absolute top-0 left-0 w-64 h-40 bg-[#1E5A8E]/40 rounded-br-[80px]" />
        <div className="absolute bottom-0 right-0 w-48 h-32 bg-[#1E5A8E]/30 rounded-tl-[60px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-[#5DADE2] uppercase tracking-widest font-bold mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white/70">Sectors</span>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white">Gender Pay Gap Report</span>
          </div>

          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
            Gender Pay Gap<br />Report 2024–2025
          </h1>

          <div className="inline-block bg-[#1E5A8E] text-white text-sm font-bold uppercase tracking-widest px-5 py-2 mb-8">
            Zarkoon Security Limited
          </div>

          <div className="text-white/60 text-sm font-light space-y-1 mb-10">
            <p>Reporting Period: <span className="text-white font-semibold">1 April 2024 – 31 March 2025</span></p>
          </div>

          {/* Download CTA — updated to open the standalone report */}
          <Link
            to="/report/gender-pay-gap-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="no-print bg-[#1E5A8E] hover:bg-[#5DADE2] text-white px-10 py-4 rounded-full font-bold text-base shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-widest border-2 border-white/10 flex items-center gap-3 w-fit"
          >
            <Download className="w-5 h-5" />
            Download Full PDF Report
          </Link>
        </div>
      </section>

      {/* ── Section 1 – Overview ────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A1929] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 no-print"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=1920')" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#1E5A8E] rounded-xl flex items-center justify-center flex-shrink-0 no-print">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight uppercase">
              Overview
            </h2>
          </div>
          <hr className="print-rule hidden" />
          <div className="w-20 h-1 bg-[#5DADE2] mb-8 no-print" />
          <p className="text-white/85 text-lg md:text-xl font-light leading-relaxed">
            Zarkoon Security Limited is a private limited company operating in the private security sector.
            As part of our commitment to equality and transparency, we present our Gender Pay Gap Report.
            The company provides a range of professional security services across the United Kingdom and is
            dedicated to maintaining fair and equitable compensation practices for all employees regardless
            of gender.
          </p>
        </div>
      </section>

      {/* ── Section 2 – Metrics ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#0D2137]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#1E5A8E] rounded-xl flex items-center justify-center flex-shrink-0 no-print">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight uppercase">
              Gender Pay Gap Metrics
            </h2>
          </div>
          <hr className="print-rule hidden" />
          <div className="w-20 h-1 bg-[#5DADE2] mb-10 no-print" />

          {/* Metric rows */}
          <div className="space-y-4 mb-8">
            <div className="print-metric-row bg-[#0A1929]/80 border border-[#1E5A8E]/40 rounded-xl px-8 py-5 flex items-center justify-between">
              <span className="text-white/80 text-base font-light">Mean (Average) Gender Pay Gap</span>
              <span className="print-accent text-[#5DADE2] text-2xl font-black tracking-tight">0.0%</span>
            </div>
            <div className="print-metric-row bg-[#0A1929]/80 border border-[#1E5A8E]/40 rounded-xl px-8 py-5 flex items-center justify-between">
              <span className="text-white/80 text-base font-light">Median Gender Pay Gap</span>
              <span className="print-accent text-[#5DADE2] text-2xl font-black tracking-tight">0.0%</span>
            </div>
          </div>

          {/* Note */}
          <div className="print-note bg-[#1E5A8E]/20 border-l-4 border-[#5DADE2] rounded-r-xl px-8 py-6">
            <p className="text-white/80 text-base font-light leading-relaxed text-center">
              All employees are compensated at the national minimum wage rate; consequently, there is no
              difference in pay between male and female employees.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3 – Gender Distribution Table ───────────────────────── */}
      <section className="py-20 bg-[#F4F6F9]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#1E5A8E] rounded-xl flex items-center justify-center flex-shrink-0 no-print">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-[#1E5A8E] text-xs font-bold uppercase tracking-widest mb-1">Distribution</p>
              <h2 className="text-[#0A1929] text-3xl md:text-4xl font-bold tracking-tight uppercase">
                Gender Distribution Across Pay Quartiles
              </h2>
            </div>
          </div>
          <hr className="print-rule hidden" />
          <div className="w-20 h-1 bg-[#1E5A8E] mb-10 no-print" />

          {/* Table */}
          <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1E5A8E] text-white">
                  <th className="text-left px-8 py-5 font-bold tracking-wide uppercase text-sm">Pay Quartile</th>
                  <th className="text-center px-8 py-5 font-bold tracking-wide uppercase text-sm">Male (%)</th>
                  <th className="text-center px-8 py-5 font-bold tracking-wide uppercase text-sm">Female (%)</th>
                </tr>
              </thead>
              <tbody>
                {quartileData.map((row, i) => (
                  <tr
                    key={row.quartile}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#F4F6F9]"}
                  >
                    <td className="px-8 py-5 text-[#0A1929] font-semibold">{row.quartile}</td>
                    <td className="px-8 py-5 text-center">
                      <div className="flex items-center justify-center gap-3">
                        <div className="bar-container flex-1 bg-gray-100 rounded-full h-2 max-w-[100px]">
                          <div className="bg-[#1E5A8E] h-2 rounded-full" style={{ width: `${row.male}%` }} />
                        </div>
                        <span className="text-[#0A1929] font-bold w-12 text-right">{row.male}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <div className="flex items-center justify-center gap-3">
                        <div className="bar-container flex-1 bg-gray-100 rounded-full h-2 max-w-[100px]">
                          <div className="bg-[#5DADE2] h-2 rounded-full" style={{ width: `${row.female * 5}%` }} />
                        </div>
                        <span className="text-[#0A1929] font-bold w-12 text-right">{row.female}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 4 – Bonus Pay Gap ───────────────────────────────────── */}
      <section className="py-20 bg-[#0A1929]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#1E5A8E] rounded-xl flex items-center justify-center flex-shrink-0 no-print">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight uppercase">
              Bonus Pay Gap
            </h2>
          </div>
          <hr className="print-rule hidden" />
          <div className="w-20 h-1 bg-[#5DADE2] mb-10 no-print" />

          <div className="space-y-4 mb-8">
            <div className="print-metric-row bg-[#0D2137] border border-[#1E5A8E]/40 rounded-xl px-8 py-5 flex items-center justify-between">
              <span className="text-white/80 text-base font-light">Mean Bonus Pay Gap</span>
              <span className="print-accent text-[#5DADE2] font-bold tracking-wide">Not Applicable</span>
            </div>
            <div className="print-metric-row bg-[#0D2137] border border-[#1E5A8E]/40 rounded-xl px-8 py-5 flex items-center justify-between">
              <span className="text-white/80 text-base font-light">Median Bonus Pay Gap</span>
              <span className="print-accent text-[#5DADE2] font-bold tracking-wide">Not Applicable</span>
            </div>
          </div>

          <div className="print-note bg-[#1E5A8E]/20 border-l-4 border-[#5DADE2] rounded-r-xl px-8 py-6">
            <p className="text-white/85 text-base font-light leading-relaxed">
              The company does not operate a bonus pay system; therefore, there is no bonus pay gap to report.
              Zarkoon Security Services is committed to ensuring equal pay for equal work, regardless of gender.
              The absence of a gender pay gap in our organisation underscores our dedication to fair and
              equitable compensation practices.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA — hidden at print ───────────────────────────────── */}
      <section className="py-20 pb-28 bg-[#F4F6F9] no-print">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="text-[#0A1929] text-2xl font-bold mb-4">
            Download the Full Report
          </h3>
          <p className="text-[#4A5568] text-base font-light mb-8 leading-relaxed">
            For the complete Gender Pay Gap Report including methodology and statutory declarations,
            download our official PDF document.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/report/gender-pay-gap-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1E5A8E] hover:bg-[#5DADE2] text-white px-10 py-4 rounded-full font-bold text-base shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-widest border-2 border-transparent flex items-center gap-3 justify-center"
            >
              <Download className="w-5 h-5" />
              Download PDF Report
            </Link>
            <Link to="/contact-us">
              <Button
                variant="outline"
                className="border-2 border-[#1E5A8E] text-[#1E5A8E] hover:bg-[#1E5A8E] hover:text-white px-10 py-5 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 uppercase tracking-widest"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
