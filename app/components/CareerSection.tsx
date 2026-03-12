import { Link } from "react-router-dom";

export function CareerSection() {
  return (
    <section id="career" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl text-[#0A1929] font-bold mb-5 tracking-tight uppercase">
          Zarkoon Security Limited <span className="text-[#D4AF37]">Careers</span>
        </h2>
        <p className="text-[#1E5A8E] text-xl font-semibold mb-4 tracking-wide">Current Vacancies</p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#5DADE2] to-transparent mx-auto mb-8"></div>
        <p className="text-gray-600 text-lg font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          Check out our current job openings and be part of our esteemed security force. Join a team committed to excellence and professional growth.
        </p>
        <Link to="/careers/vacancies">
          <button className="bg-gradient-to-r from-[#1E5A8E] to-[#163D5E] text-white px-12 py-4 text-base font-bold tracking-wide hover:from-[#5DADE2] hover:to-[#1E5A8E] transition-all duration-300 shadow-2xl hover:shadow-3xl">
            Check It Out
          </button>
        </Link>
      </div>
    </section>
  );
}
