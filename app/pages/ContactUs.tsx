import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1768796365086-a030a51d10b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHBlcnNvbm5lbCUyMHByb2Zlc3Npb25hbCUyMG91dGRvb3J8ZW58MXx8fHwxNzcyNzAxNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and the + symbol
    if (/^[0-9+]*$/.test(value)) {
      setFormData({ ...formData, phone: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "", consent: false });
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/zarkoonsecurity" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/zarkoonsecurity" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/zarkoonsecurity" },
    { name: "Youtube", icon: Youtube, url: "https://youtube.com/@zarkoonsecurity" },
  ];

  return (
    <div className="min-h-screen font-['Outfit']">
      {/* Hero Section */}
      <section
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1929]/90 to-[#0A1929]/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white tracking-wide">Contact Us</h1>
        </div>
      </section>

      {/* Split Layout Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Get in Touch */}
        <div className="bg-gradient-to-br from-[#5DADE2] to-[#1E5A8E] p-12 lg:p-16">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-white mb-8">Get in touch</h2>

            {/* Contact Information */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 group">
                <a href="tel:+447466493229" className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-white flex-shrink-0 mt-1 transition-transform group-hover:scale-110" />
                  <div className="text-white">
                    <p className="font-semibold mb-1">Telephone:</p>
                    <p className="text-white hover:text-[#0A1929] transition-colors">07466493229</p>
                  </div>
                </a>
              </div>

              <div className="flex items-start gap-4 group">
                <a href="mailto:info@zarkoonsecurity.co.uk" className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-white flex-shrink-0 mt-1 transition-transform group-hover:scale-110" />
                  <div className="text-white">
                    <p className="font-semibold mb-1">E-mail:</p>
                    <p className="text-white hover:text-[#0A1929] transition-colors">info@zarkoonsecurity.co.uk</p>
                  </div>
                </a>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <div className="text-white">
                  <p className="font-semibold mb-1">Address:</p>
                  <p className="text-white/90">Halsway Road, Hayes, UB3 3JT</p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div>
              <p className="text-white font-semibold mb-4">Follow us:</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white hover:text-[#1E5A8E] text-white transition-all duration-300 hover:-translate-y-1 shadow-lg"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-10 rounded-lg overflow-hidden shadow-2xl h-[300px] border-4 border-white/20">
              <iframe
                title="Zarkoon Security Limited Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.889366928!2d-0.42148!3d51.51385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766df98f86f851%3A0xc6669f9e160f64c6!2sHalsway%20Rd%2C%20Hayes%20UB3%203JT%2C%20UK!5e0!3m2!1sen!2suk!4v1714567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gradient-to-br from-[#E8F4F8] to-white p-12 lg:p-16 flex items-center">
          <div className="w-full max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-[#0A1929] mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-bold text-[#0A1929] uppercase tracking-wider">
                    Name*
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="E.g. John Doe"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-[#0A1929] uppercase tracking-wider">
                    Email Address*
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="E.g. john@example.com"
                  />
                </div>
              </div>

              {/* Contact Number Field */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-bold text-[#0A1929] uppercase tracking-wider">
                  Contact Number*
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required
                  placeholder="E.g. +44 7466 493229"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-bold text-[#0A1929] uppercase tracking-wider">
                  Message*
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="How can we help you today?"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 bg-gray-100 p-4 rounded-xl border border-gray-200">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consent: checked as boolean })
                  }
                  required
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm font-medium text-gray-700 leading-relaxed">
                  I hereby agree that this data will be stored and processed for the purpose of establishing contact. I am aware that I can revoke my consent at any time.*
                </label>
              </div>

              {/* Required Fields Notice */}
              <p className="text-xs text-gray-500 font-medium italic">
                * Please ensure all required fields are completed
              </p>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#1E5A8E] hover:bg-[#154670] text-white font-bold py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg uppercase tracking-widest"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
