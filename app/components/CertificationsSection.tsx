import { Link } from "react-router-dom";
import { FileText, Award, ShieldCheck } from "lucide-react";

export function CertificationsSection() {
  const certifications = [
    {
      title: "IOSH Managing Safely",
      description: "Demonstrating our commitment to health and safety management to the highest standards.",
      pdfUrl: "/assets/certifications/IOSH_Managing_Safely.pdf",
      icon: <Award className="w-16 h-16 text-[#1E5A8E]" />,
      // The user mentioned slicing an image. We use a placeholder image if the user uploads it.
      image: "/assets/certifications/image_81a2a8.png",
      imageClass: "object-top",
    },
    {
      title: "ACT Awareness e-Learning",
      description: "Action Counters Terrorism (ACT) awareness training for identifying and reporting suspicious activity.",
      pdfUrl: "/assets/certifications/ACT_Awareness_eLearning.pdf",
      icon: <FileText className="w-16 h-16 text-[#5DADE2]" />,
      image: "/assets/certifications/image_81a2a8.png",
      imageClass: "object-center",
    },
    {
      title: "ACT Security e-Learning",
      description: "Advanced ACT security training ensuring our personnel are prepared for specialized security threats.",
      pdfUrl: "/assets/certifications/ACT_Security_eLearning.pdf",
      icon: <ShieldCheck className="w-16 h-16 text-[#0A1929]" />,
      image: "/assets/certifications/image_81a2a8.png",
      imageClass: "object-bottom",
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-gray-50 border-t border-gray-100 font-['Outfit']">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#1E5A8E] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            ACCREDITED & RECOGNIZED
          </p>
          <h2 className="text-5xl text-[#0A1929] font-bold mb-6 tracking-tight">
            Our Professional Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#5DADE2] to-transparent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg font-light leading-relaxed max-w-3xl mx-auto">
            We hold industry-leading certifications that underscore our dedication to safety, security, and exceptional service standards.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {certifications.map((cert) => (
            <div 
              key={cert.title} 
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 border-b border-gray-100 overflow-hidden">
                {/* Fallback Icon behind the image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                   {cert.icon}
                </div>
                
                {/* Image Slice Implementation */}
                {/* We use object-view-box or background positioning. For broad compatibility: */}
                <div className="w-full h-full relative z-10 flex items-center justify-center">
                   <img 
                     src={cert.image} 
                     alt={`${cert.title} Badge`}
                     className={`w-full h-full object-cover rounded-md shadow-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300 ${cert.imageClass}`} 
                     onError={(e) => {
                       // Hide broken image placeholder, leaving just the fallback icon visible
                       (e.target as HTMLImageElement).style.display = 'none';
                       const parent = (e.target as HTMLImageElement).parentElement;
                       if (parent && parent.previousElementSibling) {
                         (parent.previousElementSibling as HTMLElement).className = "absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 transform group-hover:scale-110";
                       }
                     }}
                   />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow text-center">
                <h3 className="text-[#0A1929] text-xl font-bold mb-4">{cert.title}</h3>
                <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">
                  {cert.description}
                </p>
                <div className="mt-auto">
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-[#1E5A8E] text-white px-6 py-3.5 text-sm font-semibold tracking-wide hover:bg-[#5DADE2] hover:-translate-y-1 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg group-hover:ring-2 ring-offset-2 ring-[#5DADE2]"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
