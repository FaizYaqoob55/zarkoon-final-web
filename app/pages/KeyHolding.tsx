import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, Clock, MapPin, Phone, Mail, ChevronRight, Lock, Bell, ShieldAlert, ShieldCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import heroImage from "../../assets/image_key_holding_hero_long.jpg";
import imageUkCoverage from "../../assets/image_uk_coverage.jpg";
import imageCombinedServices from "../../assets/image_combined_services.jpg";

export function KeyHolding() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(e.currentTarget);
        const name = formData.get("Name") || "Customer";
        
        // Unique Subject
        formData.append("_subject", `Service Quote: Key Holding - ${name} [${new Date().toLocaleTimeString()}]`);
        
        try {
            const response = await fetch("https://formsubmit.co/ajax/comedyboy834@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                  'Accept': 'application/json'
                }
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

    return (
        <div className="min-h-screen font-['Outfit'] bg-white">
            <Helmet>
                <title>Key Holding & Alarm Response | Zarkoon Security Limited</title>
                <meta name="description" content="Fast, reliable key holding and rapid alarm response services to protect your UK commercial properties 24/7." />
            </Helmet>
            {/* Hero Section */}
            <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="Key Holding Hero"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-[#0A1929]/85 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <p className="text-[#5DADE2] text-sm font-black uppercase tracking-[0.4em] mb-6 animate-fade-in">Rapid Response Security</p>
                    <h1 className="text-white text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-tight">
                        Key Holding & <br />
                        <span className="text-[#5DADE2]">Alarm Response</span>
                    </h1>
                    <p className="text-gray-300 text-xl font-light mb-12 leading-relaxed">
                        Professional key holding and emergency alarm response services across the UK. Protecting your assets 24/7 with rapid deployment and absolute reliability.
                    </p>
                    <Link to="/contact-us">
                        <Button className="bg-[#1E5A8E] hover:bg-[#5DADE2] text-white px-12 py-7 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 uppercase tracking-widest border-2 border-white/10">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Nationwide Coverage Section */}
            <section className="py-32 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#1E5A8E]/10 rounded-full blur-3xl"></div>
                        <img
                            src={imageUkCoverage}
                            alt="Key Handover"
                            className="rounded-[60px] shadow-3xl relative z-10 border-4 border-white h-[600px] w-full object-cover"
                        />
                        <div className="absolute -bottom-8 -right-8 bg-[#1E5A8E] p-8 rounded-[40px] text-white shadow-2xl z-20 hidden md:block border-4 border-white">
                            <h4 className="text-3xl font-black mb-1">UK WIDE</h4>
                            <p className="text-xs uppercase tracking-widest text-[#5DADE2]">Full Coverage</p>
                        </div>
                    </div>
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-[#1E5A8E] font-black text-sm uppercase tracking-widest">Security Service</span>
                            <h2 className="text-[#0A1929] text-5xl font-bold leading-tight">Professional <br /><span className="text-[#1E5A8E]">Key Holding Service</span></h2>
                        </div>
                        <p className="text-gray-600 text-lg font-light leading-relaxed">
                            Our nationwide coverage ensures that no matter where your premises are located, Zarkoon Security Limited can provide a professional responder within minutes of an alarm trigger. We hold your keys in a secure, high-stakes environment according to BS7984 standards.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="flex gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <Lock className="w-8 h-8 text-[#1E5A8E] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#0A1929] mb-1">Secure Custody</h4>
                                    <p className="text-xs text-gray-500">Safely stored keys in high-security vaults.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <Clock className="w-8 h-8 text-[#1E5A8E] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#0A1929] mb-1">24/7 Response</h4>
                                    <p className="text-xs text-gray-500">Immediate deployment at any time of day.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Combined Service Section */}
            <section className="py-32 bg-[#0A1929] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1E5A8E]/5 -skew-x-12 transform translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                        <div className="lg:col-span-6 space-y-10">
                            <h2 className="text-white text-5xl font-bold leading-tight">
                                Alarm Response and <br />
                                <span className="text-[#5DADE2]">Key Holding Combined</span>
                            </h2>
                            <p className="text-gray-300 text-xl font-light leading-relaxed">
                                Integration is the key to true security. By combining key holding with alarm response, we eliminate the need for your staff to be on-call or visit premises at irregular hours, reducing risk and liability for your organization.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "Eliminates out-of-hours risk for employees",
                                    "Detailed incident reporting after every response",
                                    "Internal property inspections as standard",
                                    "Emergency boarding and locksmith coordination"
                                ].map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-4 group">
                                        <div className="w-2.5 h-2.5 bg-[#5DADE2] rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(93,173,226,0.6)]"></div>
                                        <span className="text-gray-200 font-medium tracking-wide text-lg">{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6">
                                <Link to="/contact-us">
                                    <Button className="bg-[#5DADE2] text-[#0A1929] hover:bg-white px-10 py-5 rounded-2xl font-black uppercase tracking-tighter transition-all shadow-2xl">
                                        Get A Precise Quote
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="relative">
                                <div className="absolute inset-0 border-2 border-[#5DADE2]/20 rounded-[60px] transform translate-x-6 translate-y-6"></div>
                                <img
                                    src={imageCombinedServices}
                                    alt="Alarm Response Vehicle"
                                    className="rounded-[60px] shadow-3xl relative z-10 border-4 border-[#0A1929] h-[550px] w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get A Quote Section */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                    {/* Left: Content */}
                    <div className="lg:col-span-6 space-y-12">
                        <div className="bg-[#F4F8FB] p-16 rounded-[60px] border border-gray-100 shadow-xl">
                            <ShieldAlert className="w-16 h-16 text-[#1E5A8E] mb-8" />
                            <h3 className="text-[#0A1929] text-4xl font-bold mb-6 tracking-tight">Protecting Your Vision</h3>
                            <p className="text-gray-600 text-xl font-light leading-relaxed mb-10">
                                Whether it's a false alarm or a true emergency, Zarkoon Security Limited provides peace of mind. We act as your first line of defense, ensuring your property is secure without risking your staff's safety.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="w-6 h-6 text-[#1E5A8E]" />
                                    <span className="text-[#0A1929] font-bold">Industry Leading Response Times</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="w-6 h-6 text-[#1E5A8E]" />
                                    <span className="text-[#0A1929] font-bold">BS7499 & BS7984 Compliant</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="w-6 h-6 text-[#1E5A8E]" />
                                    <span className="text-[#0A1929] font-bold">Fully Transparent Incident Logs</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Enhanced Quote Form */}
                    <div className="lg:col-span-6">
                        <div className="bg-[#0A1929] rounded-[60px] shadow-3xl overflow-hidden border-2 border-[#1E88E5]/40 transform lg:-translate-y-20 relative z-20">
                            <div className="p-12 border-b border-[#1E88E5]/20 bg-gradient-to-br from-[#1E5A8E]/10 to-transparent">
                                <h3 className="text-white text-4xl font-bold mb-3 tracking-tighter">Get A Quote</h3>
                                <div className="w-16 h-1.5 bg-[#5DADE2] rounded-full"></div>
                                <p className="text-gray-400 text-sm mt-4 font-light uppercase tracking-widest">Immediate 60-Minute Response Guarantee</p>
                            </div>
                            
                            {isSubmitted ? (
                                <div className="p-20 text-center animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/50">
                                        <ShieldCheck className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-white text-3xl font-bold mb-4 tracking-tight">Thank You!</h3>
                                    <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
                                        Your request for a Key Holding quote has been received. Our team will review your requirements and contact you shortly.
                                    </p>
                                    <button 
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-[#5DADE2] font-black uppercase tracking-widest text-sm hover:text-white transition-colors"
                                    >
                                        request another quote
                                    </button>
                                </div>
                            ) : (
                                <form 
                                    onSubmit={handleFormSubmit}
                                    className="p-12 space-y-8"
                                >
                                    {/* FormSubmit Configuration */}
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="text" name="_honey" style={{ display: 'none' }} />
                                    <input type="hidden" name="Source" value="Key Holding Quote Form" />

                                <div className="space-y-3">
                                    <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Full Name</label>
                                    <Input
                                        name="Name"
                                        required
                                        placeholder="E.g. John Doe"
                                        className="bg-white border-2 border-[#0A1929]/50 h-14 focus:border-[#5DADE2] text-[#0A1929] text-lg rounded-2xl"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Email Address</label>
                                        <Input
                                            type="email"
                                            name="Email"
                                            required
                                            placeholder="john@example.com"
                                            className="bg-white border-2 border-[#0A1929]/50 h-14 focus:border-[#5DADE2] text-[#0A1929] rounded-2xl"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Contact Number</label>
                                        <Input
                                            type="tel"
                                            name="Phone"
                                            required
                                            placeholder="07488 372418"
                                            className="bg-white border-2 border-[#0A1929]/50 h-14 focus:border-[#5DADE2] text-[#0A1929] rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Post Code</label>
                                        <Input
                                            type="text"
                                            name="PostCode"
                                            required
                                            placeholder="XXXXX"
                                            className="bg-white border-2 border-[#0A1929]/50 h-14 focus:border-[#5DADE2] text-[#0A1929] rounded-2xl"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Select Service</label>
                                        <Select name="Service">
                                            <SelectTrigger className="bg-white border-2 border-[#0A1929]/50 h-14 focus:border-[#5DADE2] text-[#0A1929] text-base rounded-2xl">
                                                <SelectValue placeholder="Security Selection" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white border-gray-200">
                                                <SelectItem value="manned-guarding">Manned Guarding</SelectItem>
                                                <SelectItem value="cctv-monitoring">CCTV Monitoring</SelectItem>
                                                <SelectItem value="door-supervision">Door Supervision</SelectItem>
                                                <SelectItem value="mobile-patrols">Mobile Patrols</SelectItem>
                                                <SelectItem value="dog-handlers">Dog Handlers</SelectItem>
                                                <SelectItem value="concierge-security">Concierge Security</SelectItem>
                                                <SelectItem value="key-holding">Key Holding & Alarm Response Count</SelectItem>
                                                <SelectItem value="fire-marshal">Fire Marshal</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Site Address</label>
                                    <Input
                                        name="SiteAddress"
                                        required
                                        placeholder="Full Property Location"
                                        className="bg-white border-2 border-[#0A1929]/50 h-14 focus:border-[#5DADE2] text-[#0A1929] rounded-2xl"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Message</label>
                                    <Textarea
                                        name="Message"
                                        required
                                        placeholder="Tell us about your security requirements..."
                                        className="bg-white border-2 border-[#0A1929]/50 focus:border-[#5DADE2] text-[#0A1929] min-h-[120px] rounded-2xl"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#1E5A8E] hover:bg-[#5DADE2] text-white h-16 rounded-2xl font-black text-xl shadow-2xl transition-all duration-300 transform hover:-translate-y-2 uppercase tracking-widest border-b-4 border-black/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Get A Quote"}
                                </Button>
                            </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final Transition */}
            <section className="bg-[#1E5A8E] py-32 mb-0">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-white text-5xl font-bold mb-10 tracking-tighter">Ready to secure your peace of mind?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-10">
                        <a href="tel:07488372418" className="flex items-center justify-center gap-4 bg-white text-[#1E5A8E] px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:bg-gray-100 transition-all transform hover:-translate-y-2">
                            <Phone className="w-8 h-8" />
                            07488 372418
                        </a>
                        <a href="mailto:sales@zarkoonsecurity.co.uk" className="flex items-center justify-center gap-4 bg-transparent border-4 border-white text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-white hover:text-[#1E5A8E] transition-all transform hover:-translate-y-2">
                            <Mail className="w-8 h-8" />
                            sales@zarkoonsecurity.co.uk
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
