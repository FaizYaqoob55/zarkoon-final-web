import { Link } from "react-router-dom";
import {
  ChevronRight,
  ExternalLink,
  GraduationCap,
  ShieldCheck,
  Building2,
  Lock,
  Info,
  Globe
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";

import heroImage from "figma:asset/training-hero.jpg";
import guardImage from "figma:asset/security-professional.jpg";

const portals = [
  {
    title: "Highfield eLearning",
    icon: <GraduationCap className="w-12 h-12 text-[#5DADE2]" />,
    link: "https://www.highfieldlearning.com/",
    description: "Access your mandatory e-learning modules and certification courses.",
    hoverImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Ava Academy (CoursePortal)",
    icon: <Building2 className="w-12 h-12 text-[#5DADE2]" />,
    link: "https://ava-academy.co.uk/",
    description: "Comprehensive training resources for specialized security roles.",
    hoverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  }
];

const resources = [
  {
    title: "TARA – Tara Scotland",
    icon: <Info className="w-10 h-10 text-[#D4AF37]" />,
    description: "Training and resource support for corporate security industry.",
    link: "https://www.tarascotland.com/",
    hoverImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Police UK",
    icon: <ShieldCheck className="w-10 h-10 text-[#D4AF37]" />,
    description: "Stay updated with public safety policing news and standards.",
    link: "https://www.police.uk/",
    hoverImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "NPSA – Security Guidance",
    icon: <Lock className="w-10 h-10 text-[#D4AF37]" />,
    description: "National Protective Security Authority guidance for professionals.",
    link: "https://www.npsa.gov.uk/",
    hoverImage: "https://images.unsplash.com/photo-1558223108-63fe92d7133f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "NCSC",
    icon: <Globe className="w-10 h-10 text-[#D4AF37]" />,
    description: "National Cyber Security Centre advice to enhance digital safety.",
    link: "https://www.ncsc.gov.uk/",
    hoverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  }
];

export function TrainingPortal() {
  return (
    <div className="min-h-screen font-['Outfit'] bg-white">
      <Helmet>
        <title>Training Portal | Zarkoon Security Limited</title>
        <meta name="description" content="Access official training portals and career growth resources for Zarkoon Security professionals." />
      </Helmet>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Training Portal Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-[#0A1929]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center px-6 max-w-4xl mt-16">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight uppercase">
            Training Portal
          </h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#5DADE2] uppercase tracking-widest font-bold mb-10">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-white/50" />
            <span className="text-white">Training Portal</span>
          </div>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-[#1E5A8E] text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-sm mb-6">
              YOUR SAFETY, OUR PRIORITY: ZARKOON SECURITY SERVICE
            </div>
            <h2 className="text-[#0A1929] text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-8">
              Develop Your Skills.<br />
              <span className="text-[#1E5A8E]">Build Your Career.</span>
            </h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed mb-10">
              At Zarkoon Security Services, we take pride in supporting our team's personal and
              professional growth. Our Training Portal and curated resources are here to help
              every staff member stay sharp, qualified, and career-focused. Whether you're
              just starting out or progressing toward a leadership role, we're here to support
              your development with reliable tools, accredited training, and direct access to
              learning platforms.
            </p>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img src={guardImage} alt="Professional Security Officer" className="w-full h-auto object-cover" />
              </div>
              {/* Inset Image (Composite Effect) */}
              <div className="absolute -bottom-12 -right-12 w-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1558442086-8ea19a79cd4d?auto=format&fit=crop&q=80&w=500"
                  alt="Security Guard Duty"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Employee Training Portals ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#0A1929] text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Employee Training Portals
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              All employees receive login details during onboarding. If you need to revisit <br />
              your portal, simply use the links below:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {portals.map((portal, idx) => (
              <div
                key={idx}
                className="relative bg-[#2D3748] p-12 rounded-xl shadow-xl flex flex-col items-center text-center group transition-all duration-500 border-b-4 border-transparent hover:border-[#1E5A8E] overflow-hidden"
              >
                {/* Hover Image Background */}
                <div
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-700"
                  style={{ backgroundImage: `url('${portal.hoverImage}')` }}
                />
                <div className="absolute inset-0 z-10 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-20 mb-8 transform group-hover:scale-110 transition-transform duration-300">
                  {portal.icon}
                </div>
                <h3 className="relative z-20 text-white text-3xl font-extrabold mb-8 tracking-tight">{portal.title}</h3>
                <a
                  href={portal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 w-48"
                >
                  <Button className="w-full bg-[#4A90E2] hover:bg-white hover:text-[#0A1929] text-white font-bold py-6 rounded-none transition-all uppercase tracking-widest text-sm shadow-lg">
                    {idx === 0 ? "Learn More" : "Read More"}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Useful Resources ── */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#0A1929] text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Useful Resources for Career Growth
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              Essential links and guidance from industry-leading security and safety organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, idx) => (
              <div
                key={idx}
                className="relative bg-[#2D3748] p-8 rounded-2xl shadow-lg flex flex-col group border border-white/5 hover:border-[#D4AF37]/30 transition-all overflow-hidden"
              >
                {/* Hover Image Background */}
                <div
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-700"
                  style={{ backgroundImage: `url('${resource.hoverImage}')` }}
                />
                <div className="absolute inset-0 z-10 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-20 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                <h4 className="relative z-20 text-white text-lg font-bold mb-3 leading-snug">
                  {resource.title}
                </h4>
                <p className="relative z-20 text-white/50 text-sm font-light leading-relaxed mb-8 flex-grow group-hover:text-white/80 transition-colors">
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20"
                >
                  <Button variant="outline" className="w-full border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white transition-all font-bold uppercase tracking-widest text-xs py-5 rounded-none">
                    Learn More <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── CTA / Affiliations Hint (Optional) ── */}
      <section className="py-20 bg-[#0A1929]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">Need Recruitment Support?</h2>
          <p className="text-white/60 mb-10 font-light leading-relaxed">
            Our talent acquisition team is here to help you navigate your career path at Zarkoon.
          </p>
          <Link to="/contact-us">
            <Button className="bg-[#D4AF37] hover:bg-white text-[#0A1929] font-black px-12 py-5 rounded-full shadow-xl transition-all uppercase tracking-widest">
              Contact Recruitment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
