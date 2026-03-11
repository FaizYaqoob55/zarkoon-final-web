import { useState, useRef, useEffect } from "react";
import logoImage from "figma:asset/c13cca16d7f41b2233e632ec5f799ebb98dc1e40.png";
import { ChevronDown, Menu, X } from "lucide-react";
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
      { name: "Retail Security", path: "/retail-security" },
      { name: "Gender Pay Gap Report", path: "/report/gender-pay-gap-2024", target: "_blank" },
    ]
  },
  { name: "Accreditations", path: "/accreditations" },
  { name: "About Us", path: "/about" },
  {
    name: "Career",
    dropdown: [
      { name: "Current Vacancies", path: "/careers/vacancies" },
      { name: "Training Portal", path: "/careers/training" },
    ]
  },
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
      {/* Top Row - Official Zarkoon Logo Centered */}
      <div className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center relative">
          <Link to="/">
            <img
              src={logoImage}
              alt="Zarkoon Security Limited"
              className="h-20 md:h-24 w-auto"
            />
          </Link>
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="absolute right-6 lg:hidden text-[#0A1929] p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
