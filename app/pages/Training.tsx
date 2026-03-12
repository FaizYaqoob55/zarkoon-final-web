import { useState } from "react";
import { Link } from "react-router-dom";
import {
   ChevronRight,
   ShieldCheck,
   HeartPulse,
   Flame,
   Clock,
   Award,
   UserCheck,
   BookOpen,
   ArrowRight,
   ExternalLink,
   Lock,
   MessageSquare
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────────
   Course Data
───────────────────────────────────────────────────────────────────────────── */
const courses = [
   {
      id: "sia-level-2",
      title: "Level 2 SIA Door Supervision",
      category: "Professional Security",
      duration: "6 Days",
      price: "From £249",
      icon: ShieldCheck,
      description: "The industry standard for entry into the security sector. Covers conflict management, physical intervention, and legal frameworks.",
      requirements: "Age 18+, Clean criminal record (subject to SIA check).",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&q=80"
   },
   {
      id: "first-aid",
      title: "Emergency First Aid at Work (EFAW)",
      category: "Safety & Compliance",
      duration: "1 Day",
      price: "From £95",
      icon: HeartPulse,
      description: "Essential life-saving skills for the workplace. Required for the new SIA license top-up requirements.",
      requirements: "None.",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=500&q=80"
   },
   {
      id: "fire-marshal",
      title: "Fire Marshall / Warden Training",
      category: "Safety & Compliance",
      duration: "0.5 Day",
      price: "From £75",
      icon: Flame,
      description: "Understand fire risks, evacuation procedures, and the correct use of fire extinguishers in commercial environments.",
      requirements: "None.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&q=80"
   },
   {
      id: "cctv-pss",
      title: "Level 2 SIA CCTV (PSS) Course",
      category: "Professional Security",
      duration: "3 Days",
      price: "From £199",
      icon: UserCheck,
      description: "Gain the skills to operate surveillance systems professionally. Includes control room protocols and data protection laws.",
      requirements: "SIA prerequisite.",
      image: "https://images.unsplash.com/photo-1557597774-9d2739f8fa00?w=500&q=80"
   },
   {
      id: "top-up",
      title: "SIA License Top-Up Training",
      category: "Professional Security",
      duration: "2 Days",
      price: "From £149",
      icon: Award,
      description: "Mandatory training for SIA license renewals. Includes updated physical intervention and terror threat awareness.",
      requirements: "Existing SIA License.",
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=500"
   }
];

export function Training() {
   const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

   return (
      <div className="min-h-screen font-['Outfit'] bg-[#F4F6F9] pb-20">

         {/* ══════════════════════════════════════════════════════════════════════
          TOP BANNER — Professional classroom / training vibe
      ════════════════════════════════════════════════════════════════════════ */}
         <section className="relative w-full overflow-hidden" style={{ minHeight: "450px" }}>
            <div
               className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
               style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=85')",
               }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1929]/90 via-[#0A1929]/70 to-transparent" />

            {/* Decorative Blue Swish */}
            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-[#1E5A8E]/10 -skew-x-12 translate-x-20" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center h-full pt-20" style={{ minHeight: "450px" }}>
               {/* Breadcrumb */}
               <div className="flex items-center space-x-2 text-sm text-[#5DADE2] uppercase tracking-[0.2em] font-bold mb-8">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight className="w-4 h-4 text-white/40" />
                  <span className="text-white">Training Portal</span>
               </div>

               <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6 uppercase">
                  Excellence Through<br />
                  <span className="text-[#D4AF37]">Expert Training</span>
               </h1>

               <div className="inline-block bg-[#1E5A8E] text-white text-sm font-bold uppercase tracking-[0.2em] px-6 py-2 mb-8 border-l-4 border-[#D4AF37]">
                  Professional Development Portal
               </div>

               <p className="text-white/80 text-lg max-w-2xl font-light leading-relaxed">
                  At Zarkoon Security Limited, we don't just provide security; we build professionals.
                  Our certified training courses ensure every individual meets the highest industry standards.
               </p>
            </div>
         </section>

         {/* ══════════════════════════════════════════════════════════════════════
          COURSE GRID — Structured categories & premium cards
      ════════════════════════════════════════════════════════════════════════ */}
         <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">

               <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div className="max-w-xl">
                     <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-3 block">Available Programs</span>
                     <h2 className="text-[#0A1929] text-3xl md:text-5xl font-bold tracking-tight uppercase">
                        Certified Training <span className="text-[#1E5A8E]">Courses</span>
                     </h2>
                     <div className="w-20 h-1.5 bg-[#1E5A8E] mt-6 rounded-full" />
                  </div>
                  <p className="text-gray-500 font-light max-w-md md:text-right">
                     Explore our range of SIA-compliant and safety-critical documentation. All courses are delivered by industry veterans at our approved training centres.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {courses.map((course) => (
                     <div
                        key={course.id}
                        className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col md:flex-row border border-gray-100 group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                     >
                        {/* Visual Side */}
                        <div className="md:w-1/3 relative overflow-hidden">
                           <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                           />
                           <div className="absolute inset-0 bg-[#0A1929]/20 group-hover:bg-transparent transition-colors" />
                           <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-2xl shadow-lg">
                              <course.icon className="w-6 h-6 text-[#1E5A8E]" />
                           </div>
                        </div>

                        {/* Content Side */}
                        <div className="md:w-2/3 p-8 flex flex-col">
                           <div className="flex justify-between items-start mb-4">
                              <div>
                                 <span className="text-[#1E5A8E] text-[10px] font-bold uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">
                                    {course.category}
                                 </span>
                                 <h3 className="text-[#0A1929] text-xl font-bold mt-2 group-hover:text-[#1E5A8E] transition-colors leading-tight">
                                    {course.title}
                                 </h3>
                              </div>
                              <div className="text-right">
                                 <span className="text-[#D4AF37] font-extrabold text-sm">{course.price}</span>
                              </div>
                           </div>

                           <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                              {course.description}
                           </p>

                           <div className="grid grid-cols-2 gap-4 mb-8">
                              <div className="flex items-center gap-3 bg-[#F8FAFC] p-3 rounded-xl">
                                 <Clock className="w-4 h-4 text-[#5DADE2]" />
                                 <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">{course.duration}</span>
                              </div>
                              <div className="flex items-center gap-3 bg-[#F8FAFC] p-3 rounded-xl">
                                 <Award className="w-4 h-4 text-[#5DADE2]" />
                                 <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Level 2</span>
                              </div>
                           </div>

                           <div className="flex items-center gap-4">
                              <button
                                 onClick={() => setSelectedCourse(course.title)}
                                 className="bg-[#0A1929] hover:bg-[#1E5A8E] text-white font-bold py-3 px-6 rounded-xl flex-grow flex items-center justify-center gap-2 transition-all uppercase tracking-widest text-xs"
                              >
                                 Register Interest <MessageSquare className="w-4 h-4" />
                              </button>
                              <button className="w-12 h-12 border border-gray-100 rounded-xl flex items-center justify-center text-gray-300 hover:text-[#1E5A8E] hover:border-[#1E5A8E] transition-all">
                                 <ArrowRight className="w-5 h-5" />
                              </button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* ══════════════════════════════════════════════════════════════════════
          MANDATORY REQUIREMENTS / PORTAL — Login-style aesthetic
      ════════════════════════════════════════════════════════════════════════ */}
         <section className="py-20 bg-[#0A1929] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
               <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#1E5A8E] rounded-full blur-[120px]" />
               <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#D4AF37] rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-white/10 flex flex-col lg:flex-row gap-12 items-center">

                  <div className="lg:w-2/3 text-center lg:text-left">
                     <div className="bg-[#D4AF37] h-1 w-20 mb-8 mx-auto lg:mx-0" />
                     <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Mandatory Professional <br />
                        <span className="text-[#5DADE2]">Standards Portal</span>
                     </h2>
                     <p className="text-white/60 text-lg mb-10 font-light max-w-2xl leading-relaxed">
                        Access Action Counters Terrorism (ACT), IOSH Safety modules, and internal Zarkoon compliance documentation. Existing personnel can log in to view their specific training roadmap.
                     </p>

                     <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center lg:justify-start">
                        <div className="flex flex-col items-center lg:items-start">
                           <span className="text-white text-4xl font-black italic">100%</span>
                           <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">SIA Compliance</span>
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                           <span className="text-white text-4xl font-black italic">24/7</span>
                           <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Portal Access</span>
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                           <span className="text-white text-4xl font-black italic">4.9/5</span>
                           <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Staff Feedback</span>
                        </div>
                     </div>
                  </div>

                  <div className="lg:w-1/3 w-full">
                     <div className="bg-[#1C2B3A] p-10 rounded-[2.5rem] shadow-2xl border border-white/5">
                        <div className="flex items-center gap-3 mb-8">
                           <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                              <Lock className="w-5 h-5 text-[#D4AF37]" />
                           </div>
                           <span className="text-white font-bold uppercase tracking-widest text-xs">Internal Access</span>
                        </div>

                        <button className="w-full bg-[#1E5A8E] hover:bg-white hover:text-[#0A1929] text-white font-black py-4 rounded-2xl uppercase tracking-[0.2em] text-xs transition-all shadow-xl flex items-center justify-center gap-3 mb-4">
                           Staff Portal Login <ArrowRight className="w-4 h-4" />
                        </button>
                        <p className="text-center text-white/30 text-[10px] font-bold uppercase tracking-widest leading-relaxed px-4">
                           Forgotten credentials? <br /> Contact IT Support.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* ── External Links ────────────────────────────────────────────────── */}
         <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex items-start gap-6 border-l-2 border-[#D4AF37] pl-8">
                     <div className="text-[#0A1929] bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
                        <BookOpen className="w-8 h-8" />
                     </div>
                     <div>
                        <h4 className="text-[#0A1929] font-bold text-xl mb-2">ProtectUK Catalogue</h4>
                        <p className="text-gray-500 text-sm mb-4 leading-relaxed italic">
                           "Access mandatory ACT Awareness and Security e-Learning modules."
                        </p>
                        <a href="https://www.protectuk.police.uk/catalogue" target="_blank" rel="noopener noreferrer" className="text-[#1E5A8E] font-bold text-sm flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                           Go to ProtectUK <ExternalLink className="w-4 h-4" />
                        </a>
                     </div>
                  </div>

                  <div className="flex items-start gap-6 border-l-2 border-[#D4AF37] pl-8">
                     <div className="text-[#0A1929] bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
                        <UserCheck className="w-8 h-8" />
                     </div>
                     <div>
                        <h4 className="text-[#0A1929] font-bold text-xl mb-2">SIA Licensing Standards</h4>
                        <p className="text-gray-500 text-sm mb-4 leading-relaxed italic">
                           "Check compliance standards and license renewal documentation."
                        </p>
                        <a href="#" className="text-[#1E5A8E] font-bold text-sm flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                           View SIA Standards <ExternalLink className="w-4 h-4" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* ══════════════════════════════════════════════════════════════════════
          REGISTER INTEREST MODAL
      ════════════════════════════════════════════════════════════════════════ */}
         {selectedCourse && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm bg-black/60">
               <div className="bg-[#1C2B3A] w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 border border-white/10">
                  <div className="p-10">
                     <div className="flex justify-between items-start mb-8">
                        <div>
                           <span className="text-[#5DADE2] font-bold text-xs uppercase tracking-widest mb-1 block">Zarkoon Education Portal</span>
                           <h2 className="text-white text-3xl font-bold">Registering For: <br /><span className="text-[#D4AF37]">{selectedCourse}</span></h2>
                        </div>
                        <button
                           onClick={() => setSelectedCourse(null)}
                           className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all"
                        >
                           ╳
                        </button>
                     </div>

                     <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:training@zarkoonsecurity.co.uk?subject=Registration Interest: ${selectedCourse}`; setSelectedCourse(null); }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <input type="text" placeholder="Your Full Name" className="w-full bg-[#0A1929] border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-[#D4AF37]" required />
                           <input type="tel" placeholder="Contact Number" className="w-full bg-[#0A1929] border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-[#D4AF37]" required />
                        </div>
                        <input type="email" placeholder="Email Address" className="w-full bg-[#0A1929] border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-[#D4AF37]" required />

                        <button
                           type="submit"
                           className="w-full bg-[#D4AF37] hover:bg-white text-[#0A1929] font-black py-5 rounded-2xl flex items-center justify-center gap-4 transition-all uppercase tracking-widest shadow-xl"
                        >
                           <SendIcon className="w-5 h-5" /> Submit Registration
                        </button>
                     </form>

                     <p className="text-center text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold pt-8">
                        Zarkoon Security Limited Training Excellence
                     </p>
                  </div>
               </div>
            </div>
         )}

      </div>
   );
}

function SendIcon({ className }: { className?: string }) {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
   );
}

