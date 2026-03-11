import { Link } from "react-router-dom";
import ioshLogo from "../../assets/iosh.png";
import actAwarenessLogo from "../../assets/act awareness e leaarning.png";
import actSecurityLogo from "../../assets/act security e-learning.png";

export function CertificationsSection() {
  const certifications = [
    {
      title: "IOSH Managing Safely",
      pdf: "/assets/certifications/IOSH_Managing_Safely.pdf",
      logo: ioshLogo,
    },
    {
      title: "ACT Awareness e-Learning",
      pdf: "/assets/certifications/ACT_Awareness_eLearning.pdf",
      logo: actAwarenessLogo,
    },
    {
      title: "ACT Security e-Learning",
      pdf: "/assets/certifications/ACT_Security_eLearning.pdf",
      logo: actSecurityLogo,
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100 font-['Outfit']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#1E5A8E] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            RECOGNIZED EXCELLENCE
          </p>
          <h2 className="text-4xl md:text-5xl text-[#0A1929] font-bold mb-6 tracking-tight">
            Our Professional Certifications
          </h2>
          <div className="w-24 h-1 bg-[#5DADE2] mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg font-light leading-relaxed max-w-3xl mx-auto">
            Click on any logo to view our official certification documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-12 bg-gray-50 rounded-3xl border-2 border-transparent hover:border-[#1E5A8E]/20 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
            >
              <div className="mb-8 w-full h-32 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <img 
                  src={cert.logo} 
                  alt={cert.title} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-[#0A1929] text-xl font-bold mb-2 group-hover:text-[#1E5A8E] transition-colors">
                {cert.title}
              </h3>
              <span className="text-[#5DADE2] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Certificate →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
