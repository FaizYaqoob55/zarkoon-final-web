import siaLogo from "../../assets/sia approved contractor.jpg";
import chasLogo from "../../assets/chas standard.webp";
import icoLogo from "../../assets/ico information.jpg";
import socialValueLogo from "../../assets/social value.jpg";
import nasduLogo from "../../assets/nasdu member.jpg";
import safeContractorLogo from "../../assets/SAFECONTRACTOR-LOGO-V2.webp";

export function AffiliationsSection() {
  const accreditations = [
    { imgSrc: siaLogo, altText: "SIA Approved Contractor" },
    { imgSrc: chasLogo, altText: "CHAS Accredited" },
    { imgSrc: icoLogo, altText: "Information Commissioner's Office" },
    { imgSrc: socialValueLogo, altText: "Social Value Quality Management" },
    { imgSrc: nasduLogo, altText: "NASDU Member" },
    { imgSrc: safeContractorLogo, altText: "SafeContractor Health & Safety" }
  ];

  return (
    <section id="accreditations" className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-[#0A1929] text-3xl font-bold mb-4 tracking-tight">
          Affiliations and <span className="text-[#1E5A8E]">Accreditations</span>
        </h2>
        <div className="w-20 h-1 bg-[#5DADE2] mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {accreditations.map((item, idx) => {
            const isICO = item.imgSrc === icoLogo;
            const content = (
              <div
                className="group flex items-center justify-center w-full h-32 p-4 rounded-2xl bg-white border border-gray-200 hover:border-[#5DADE2]/30 transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <img 
                  src={item.imgSrc} 
                  alt={item.altText}
                  className="w-full h-full object-contain"
                />
              </div>
            );

            return isICO ? (
              <a 
                key={idx} 
                href="https://find-and-update.company-information.service.gov.uk/company/09761794" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                {content}
              </a>
            ) : (
              <div key={idx} className="w-full">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

