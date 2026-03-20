import { useState, useRef, useEffect } from "react";
import logoImage from "figma:asset/c13cca16d7f41b2233e632ec5f799ebb98dc1e40.png";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

import { Phone, Mail, BadgeInfo } from "lucide-react";

interface NavItem {
  name: string;
  path?: string;
  target?: string;
  dropdown?: { name: string; path: string; target?: string }[];
}

const navLinks: NavItem[] = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    dropdown: [
      { name: "Manned Guarding", path: "/manned-guarding" },
      { name: "Mobile Patrols", path: "/mobile-patrols" },
      { name: "Security Reception", path: "/security-reception" },
      { name: "Key Holding & Alarm Response", path: "/key-holding" },
      { name: "Event Security", path: "/event-security" },
    ]
  },
  {
    name: "Sectors",
    dropdown: [
      { name: "Construction & Estate Guarding", path: "/construction-guarding" },
      { name: "Events & Festivals", path: "/events-festivals" },
      { name: "Policies", path: "/policies" }
    ]
  },
  { name: "Accreditations", path: "/accreditations" },
  { name: "About Us", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Training Portal", path: "/training-portal" },
  { name: "Contact us", path: "/contact-us" },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm font-['Outfit'] relative z-50">
      {/* Major Overhaul: Magnified White Header - Logo & Contacts Only */}
      <div className="bg-white text-[#0A1929] py-6 md:py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 relative">
          {/* Left Side: Magnified Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 transition-transform hover:scale-105 duration-300">
              <img
                src={logoImage}
                alt="Zarkoon Security Limited"
                className="h-16 md:h-20 lg:h-24 w-auto drop-shadow-sm"
              />
            </Link>
          </div>

          {/* Right Side: Magnified Contact Info Columns */}
          <div className="flex flex-col sm:flex-row items-center gap-10 md:gap-16 lg:gap-24">
            {/* Phone Column - Magnified */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center transition-all duration-300 group-hover:border-[#1E5A8E] group-hover:bg-gray-50 shadow-sm">
                <Phone className="w-5 h-5 text-[#1E5A8E]" />
              </div>
              <div>
                <p className="text-[11px] md:text-xs font-black text-[#1E5A8E] uppercase tracking-[0.15em] leading-none mb-2">
                  Open 24 Hours
                </p>
                <a href="tel:+447488372418" className="text-xl md:text-2xl font-black text-[#0A1929] hover:text-[#1E5A8E] transition-all duration-300 leading-none tracking-tight">
                  07488 372418
                </a>
              </div>
            </div>

            {/* Email Column - Magnified */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center transition-all duration-300 group-hover:border-[#1E5A8E] group-hover:bg-gray-50 shadow-sm">
                <Mail className="w-5 h-5 text-[#1E5A8E]" />
              </div>
              <div>
                <p className="text-[11px] md:text-xs font-black text-[#1E5A8E] uppercase tracking-[0.15em] leading-none mb-2">
                  7 Days a Week
                </p>
                <a href="mailto:info@zarkoonsecurity.co.uk" className="text-lg md:text-xl font-bold text-[#0A1929] hover:text-[#1E5A8E] transition-all duration-300 leading-none lowercase tracking-tight">
                  info@zarkoonsecurity.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle - Centered vertically on the larger bar */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 text-[#0A1929] p-2.5 hover:bg-gray-100 rounded-full transition-colors border border-gray-100 shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>





      {/* Second Row - Navigation Menu */}
      <nav className="bg-gradient-to-r from-gray-100 to-gray-50 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative h-full"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                onMouseLeave={() => link.dropdown && handleMouseLeave()}
              >
                {link.dropdown ? (
                  <button
                    className={`text-[#2C3E50] px-8 py-4 text-sm font-medium tracking-wide hover:bg-white transition-all duration-300 flex items-center gap-1.5 h-full ${activeDropdown === link.name ? 'bg-white' : ''}`}
                  >
                    {link.name} <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={link.path!}
                    className={`${isActive(link.path!)
                      ? 'bg-[#1E5A8E] text-white'
                      : 'text-[#2C3E50] hover:bg-white'
                      } px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 block`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full w-64 bg-white shadow-xl border-t-2 border-[#1E5A8E] py-2 overflow-hidden rounded-b-lg"
                    >
                      {link.dropdown.map((item) =>
                        item.target ? (
                          <a
                            key={item.name}
                            href={item.path}
                            target={item.target}
                            rel="noopener noreferrer"
                            className="block px-6 py-3 text-sm text-[#2C3E50] hover:bg-[#F8FAFC] hover:text-[#1E5A8E] transition-all duration-200 border-b border-gray-50 last:border-0"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-6 py-3 text-sm text-[#2C3E50] hover:bg-[#F8FAFC] hover:text-[#1E5A8E] transition-all duration-200 border-b border-gray-50 last:border-0"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="flex flex-col py-4 space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.name} className="flex flex-col">
                      {link.dropdown ? (
                        <div className="flex flex-col">
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                            className="text-[#2C3E50] px-6 py-3 text-sm font-medium tracking-wide hover:bg-white transition-all duration-300 rounded-lg flex items-center justify-between"
                          >
                            {link.name} <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="bg-gray-50 rounded-lg mx-6 mb-2 overflow-hidden"
                              >
                                {link.dropdown.map((item) =>
                                  item.target ? (
                                    <a
                                      key={item.name}
                                      href={item.path}
                                      target={item.target}
                                      rel="noopener noreferrer"
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block px-6 py-3 text-sm text-[#2C3E50] hover:text-[#1E5A8E] transition-colors"
                                    >
                                      {item.name}
                                    </a>
                                  ) : (
                                    <Link
                                      key={item.name}
                                      to={item.path}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block px-6 py-3 text-sm text-[#2C3E50] hover:text-[#1E5A8E] transition-colors"
                                    >
                                      {item.name}
                                    </Link>
                                  )
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.path!}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`${isActive(link.path!)
                            ? 'bg-[#1E5A8E] text-white'
                            : 'text-[#2C3E50] hover:bg-white'
                            } px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
