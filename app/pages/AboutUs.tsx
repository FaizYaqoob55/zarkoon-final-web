import { Shield, Award, Users, Clock } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1685300996383-343b7fe0b9fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGd1YXJkJTIwcHJvZmVzc2lvbmFsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcyNjM3MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080";
const securityOfficerImage = "https://images.unsplash.com/photo-1552622594-9a37efeec618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMG9mZmljZXIlMjB1bmlmb3JtJTIwY29ycG9yYXRlfGVufDF8fHx8MTc3MjcwMTUxMHww&ixlib=rb-4.1.0&q=80&w=1080";
const teamImage = "https://images.unsplash.com/photo-1652148555073-4b1d2ecd664c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHRlYW0lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNzAxNTExfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1929]/90 to-[#0A1929]/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white tracking-wide">About Us</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text Content */}
            <div>
              <div className="mb-8">
                <p className="text-[#5DADE2] font-semibold text-sm tracking-widest uppercase mb-3">ABOUT US</p>
                <h2 className="text-4xl font-bold text-[#0A1929] mb-6 leading-tight">
                  Your Safety, Our Priority: Zarkoon Security Limited
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Zarkoon Security Limited has a straightforward objective. We aspire to become the leading company within the security sector, embodying innovation and professionalism. Through our commitment to enhance this, we will provide our clients with top-rated, innovative standards of service in both their security-related necessities.
                </p>
                <p>
                  We have invested substantial energy and resources in recruiting industry leaders, decision-makers, and employees who have committed to supporting the prosperity of our respective clients. We are proud, and we will never settle. We will change in response to industry needs, and we will work tirelessly to retain and add value alongside our Clientele.
                </p>
                <p>
                  We observe and abide by all current legislative and regulatory standards, and it remains an active element in all of our corporate culture. We will create trust, and sustain partnerships with key clientele by providing a full spectrum of tailored security services from single-site security guards to more extensive and complex security solutions.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={securityOfficerImage}
                  alt="Security Officer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#5DADE2]/10 rounded-lg -z-10"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <Shield className="w-12 h-12 text-[#1E5A8E] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#0A1929] mb-2">500+</h3>
              <p className="text-gray-600">Security Personnel</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <Award className="w-12 h-12 text-[#1E5A8E] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#0A1929] mb-2">100%</h3>
              <p className="text-gray-600">SIA Licensed</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <Users className="w-12 h-12 text-[#1E5A8E] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#0A1929] mb-2">200+</h3>
              <p className="text-gray-600">Active Clients</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <Clock className="w-12 h-12 text-[#1E5A8E] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#0A1929] mb-2">24/7</h3>
              <p className="text-gray-600">Service Available</p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gradient-to-b from-gray-100 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={teamImage}
                  alt="Security Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#1E5A8E]/10 rounded-lg -z-10"></div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-[#0A1929] mb-6 leading-tight">
                Modern Slavery and Human Trafficking Statement
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                <p>
                  Zarkoon Security Limited is committed to preventing modern slavery and human trafficking in all areas of our business and taking immediate action when we are aware that something in our Business is not being done as we being, please read our full policy.
                </p>
                <p>
                  We are dedicated to ensuring that there is no modern slavery or human trafficking in our business or our supply chains. This statement reflects our commitment to acting ethically and with integrity in all our business relationships.
                </p>
              </div>
              <a
                href="#"
                className="inline-block bg-[#1E5A8E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#163D5E] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Read Full Statement
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
