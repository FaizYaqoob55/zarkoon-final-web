import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock, MessageCircle, CheckCircle, Loader2, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1768796365086-a030a51d10b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHBlcnNvbm5lbCUyMHByb2Zlc3Npb25hbCUyMG91dGRvb3J8ZW58MXx8fHwxNzcyNzAxNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function ContactUs() {



  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("Name") || "New Inquiry";
    
    // Ensure unique subject
    formData.append("_subject", `New Website Inquiry: ${name} [${new Date().toLocaleTimeString()}]`);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/faizyaqoob55@gmail.com", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/zarkoon-security-limited" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/zarkoonsecurity?igsh=bTV6d2U3NnlicXMw&utm_source=qr" },
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/profile.php?id=61588201962589" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/447488372418" },
  ];

  return (
    <div className="min-h-screen font-['Outfit']">
      <Helmet>
        <title>Contact Us | Zarkoon Security Limited</title>
        <meta name="description" content="Get in touch with our expert team for professional security consultations and service inquiries." />
      </Helmet>
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

      {/* NEW ELEGANT 4-COLUMN CONTACT CARDS SECTION */}
      <section className="py-20 bg-[#F8F9FA] relative">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-[#0A1929] text-[#D4AF37] px-6 py-2 text-sm font-bold tracking-widest uppercase mb-4 inline-block shadow-lg rounded-full border border-[#D4AF37]/30">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1929] mb-4">
              We're Here to Help
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Have questions or need assistance? Our team at Zarkoon Security Limited is ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Card 1: Phone */}
            <div className="bg-white p-10 text-center rounded-xl border border-gray-200 border-b-[4px] border-b-[#5DADE2] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[5px] flex flex-col items-center justify-start h-full">
              <a href="tel:07488372418" className="group inline-flex items-center justify-center w-16 h-16 bg-[#F8F9FA] rounded-full hover:bg-[#5DADE2]/10 transition-colors duration-300 mb-6 focus:outline-none focus:ring-2 focus:ring-[#5DADE2] focus:ring-offset-2">
                <Phone className="w-7 h-7 text-[#5DADE2] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </a>
              <h3 className="text-2xl font-bold text-[#0A1929] mb-4">Phone Number</h3>
              <a href="tel:07488372418" className="text-gray-600 font-semibold hover:text-[#5DADE2] hover:underline decoration-2 underline-offset-4 transition-all duration-300 text-lg focus:outline-none focus:text-[#5DADE2]">
                07488 372418
              </a>
            </div>

            {/* Card 2: Office Address */}
            <div className="bg-white p-10 text-center rounded-xl border border-gray-200 border-b-[4px] border-b-[#D4AF37] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[5px] flex flex-col items-center justify-start h-full">
              <a href="https://www.google.com/maps/search/?api=1&query=Halsway+Road,+Hayes,+UB3+3JT" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center w-16 h-16 bg-[#F8F9FA] rounded-full hover:bg-[#D4AF37]/10 transition-colors duration-300 mb-6 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2">
                <MapPin className="w-7 h-7 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </a>
              <h3 className="text-2xl font-bold text-[#0A1929] mb-4">Office Address</h3>
              <a href="https://www.google.com/maps/search/?api=1&query=Halsway+Road,+Hayes,+UB3+3JT" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold leading-relaxed hover:text-[#D4AF37] hover:underline decoration-2 underline-offset-4 transition-all duration-300 text-[15px] focus:outline-none focus:text-[#D4AF37]">
                Halsway Road,<br />
                Hayes, UB3 3JT,<br />
                United Kingdom
              </a>
            </div>

            {/* Card 3: Email Address */}
            <div className="bg-white p-10 text-center rounded-xl border border-gray-200 border-b-[4px] border-b-[#5DADE2] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[5px] flex flex-col items-center justify-start h-full">
              <a href="mailto:info@zarkoonsecurity.co.uk" className="group inline-flex items-center justify-center w-16 h-16 bg-[#F8F9FA] rounded-full hover:bg-[#5DADE2]/10 transition-colors duration-300 mb-6 focus:outline-none focus:ring-2 focus:ring-[#5DADE2] focus:ring-offset-2">
                <Mail className="w-7 h-7 text-[#5DADE2] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </a>
              <h3 className="text-2xl font-bold text-[#0A1929] mb-4">Email Address</h3>
              <a href="mailto:info@zarkoonsecurity.co.uk" className="text-gray-600 font-semibold hover:text-[#5DADE2] hover:underline decoration-2 underline-offset-4 transition-all duration-300 text-sm lg:text-[13px] xl:text-[15px] break-all focus:outline-none focus:text-[#5DADE2]">
                info@zarkoonsecurity.co.uk
              </a>
            </div>

            {/* Card 4: Office Hours */}
            <div className="bg-white p-10 text-center rounded-xl border border-gray-200 border-b-[4px] border-b-[#D4AF37] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[5px] flex flex-col items-center justify-start h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F8F9FA] rounded-full mb-6 cursor-default">
                <Clock className="w-7 h-7 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1929] mb-4">Office Hours</h3>
              <span className="text-gray-600 font-semibold text-lg cursor-default">
                24/7 Service
              </span>
            </div>
          </div>
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
                <a href="tel:07488372418" className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-white flex-shrink-0 mt-1 transition-transform group-hover:scale-110" />
                  <div className="text-white">
                    <p className="font-semibold mb-1">Telephone:</p>
                    <p className="text-white hover:text-[#0A1929] transition-colors">07488 372418</p>
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
                    className="w-12 h-12 bg-[#FDFDFF] text-[#0A1929] rounded-xl flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#FDFDFF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_15px_-3px_rgba(212,175,55,0.4)] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] group"
                    aria-label={`Follow us on ${social.name} | Zarkoon Security Limited`}
                  >
                    <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
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
            
            {isSubmitted ? (
              <div className="bg-white p-12 rounded-xl shadow-xl border-t-4 border-t-green-500 text-center animate-in fade-in zoom-in duration-500">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[#0A1929] mb-4">Thank You!</h3>
                <p className="text-gray-600 mb-8">Your message has been sent successfully. We will get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#5DADE2] font-bold uppercase tracking-widest hover:text-[#0A1929] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="Source" value="Contact Us Page" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-bold text-[#0A1929] uppercase tracking-wider">
                    Name*
                  </label>
                  <Input
                    name="Name"
                    placeholder="E.g. John Doe"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-[#0A1929] uppercase tracking-wider">
                    Email Address*
                  </label>
                  <Input
                    name="Email"
                    placeholder="E.g. john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Contact Number Field */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-bold text-[#0A1929] uppercase tracking-wider">
                  Contact Number*
                </label>
                <Input
                  name="Phone"
                  placeholder="E.g. 07488 372418"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-bold text-[#0A1929] uppercase tracking-wider">
                  Message*
                </label>
                <Textarea
                  name="Message"
                  placeholder="How can we help you today?"
                  required
                />
              </div>


              {/* Required Fields Notice */}
              <p className="text-xs text-gray-500 font-medium italic">
                * Please ensure all required fields are completed
              </p>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1E5A8E] hover:bg-[#154670] text-white font-bold py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Sending... <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

            </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
