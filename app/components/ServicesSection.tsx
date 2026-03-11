import { Link } from "react-router-dom";
import mannedGuardingImg from "../../assets/manned-guarding-services.jpeg";
import eventSecurityImg from "../../assets/event-security-500x500.png";
import mobilePatrolImg from "../../assets/mobile patrol.jpg";
import keyHoldingImg from "../../assets/key holding 1 (2) (1).png";
import receptionSecurityImg from "../../assets/reception_security.png";

const services = [
  {
    title: "Manned Guarding",
    path: "/manned-guarding",
    image: mannedGuardingImg,
  },
  {
    title: "Event Security",
    path: "/event-security",
    image: eventSecurityImg,
  },
  {
    title: "Mobile Patrols",
    path: "/mobile-patrols",
    image: mobilePatrolImg,
  },
  {
    title: "Security Reception",
    path: "/security-reception",
    image: receptionSecurityImg,
  },
  {
    title: "Key Holding & Alarm Response",
    path: "/key-holding",
    image: keyHoldingImg,
  },
];

export function ServicesSection() {
  return (
    <div id="sectors">
      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Premium Header */}
          <div className="text-center mb-20">
            <p className="text-[#1E5A8E] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              DEDICATED COMPREHENSIVE SECURITY SERVICES
            </p>
            <h2 className="text-5xl text-[#0A1929] font-bold mb-6 tracking-tight">
              Your Safety, Our Commitment
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#5DADE2] to-transparent mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg font-light leading-relaxed max-w-4xl mx-auto">
              With a rich legacy of providing high quality security services, we bring over years of experience under our belt, we've honed our skills in delivering unparalleled safety solutions for residential, commercial, and industrial properties.
            </p>
          </div>

          {/* Services Grid - First Row (3 items) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 max-w-6xl mx-auto">
            {services.slice(0, 3).map((service) => (
              <div key={service.path} className="group flex flex-col items-center text-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl border-4 border-white ring-2 ring-gray-200 group-hover:ring-[#5DADE2] transition-all duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1E5A8E]/0 group-hover:bg-[#1E5A8E]/20 transition-all duration-300"></div>
                </div>
                <h3 className="text-[#0A1929] text-lg font-semibold mb-5 tracking-wide">{service.title}</h3>
                <Link
                  to={service.path}
                  className="bg-[#1E5A8E] text-white px-8 py-2.5 text-sm font-semibold tracking-wide hover:bg-[#5DADE2] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>

          {/* Services Grid - Second Row (2 items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
            {services.slice(3, 5).map((service) => (
              <div key={service.path} className="group flex flex-col items-center text-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl border-4 border-white ring-2 ring-gray-200 group-hover:ring-[#5DADE2] transition-all duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1E5A8E]/0 group-hover:bg-[#1E5A8E]/20 transition-all duration-300"></div>
                </div>
                <h3 className="text-[#0A1929] text-lg font-semibold mb-5 tracking-wide">{service.title}</h3>
                <Link
                  to={service.path}
                  className="bg-[#1E5A8E] text-white px-8 py-2.5 text-sm font-semibold tracking-wide hover:bg-[#5DADE2] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>

          {/* More Services CTA */}
          <div className="text-center mt-16">
            <Link
              to="/manned-guarding"
              className="inline-block bg-gradient-to-r from-[#1E5A8E] to-[#163D5E] text-white px-12 py-4 text-base font-bold tracking-wide hover:from-[#5DADE2] hover:to-[#1E5A8E] transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              More Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
