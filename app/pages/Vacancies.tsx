import { useState } from "react";
import { Link } from "react-router-dom";
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
  ArrowRight
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

      {/* ══════════════════════════════════════════════════════════════════════
          TOP BANNER — Premium photo with recruitment focus
      ════════════════════════════════════════════════════════════════════════ */}
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
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-[#5DADE2] uppercase tracking-[0.2em] font-bold mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white">Careers</span>
          </div>

          <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6 uppercase">
            Start Your <span className="text-[#D4AF37]">Career</span>
            <br />
            With Zarkoon Security Limited
          </h1>

          <div className="inline-block bg-[#1E5A8E] text-white text-sm font-bold uppercase tracking-[0.2em] px-6 py-2 mb-8 border-l-4 border-[#D4AF37]">
            Professional Vacancies 2026
          </div>

          <p className="text-white/80 text-lg max-w-2xl font-light leading-relaxed">
            Join a company where reliability, excellence, and professional growth are non-negotiable standards.
            We provide the path; you bring the dedication.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SEARCH & FILTER BAR — Positioned clearly below banner
      ════════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 py-10 relative z-20">
        <div className="bg-white p-4 md:p-6 shadow-xl rounded-xl border border-gray-100 flex flex-col md:flex-row gap-4 items-center">

          {/* Search Input */}
          <div className="relative w-full flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by role or city..."
              className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5A8E] transition-all text-[#0A1929]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Role Filter */}
          <div className="relative w-full md:w-64">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#1E5A8E] text-[#0A1929] cursor-pointer"
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
            >
              <option value="All">All Roles</option>
              <option value="Operational">Operational</option>
              <option value="Technical">Technical</option>
              <option value="Event">Event Security</option>
            </select>
          </div>

          {/* Total Counter */}
          <div className="hidden lg:block px-6 py-3 border-l text-gray-400 font-medium">
            <span className="text-[#1E5A8E] font-bold">{filteredJobs.length}</span> Results
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          JOB GRID — Interactive cards
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-6">

          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white group rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100 flex flex-col border-t-4 border-t-[#1E5A8E]"
                >
                  {/* Photo Head */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={job.image}
                      alt={job.title}
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className="bg-[#D4AF37] text-white text-[10px] font-bold uppercase px-2 py-1 rounded tracking-widest">
                        {job.role}
                      </span>
                      <span className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold px-2 py-1 rounded tracking-tighter">
                        Full-Time
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-[#0A1929] text-xl font-bold leading-tight group-hover:text-[#1E5A8E] transition-colors">
                        {job.title}
                      </h3>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-500 text-sm">
                        <MapPin className="w-4 h-4 text-[#D4AF37]" />
                        <span>{job.location}, UK</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 text-sm">
                        <DollarSign className="w-4 h-4 text-[#D4AF37]" />
                        <span className="font-semibold text-[#1E5A8E]">{job.salary}</span>
                      </div>
                      <div className="flex items-start gap-3 text-gray-400 text-xs">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span>{job.shift}</span>
                      </div>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 italic">
                      &quot;{job.description}&quot;
                    </p>

                    {/* Meta info */}
                    <div className="bg-[#F8FAFC] p-4 rounded-xl mb-8 flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-[11px] font-bold text-[#1E5A8E] uppercase tracking-wider">
                        <Briefcase className="w-3 h-3" /> Requirements:
                      </div>
                      <div className="text-gray-600 text-[13px] leading-tight font-medium">
                        {job.requirements}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex items-center gap-3">
                      <button
                        onClick={() => handleApply(job.id)}
                        className="flex-grow bg-[#1E5A8E] hover:bg-[#0A1929] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-500/10"
                      >
                        Apply Now <Mail className="w-4 h-4" />
                      </button>
                      <button className="w-12 h-12 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#1E5A8E] hover:border-[#1E5A8E] transition-all">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-[#0A1929] text-2xl font-bold mb-2">No Vacancies Found</h3>
              <p className="text-gray-500">Try adjusting your search or filter settings.</p>
              <button
                onClick={() => { setSearchTerm(""); setFilterRole("All"); }}
                className="mt-6 text-[#1E5A8E] font-bold border-b-2 border-[#1E5A8E] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
              >
                Clear all filters
              </button>
            </div>
          )}

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

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/40 text-xs font-bold uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" className="w-full bg-[#0A1929] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/40 text-xs font-bold uppercase tracking-widest ml-1">SIA License Number</label>
                    <input type="text" className="w-full bg-[#0A1929] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="1234 5678 9012" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/40 text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" className="w-full bg-[#0A1929] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="name@email.com" />
                </div>

                <div className="h-40 border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center hover:border-[#5DADE2] transition-colors group cursor-pointer">
                  <Upload className="w-8 h-8 text-white/20 group-hover:text-[#5DADE2] mb-3 transition-colors" />
                  <span className="text-white/40 group-hover:text-white transition-colors font-medium">Click to upload CV (PDF/DOC)</span>
                </div>

                <button className="w-full bg-[#D4AF37] hover:bg-white text-[#0A1929] font-black py-4 rounded-xl uppercase tracking-widest flex items-center justify-center gap-3 transition-all">
                  Submit Interest <Send className="w-5 h-5" />
                </button>
              </form>
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

