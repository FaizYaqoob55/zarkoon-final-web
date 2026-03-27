import { useState, useRef, useEffect } from "react";
import logoImage from "figma:asset/c13cca16d7f41b2233e632ec5f799ebb98dc1e40.png";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

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

  const isActive = (path: string) => location.pathname === path;

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
    <header className="relative z-[100] w-full font-['Outfit'] shadow-sm bg-white">
      {/* --- MOBILE VIEW (< md) --- */}
      <div className="md:hidden flex flex-col">
        {/* Row 1: White Logo Section - Centered (Increased padding for top-of-page alignment) */}
        <div className="bg-white pt-8 pb-4 h-auto flex items-center justify-center border-b border-gray-100">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <img
              src={logoImage}
              alt="Zarkoon Security"
              className="max-h-[50px] w-auto drop-shadow-sm"
            />
          </Link>
        </div>

        {/* Row 2: Charcoal Action Bar - [Menu] (Left) and [Phone] [Email] (Right) */}
        <div className="bg-[#101926] h-16 flex items-center justify-between px-6 sm:px-10">
          {/* 1. Hamburger Menu Toggle (Far Left) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center transition-all active:scale-90 bg-white/5 text-[#1E5A8E] flex-shrink-0"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* 2. Contact Group (Right) */}
          <div className="flex items-center gap-6 sm:gap-10">
            <a
              href="tel:07488372418"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center transition-all active:scale-95 bg-white/5 flex-shrink-0"
              aria-label="Call Us"
            >
              <Phone className="w-4 h-4 text-[#1E5A8E]" />
            </a>

            <a
              href="mailto:sales@zarkoonsecurity.co.uk"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center transition-all active:scale-95 bg-white/5 flex-shrink-0"
              aria-label="Email Us"
            >
              <Mail className="w-4 h-4 text-[#1E5A8E]" />
            </a>
          </div>
        </div>
      </div>

      {/* --- DESKTOP VIEW (>= md) --- */}
      <div className="hidden md:flex flex-col">
        {/* Row 1: Original White Top Bar (Exact 113px Height as per Image 1) */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-row justify-between items-center h-[113px] w-full">
            {/* Logo Section - Shifted Right to avoid far-left edge */}
            <Link to="/" className="flex-shrink-0 transition-all duration-300 hover:scale-[1.05] hover:opacity-95 cursor-pointer lg:pl-16 xl:pl-24">
              <img
                src={logoImage}
                alt="Zarkoon"
                className="h-14 lg:h-20 w-auto drop-shadow-sm"
              />
            </Link>

            {/* Contact Units Right - Original Spacing & Gap */}
            <div className="flex flex-row items-center gap-12 lg:gap-20">
              {/* Phone Column */}
              <div className="hidden sm:flex items-center gap-4 group cursor-pointer transition-all duration-300">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-100 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#5DADE2] group-hover:shadow-md">
                  <Phone className="w-4 h-4 text-[#1E5A8E] group-hover:text-[#5DADE2] transition-colors" />
                </div>
                <div className="whitespace-nowrap transition-transform duration-300 group-hover:translate-x-1">
                  <p className="text-[10px] font-black text-[#5DADE2] uppercase tracking-widest mb-1 group-hover:opacity-80">Open 24 Hours</p>
                  <a href="tel:07488372418" className="text-2xl font-bold text-[#0A1929] group-hover:text-[#1E5A8E] transition-colors">07488 372418</a>
                </div>
              </div>

              {/* Email Column */}
              <div className="hidden lg:flex items-center gap-4 group cursor-pointer transition-all duration-300">
                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#5DADE2] group-hover:shadow-md">
                  <Mail className="w-4 h-4 text-[#1E5A8E] group-hover:text-[#5DADE2] transition-colors" />
                </div>
                <div className="whitespace-nowrap transition-transform duration-300 group-hover:translate-x-1">
                  <p className="text-[10px] font-black text-[#5DADE2] uppercase tracking-widest mb-1 group-hover:opacity-80">7 Days A Week</p>
                  <a href="mailto:sales@zarkoonsecurity.co.uk" className="text-xl font-bold text-[#0A1929] group-hover:text-[#1E5A8E] transition-colors lowercase">sales@zarkoonsecurity.co.uk</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Standard Navigation Menu - Clean Style as per Image 1 */}
        <nav className="bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <ul className="flex items-center justify-center">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="relative group h-full"
                  onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                  onMouseLeave={() => link.dropdown && handleMouseLeave()}
                >
                  <div className="h-full flex items-center">
                    {link.dropdown ? (
                      <button className={`flex items-center gap-2 px-8 py-4 text-[14px] font-black text-[#101926] hover:text-[#1E5A8E] transition-all duration-300 ${activeDropdown === link.name ? 'text-[#1E5A8E]' : ''}`}>
                        {link.name} <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                    ) : (
                      <Link
                        to={link.path!}
                        className={`px-8 py-4 text-[14px] font-black transition-all duration-300 ${isActive(link.path!) ? 'text-[#1E5A8E]' : 'text-[#101926] hover:text-[#1E5A8E]'}`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute left-0 top-full w-64 bg-white shadow-xl border-t-2 border-[#1E5A8E] py-2 overflow-hidden rounded-b-lg"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-6 py-3 text-sm text-[#2C3E50] hover:bg-[#F8FAFC] hover:text-[#1E5A8E] transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <ul className="flex flex-col py-6">
              {navLinks.map((link) => (
                <li key={link.name} className="px-6">
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="w-full flex items-center justify-between py-4 border-b border-gray-50 text-base font-bold text-[#0A1929]"
                      >
                        {link.name} <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden bg-gray-50 rounded-lg my-2"
                          >
                            {link.dropdown.map(sub => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-6 py-3 text-sm font-medium text-gray-600"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path!}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-4 border-b border-gray-50 text-base font-bold ${isActive(link.path!) ? 'text-[#1E5A8E]' : 'text-[#0A1929]'}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
