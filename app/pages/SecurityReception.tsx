import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, ShieldCheck } from "lucide-react";
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

import heroImage from "../../assets/security-professional.jpg";
import receptionRoleImage from "../../assets/25e965_2f72110096454ad6ab8d1f9df53a99a2~mv2.avif";
import trustedCompanyImage from "../../assets/Hotel-Security-Guards.docx.jpg";

export function SecurityReception() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(e.currentTarget);
        const name = formData.get("Name") || "Customer";
        
        // Unique Subject
        formData.append("_subject", `Service Quote: Security Reception - ${name} [${new Date().toLocaleTimeString()}]`);
        
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


    return (
        <div className="min-h-screen font-['Outfit'] bg-white">
            <Helmet>
                <title>Professional Security Reception & Concierge Services | Zarkoon Security Limited</title>
                <meta name="description" content="Professional, welcoming, and secure reception security officers providing elite customer service and rigorous access control for your corporate premises." />
            </Helmet>
            {/* Hero Section */}
            <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="Security Reception Hero"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <p className="text-[#5DADE2] text-sm font-black uppercase tracking-[0.4em] mb-6 animate-fade-in">Front-line Security</p>
                    <h1 className="text-white text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-tight">
                        Security Reception <br />
                        <span className="text-[#5DADE2]">Services</span>
                    </h1>
                    <p className="text-gray-300 text-xl font-light mb-12 leading-relaxed">
                        Professional, welcoming, and secure. Our reception security officers provide the perfect balance of customer service and rigorous access control for your corporate premises.
                    </p>
                    <Link to="/contact-us">
                        <Button className="bg-[#1E5A8E] hover:bg-[#5DADE2] text-white px-12 py-7 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 uppercase tracking-widest border-2 border-white/10">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Security Reception Officer Key Role and Duties */}
            <section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Left: Text Block */}
                    <div className="bg-[#5DADE2] flex items-center justify-center p-16 lg:p-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <div className="relative z-10 max-w-lg text-left">
                            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-8 tracking-tight leading-tight">
                                Security Reception Officer Key Role and Duties
                            </h2>
                            <p className="text-white/90 text-xl font-light leading-relaxed">
                                A security reception officer plays a vital role across a range of commercial environments. Required to safely direct staff and visitors, maintain site security, and manage access control efficiently.
                            </p>
                        </div>
                    </div>
                    {/* Right: Image */}
                    <div className="h-[400px] md:h-[600px] relative">
                        <img
                            src={receptionRoleImage}
                            alt="Security Reception Officers at Desk"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#5DADE2]/20 to-transparent mix-blend-multiply"></div>
                    </div>
                </div>
            </section>

            {/* Get A Quote Section - Centered Layout as per reference */}
            <section className="py-24 bg-[#F4F8FB]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-[#0A1929] rounded-[40px] shadow-3xl overflow-hidden border-2 border-[#1E88E5]/40 relative z-20">
                        <div className="p-10 border-b border-[#1E88E5]/20 bg-gradient-to-br from-[#1E5A8E]/10 to-transparent text-center">
                            <h3 className="text-white text-4xl font-bold mb-3 tracking-tighter">Get A Quote</h3>
                            <div className="w-16 h-1.5 bg-[#5DADE2] rounded-full mx-auto"></div>
                        </div>
                        
                        {isSubmitted ? (
                            <div className="p-20 text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/50">
                                    <ShieldCheck className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-white text-3xl font-bold mb-4 tracking-tight">Thank You!</h3>
                                <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
                                    Your request for a Security Reception quote has been received. Our team will review your requirements and contact you shortly.
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
                                className="p-10 md:p-14 space-y-8"
                            >
                                {/* FormSubmit Configuration */}
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="Source" value="Security Reception Quote Form" />

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
                                            <SelectItem value="key-holding">Key Holding & Alarm Response</SelectItem>
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
                                className="w-full bg-[#1E5A8E] hover:bg-[#5DADE2] text-white h-16 rounded-2xl font-black text-xl shadow-2xl transition-all duration-300 transform hover:-translate-y-2 uppercase tracking-widest border-b-4 border-black/20"
                            >
                                {isSubmitting ? "Sending..." : "Get A Quote"}
                            </Button>
                        </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Zarkoon Security Services Your Trusted Security Company */}
            <section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Left: Image */}
                    <div className="h-[400px] md:h-[500px] relative order-2 md:order-1">
                        <img
                            src={trustedCompanyImage}
                            alt="Trusted Security Guard"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/15"></div>
                    </div>
                    {/* Right: Text Block */}
                    <div className="bg-[#0A1929] flex items-center justify-center p-16 lg:p-24 relative overflow-hidden order-1 md:order-2">
                        {/* Subtle hex/cubes background pattern simulation */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white transform rotate-45"></div>
                            <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white transform rotate-12"></div>
                        </div>
                        <div className="relative z-10 max-w-lg text-left">
                            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
                                Zarkoon Security Limited <br />
                                <span className="text-[#5DADE2]">Your Trusted Security Company</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
