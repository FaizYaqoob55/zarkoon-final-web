import logoImage from "figma:asset/c13cca16d7f41b2233e632ec5f799ebb98dc1e40.png";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/zarkoonsecurity" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/zarkoonsecurity" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/zarkoonsecurity" },
    { name: "Youtube", icon: Youtube, url: "https://youtube.com/@zarkoonsecurity" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0A1929] to-[#050F1A] text-white py-20 font-['Outfit']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link to="/" className="inline-block transition-transform hover:scale-105 duration-300">
                <img
                  src={logoImage}
                  alt="Zarkoon Security Limited"
                  className="h-16 w-auto brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
              When it comes to protecting your business and ensuring peace of mind, look no further than Zarkoon Security Limited.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide border-b border-[#1E5A8E] pb-3 uppercase">Our Services</h3>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li><Link to="/manned-guarding" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Manned Guarding</Link></li>
              <li><Link to="/event-security" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Event Security</Link></li>
              <li><Link to="/key-holding" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Key Holding &amp; Alarm Response</Link></li>
              <li><Link to="/security-reception" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Security Reception</Link></li>
              <li><Link to="/mobile-patrols" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Mobile Patrols</Link></li>
            </ul>
          </div>

          {/* Our Sectors */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide border-b border-[#1E5A8E] pb-3 uppercase">Our Sectors</h3>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li><Link to="/construction-guarding" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Construction &amp; Estate Guarding</Link></li>
              <li><Link to="/events-festivals" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Events &amp; Festivals</Link></li>
              <li><Link to="/retail-security" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Retail Security</Link></li>
              <li><Link to="/accreditations" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Accreditations</Link></li>
              <li><Link to="/policies" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Policies</Link></li>
              <li><a href="/gender-pay-gap" target="_blank" rel="noopener noreferrer" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Gender Pay Gap Report</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide border-b border-[#1E5A8E] pb-3 uppercase">Contact</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 text-[#5DADE2] flex-shrink-0 mt-1 transition-transform group-hover:scale-110" />
                <div className="text-sm font-light">
                  <p className="text-gray-400">Phone: <a href="tel:+447466493229" className="hover:text-[#5DADE2] transition-colors font-medium">07466493229</a></p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <Mail className="w-4 h-4 text-[#5DADE2] flex-shrink-0 mt-1 transition-transform group-hover:scale-110" />
                <div className="text-sm font-light">
                  <p className="text-gray-400">Email: <a href="mailto:info@zarkoonsecurity.co.uk" className="hover:text-[#5DADE2] transition-colors font-medium">info@zarkoonsecurity.co.uk</a></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#5DADE2] flex-shrink-0 mt-1" />
                <p className="text-sm font-light text-gray-400">Address: Halsway Road, Hayes, UB3 3JT</p>
              </div>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1E5A8E] rounded-lg flex items-center justify-center hover:bg-[#5DADE2] transition-all duration-300 hover:-translate-y-1 shadow-lg"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-sm font-light text-gray-500">
              Copyrights @ 2025. ZARKOON SECURITY LIMITED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
