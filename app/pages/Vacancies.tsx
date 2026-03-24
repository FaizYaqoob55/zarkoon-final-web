import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ChevronRight,
  MapPin,
  Clock,
  ShieldCheck,
  Mail,
  Search,
  Filter,
  DollarSign,
  Briefcase,
  UserCheck,
  Upload,
  Send,
  ArrowRight,
  CheckCircle,
  Loader2
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────────
   Job Data
───────────────────────────────────────────────────────────────────────────── */
const jobsData = [
  {
    id: "door-supervisor",
    title: "SIA Door Supervisor",
    location: "London",
    role: "Operational",
    salary: "£14.50 - £16.00 /hr",
    shift: "Evening & Weekend shifts (Various Sites)",
    requirements: "Valid SIA Door Supervisor License, minimum 2 years experience.",
    description: "Seeking professional, vigilant individuals for high-end hospitality venues. Must have excellent conflict management skills and a client-focused approach.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "cctv-operator",
    title: "CCTV Control Room Operator",
    location: "Manchester",
    role: "Technical",
    salary: "£32,000 - £35,000 /yr",
    shift: "4 On / 4 Off Rotational Shifts",
    requirements: "SIA PSS (CCTV) License, high tech-literacy, attention to detail.",
    description: "Monitor state-of-the-art surveillance systems at Zarkoon's regional HQ. Coordinate with field teams and manage incident responses in real-time.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "event-steward",
    title: "Professional Event Steward",
    location: "Birmingham",
    role: "Event",
    salary: "£12.00 - £14.00 /hr",
    shift: "Flexible / Event-based",
    requirements: "Valid SIA License, level 2 Spectator Safety preferred.",
    description: "Join our elite event security squad for stadiums and festivals. Focus on crowd safety, access control, and high-quality guest service.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80"
  },
  {
    id: "corporate-officer",
    title: "Corporate Security Officer",
    location: "London",
    role: "Operational",
    salary: "£30,000 - £33,000 /yr",
    shift: "Monday to Friday (Days)",
    requirements: "SIA Guarding License, impeccable grooming, corporate experience.",
    description: "Provide reception and concierge-style security for a Tier-1 financial institution. Maintain a secure environment while assisting visitors.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80"
  },
  {
    id: "mobile-patrol",
    title: "Mobile Patrol Officer",
    location: "Leicester",
    role: "Operational",
    salary: "£13.50 - £15.00 /hr",
    shift: "Night Shifts",
    requirements: "SIA Guarding License, Full UK Driving License (Clean).",
    description: "Conduct scheduled lock-ups, internal patrols, and alarm response across multiple client sites in our company patrol vehicles.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&q=80"
  }
];

export function Vacancies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  // Form States
  const [fullName, setFullName] = useState("");
  const [siaNumber, setSiaNumber] = useState("");
  const [email, setEmail] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // File Upload Logic
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErrors(errors.filter(err => err !== "cvFile"));

    if (file.size > 5 * 1024 * 1024) {
      alert("File is too large. Maximum size is 5MB to prevent system lag.");
      return;
    }

    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      alert("Invalid file format. Please upload PDF, DOC, or DOCX.");
      return;
    }
    setCvFile(file);
  };

  // Form Submission Logic
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create FormData object
    const formData = new FormData(e.currentTarget);
    
    // Append unique subject for Gmail threading
    formData.append("_subject", `New CV: ${fullName} [${new Date().toLocaleTimeString()}]`);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/faizyaqoob55@gmail.com", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        // Reset form states
        setFullName("");
        setSiaNumber("");
        setEmail("");
        setCvFile(null);
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter logic
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "All" || job.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleApply = (id: string) => {
    setSelectedJob(id);
    setShowApplyModal(true);
  };

  return (
    <div className="min-h-screen font-['Outfit'] bg-[#F4F6F9] pb-20">
      <Helmet>
        <title>Careers & Job Opportunities | Zarkoon Security Limited</title>
        <meta name="description" content="Join the Zarkoon Security Limited team. We are always looking for dedicated, SIA-licensed professionals to join our elite security force in the UK." />
      </Helmet>

      {/* ── Hero Section ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "450px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1929]/90 via-[#0A1929]/70 to-transparent" />

        {/* Decorative Gold Accent */}
        <div className="absolute top-0 right-0 w-96 h-full bg-[#D4AF37]/10 skew-x-[-20deg] translate-x-32" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center h-full pt-20" style={{ minHeight: "450px" }}>
          <div className="flex items-center space-x-2 text-sm text-[#5DADE2] uppercase tracking-[0.2em] font-bold mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white">Careers</span>
          </div>

          <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6 uppercase">
            Build Your <span className="text-[#D4AF37]">Career</span>
            <br />
            With Zarkoon Security
          </h1>

          <div className="inline-block bg-[#1E5A8E] text-white text-sm font-bold uppercase tracking-[0.2em] px-6 py-2 mb-8 border-l-4 border-[#D4AF37]">
            Professional Careers 2026
          </div>

          <p className="text-white/80 text-lg max-w-2xl font-light leading-relaxed">
            Join a company where reliability, excellence, and professional growth are non-negotiable standards.
            We provide the path; you bring the dedication.
          </p>
        </div>
      </section>

      {/* ── Careers Content Section ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[#0A1929] text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">
            Join the <span className="text-[#1E5A8E]">Zarkoon Team</span>
          </h2>
          
          <div className="bg-[#F8FAFC] border-2 border-dashed border-[#1E5A8E]/20 rounded-[2rem] p-10 mb-16 shadow-inner">
            <p className="text-gray-600 text-xl font-light leading-relaxed">
              Zarkoon Security Limited is always looking for dedicated, licensed professionals 
              to join our expanding team. If you are passionate about security and meet our high standards, 
              please use the portal below to submit your details and CV. Our recruitment team reviews all 
              submissions within 48 hours.
            </p>
          </div>
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          GENERAL CTA — Multi-step recruitment portal vibe
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0A1929] rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1E5A8E]/10 -skew-x-12 translate-x-20" />

            {/* Left Info */}
            <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="w-16 h-1 bg-[#D4AF37] mb-8" />
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Can't find the <br />
                <span className="text-[#5DADE2]">perfect fit?</span>
              </h2>
              <p className="text-white/60 text-lg mb-10 font-light leading-relaxed">
                Zarkoon Security Limited is always looking for elite personnel.
                Even if there's no live vacancy that suits you today, we'd love to
                keep your details for our priority talent pool.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-white/80">
                  <UserCheck className="w-5 h-5 text-[#D4AF37]" />
                  <span>Speculative CV Submissions</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <UserCheck className="w-5 h-5 text-[#D4AF37]" />
                  <span>Priority Referral for Local Roles</span>
                </li>
              </ul>

              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-2xl italic">98%+</span>
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Team Retention</span>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-2xl italic">24/7</span>
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Support Portal</span>
                </div>
              </div>
            </div>

            {/* Right Simulation Form */}
            <div className="lg:w-1/2 p-12 md:p-16 bg-[#1C2B3A] relative">
                  <div className="mb-10 flex items-center justify-between">
                    <h3 className="text-white text-xl font-bold">Quick Application</h3>
                    <span className="text-[#5DADE2] text-xs font-bold tracking-widest uppercase">Step 1 of 2</span>
                  </div>

                  {isSubmitted ? (
                    <div className="bg-green-500/10 border border-green-500/50 rounded-2xl p-10 text-center animate-in fade-in zoom-in duration-500">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                      <h3 className="text-white text-2xl font-bold mb-2">Thank you!</h3>
                      <p className="text-gray-300">Your application has been sent successfully.</p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="mt-8 text-[#5DADE2] hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                      >
                        Send Another Application
                      </button>
                    </div>
                  ) : (
                    <form 
                      className="space-y-6" 
                      onSubmit={handleFormSubmit}
                    >
                      {/* FormSubmit Configuration */}
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="Position" value={selectedJob || "General Application"} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-white/40 text-xs font-bold uppercase tracking-widest ml-1">Full Name *</label>
                        <input 
                          type="text" 
                          name="Full_Name"
                          value={fullName}
                          onChange={(e) => { setFullName(e.target.value); setErrors(errors.filter(err => err !== 'fullName')); }}
                          className={`w-full bg-[#0A1929] border ${errors.includes('fullName') ? 'border-red-500' : 'border-white/10'} rounded-lg p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all`} 
                          placeholder="John Doe" 
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-white/40 text-xs font-bold uppercase tracking-widest ml-1">SIA License Number</label>
                        <input 
                          type="text" 
                          name="SIA_Number"
                          value={siaNumber}
                          onChange={(e) => setSiaNumber(e.target.value)}
                          className="w-full bg-[#0A1929] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all" 
                          placeholder="1234 5678 9012" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-white/40 text-xs font-bold uppercase tracking-widest ml-1">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setErrors(errors.filter(err => err !== 'email')); }}
                        className={`w-full bg-[#0A1929] border ${errors.includes('email') ? 'border-red-500' : 'border-white/10'} rounded-lg p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all`} 
                        placeholder="name@email.com" 
                        required
                      />
                    </div>

                    <label className={`block h-40 border-2 border-dashed ${errors.includes('cvFile') ? 'border-red-500 bg-red-500/5' : 'border-white/10 hover:border-[#5DADE2]'} rounded-xl flex flex-col items-center justify-center transition-colors group cursor-pointer relative overflow-hidden`}>
                      <input 
                        type="file" 
                        name="CV_Attachment"
                        accept=".pdf,.doc,.docx" 
                        onChange={handleFileChange} 
                        className="hidden" 
                        required
                      />
                      {cvFile ? (
                        <>
                          <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                          <span className="text-white font-medium text-center px-4 overflow-hidden text-ellipsis w-[90%] whitespace-nowrap">{cvFile.name}</span>
                          <span className="text-white/40 text-xs mt-1">{(cvFile.size / 1024 / 1024).toFixed(2)} MB</span>
                        </>
                      ) : (
                        <>
                          <Upload className={`w-8 h-8 ${errors.includes('cvFile') ? 'text-red-400' : 'text-white/20 group-hover:text-[#5DADE2]'} mb-3 transition-colors`} />
                          <span className={`${errors.includes('cvFile') ? 'text-red-400' : 'text-white/40 group-hover:text-white'} transition-colors font-medium`}>
                            {errors.includes('cvFile') ? 'CV Document Required *' : 'Click to upload CV (PDF/DOC)'}
                          </span>
                        </>
                      )}
                    </label>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#D4AF37] hover:bg-white text-[#0A1929] font-black py-4 rounded-xl uppercase tracking-widest flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          Sending... <Loader2 className="w-5 h-5 animate-spin" />
                        </>
                      ) : (
                        <>
                          Submit Interest <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                  )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          APPLY MODAL — Interactive experience
      ════════════════════════════════════════════════════════════════════════ */}
      {showApplyModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm bg-black/60">
          <div className="bg-[#1C2B3A] w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className="text-[#5DADE2] font-bold text-xs uppercase tracking-widest mb-1 block">Zarkoon Recruitment Portal</span>
                  <h2 className="text-white text-3xl font-bold">Applying for: <br /><span className="text-[#D4AF37]">{jobsData.find(j => j.id === selectedJob)?.title}</span></h2>
                </div>
                <button
                  onClick={() => setShowApplyModal(false)}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all"
                >
                  ╳
                </button>
              </div>

              <p className="text-white/60 font-light mb-10 leading-relaxed text-lg">
                Excellent choice. At <span className="text-white font-bold">Zarkoon Security Limited</span>, we value your expertise.
                Please confirm your contact details below to proceed to the document upload stage.
              </p>

              <div className="space-y-4">
                <button
                  onClick={() => {
                    window.location.href = `mailto:info@zarkoonsecurity.co.uk?subject=Application for ${jobsData.find(j => j.id === selectedJob)?.title}`;
                    setShowApplyModal(false);
                  }}
                  className="w-full bg-[#1E5A8E] hover:bg-[#5DADE2] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-4 transition-all uppercase tracking-widest"
                >
                  <Mail className="w-5 h-5" /> Send CV via Email
                </button>
                <p className="text-center text-white/30 text-[11px] uppercase tracking-widest font-bold pt-4">
                  Our recruitment team typically responds within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

