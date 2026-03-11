import { Link } from "react-router-dom";

export function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1A2332] via-[#0A1929] to-[#1A2332]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Premium Section Label */}
        <div className="mb-10">
          <p className="text-[#5DADE2] text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
            <span className="w-12 h-[2px] bg-[#5DADE2]"></span>
            ABOUT US
          </p>
          <div className="flex items-start gap-4 mb-8">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-[#5DADE2] rounded-full shadow-lg shadow-[#5DADE2]/50"></div>
              <div className="w-3 h-3 bg-[#5DADE2] rounded-full shadow-lg shadow-[#5DADE2]/50"></div>
            </div>
            <div className="space-y-1">
              <p className="text-white text-sm font-medium tracking-wide">24/7 Protection</p>
              <p className="text-gray-300 text-sm font-light">Modern Monitoring System</p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Premium Text */}
          <div>
            <h2 className="text-white text-5xl font-bold mb-8 leading-tight tracking-tight">
              Commitment to Excellence: <span className="text-[#5DADE2]">Providing Tailored High-Quality</span> Security Services
            </h2>
            <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
              At Zarkoon Security Limited, we understand that every client has unique security needs. That's why we offer tailored, high-quality security services specifically designed to meet your requirements. As a professional security company, we take pride in our comprehensive approach that provides security and professionalism to safeguard what matters most to you.
            </p>
            <p className="text-gray-400 text-base font-light leading-relaxed mb-10">
              Zarkoon Security Limited has earned a reputation for delivering reliable and effective security solutions, ensuring the security of individuals, and businesses.
            </p>
            <Link to="/about" className="inline-block bg-[#1E5A8E] text-white px-10 py-4 text-base font-bold tracking-wide hover:bg-[#5DADE2] transition-all duration-300 shadow-2xl hover:shadow-3xl">
              Read More
            </Link>
          </div>

          {/* Right Column - Premium Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-700 to-gray-900 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1E5A8E]/30">
              <img
                src="https://images.unsplash.com/photo-1767637421198-82c5612ec5af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHZlc3QlMjBvZmZpY2VyJTIwYmFja3xlbnwxfHx8fDE3NzE5MTU5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Security Officer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929]/50 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#5DADE2] to-[#1E5A8E] rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
