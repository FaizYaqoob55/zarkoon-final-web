import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Shield, CheckCircle, ShieldCheck } from "lucide-react";
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
import heroImage from "../../assets/manned-guarding-services.jpeg";

export function MannedGuarding() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(e.currentTarget);
        const name = formData.get("Name") || "Customer";
        
        // Unique Subject
        formData.append("_subject", `Service Quote: Manned Guarding - ${name} [${new Date().toLocaleTimeString()}]`);
        
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
        { name: "Instagram", icon: Instagram, url: "https://instagram.com/zarkoonsecurity" },
        { name: "Facebook", icon: Facebook, url: "https://facebook.com/zarkoonsecurity" },
    ];

    return (
        <div className="min-h-screen font-['Outfit'] bg-gray-50">
            <Helmet>
                <title>Professional Manned Guarding Services | Zarkoon Security Limited</title>
                <meta name="description" content="Elite SIA-licensed manned guarding security solutions for businesses, retail, and construction sites across the UK. Professional protection you can trust." />
            </Helmet>
            {/* Unique Hero Banner */}
            <section
                className="relative h-[600px] flex items-center justify-start bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1929]/80 via-[#0A1929]/40 to-transparent"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="max-w-2xl">
                        <p className="text-[#5DADE2] text-sm font-bold uppercase tracking-[0.3em] mb-4">Professional Protection</p>
                        <h1 className="text-white text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
                            Manned Guarding <br />
                            <span className="text-[#5DADE2]">Solutions</span>
                        </h1>
                        <div className="w-20 h-1.5 bg-[#5DADE2] rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Main Content & Quote Form Split */}
            <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Left Side - Service Description (Charcoal Grey) */}
                <div className="lg:col-span-7 space-y-12">
                    <div className="bg-[#A0CFFF]/10 p-10 rounded-3xl border border-[#A0CFFF]/20">
                        <h2 className="text-[#0A1929] text-3xl font-bold mb-6 flex items-center gap-4">
                            <Shield className="w-8 h-8 text-[#1E5A8E]" />
                            Elite Security Personnel
                        </h2>
                        <p className="text-[#2C3E50] text-lg font-light leading-relaxed mb-8">
                            Zarkoon Security Limited provides premier manned guarding services tailored for high-stakes environments. Our officers are SIA-licensed professionals trained to handle complex security challenges with precision and absolute discretion.
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Static Site Guarding",
                                "Concierge & Reception Security",
                                "Retail Loss Prevention",
                                "High-Value Asset Protection",
                                "Conflict Management Experts",
                                "24/7 Rapid Deployment"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-[#2C3E50]">
                                    <CheckCircle className="w-5 h-5 text-[#5DADE2]" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-[#0A1929] text-2xl font-bold">Why Choose Zarkoon Security Limited?</h3>
                        <p className="text-[#2C3E50] font-light leading-relaxed">
                            Our approach goes beyond simple observation. We integrate human intelligence with modern security technology to provide an impenetrable shield for your business. Whether it's construction sites in Hayes or corporate offices in London, our presence is a deterrent to crime and a guarantee of safety.
                        </p>
                        <div className="grid grid-cols-3 gap-6 pt-6 text-center">
                            <div className="p-4 bg-white rounded-xl shadow-md">
                                <p className="text-3xl font-bold text-[#1E5A8E]">100%</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">SIA Licensed</p>
                            </div>
                            <div className="p-4 bg-white rounded-xl shadow-md">
                                <p className="text-3xl font-bold text-[#1E5A8E]">24/7</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">Monitoring</p>
                            </div>
                            <div className="p-4 bg-white rounded-xl shadow-md">
                                <p className="text-3xl font-bold text-[#1E5A8E]">UK</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">Wide Coverage</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Unique Quote Form */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-24 bg-[#0A1929] rounded-[40px] shadow-2xl overflow-hidden border border-[#1E88E5]/30">
                        <div className="bg-gradient-to-br from-[#1E5A8E] to-[#0A1929] p-10 text-white border-b border-[#1E88E5]/20">
                            <h3 className="text-3xl font-bold mb-2">Get A Free Quote</h3>
                            <p className="text-[#5DADE2] font-light text-sm uppercase tracking-widest">Response within 60 minutes</p>
                        </div>
                        {isSubmitted ? (
                            <div className="p-16 text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/50">
                                    <ShieldCheck className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-white text-3xl font-bold mb-4 tracking-tight">Thank You!</h3>
                                <p className="text-[#5DADE2] text-lg mb-10 font-light leading-relaxed">
                                    Your request for a Manned Guarding quote has been received. Our team will review your requirements and contact you shortly.
                                </p>
                                <button 
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-white font-black uppercase tracking-widest text-sm hover:text-[#5DADE2] transition-colors"
                                >
                                    request another quote
                                </button>
                            </div>
                        ) : (
                            <form 
                                onSubmit={handleFormSubmit}
                                className="p-10 space-y-6"
                            >
                                {/* FormSubmit Configuration */}
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="Source" value="Manned Guarding Quote Form" />

                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-[#5DADE2] uppercase tracking-wider">Full Name</label>
                                <Input
                                    name="Name"
                                    required
                                    placeholder="E.g. John Doe"
                                    className="bg-white border-2 border-gray-400 focus:border-[#5DADE2] text-[#0A1929]"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-[#5DADE2] uppercase tracking-wider">Email</label>
                                    <Input
                                        type="email"
                                        name="Email"
                                        required
                                        placeholder="john@example.com"
                                        className="bg-white border-2 border-gray-400 focus:border-[#5DADE2] text-[#0A1929]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-[#5DADE2] uppercase tracking-wider">Phone Number</label>
                                    <Input
                                        type="tel"
                                        name="Phone"
                                        required
                                        placeholder="07488 372418"
                                        className="bg-white border-2 border-gray-400 focus:border-[#5DADE2] text-[#0A1929]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-[#5DADE2] uppercase tracking-wider">Post Code</label>
                                    <Input
                                        type="text"
                                        name="PostCode"
                                        required
                                        placeholder="12345"
                                        className="bg-white border-2 border-gray-400 focus:border-[#5DADE2] text-[#0A1929]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-[#5DADE2] uppercase tracking-wider">Select Service</label>
                                    <Select name="Service">
                                        <SelectTrigger className="bg-white border-2 border-gray-400 focus:border-[#5DADE2] text-[#0A1929] h-11">
                                            <SelectValue placeholder="Selection Service" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white border-gray-200 shadow-xl">
                                            <SelectItem value="manned-guarding">Manned Guarding</SelectItem>
                                            <SelectItem value="cctv-monitoring">CCTV Monitoring</SelectItem>
                                            <SelectItem value="door-supervision">Door Supervision</SelectItem>
                                            <SelectItem value="mobile-patrols">Mobile Patrols</SelectItem>
                                            <SelectItem value="dog-handlers">Dog Handlers</SelectItem>
                                            <SelectItem value="concierge-security">Concierge Security</SelectItem>
                                            <SelectItem value="key-holding">Key Holding & Alarm Response Count</SelectItem>
                                            <SelectItem value="fire-marshal">Fire Marshal</SelectItem>
                                            <SelectItem value="event-security">event security</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-[#5DADE2] uppercase tracking-wider">Site Address</label>
                                <Input
                                    name="SiteAddress"
                                    required
                                    placeholder="Full site location"
                                    className="bg-white border-2 border-gray-400 focus:border-[#5DADE2] text-[#0A1929]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-[#5DADE2] uppercase tracking-wider">Message</label>
                                <Textarea
                                    name="Message"
                                    required
                                    placeholder="Tell us about your security requirements"
                                    className="bg-white border-2 border-gray-400 focus:border-[#5DADE2] text-[#0A1929] min-h-[100px]"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#1E5A8E] hover:bg-[#5DADE2] text-white h-14 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-widest border-2 border-[#5DADE2]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Request Quote"}
                            </Button>
                        </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Call to Action Footer Section */}
            <section className="bg-[#1E5A8E] py-24 pb-32">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-white text-4xl font-bold mb-8">Ready to secure your premises?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <a href="tel:07488372418" className="flex items-center justify-center gap-3 bg-white text-[#1E5A8E] px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-colors">
                            <Phone className="w-5 h-5" />
                            07488 372418
                        </a>
                        <a href="mailto:sales@zarkoonsecurity.co.uk" className="flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#1E5A8E] transition-all">
                            <Mail className="w-5 h-5" />
                            sales@zarkoonsecurity.co.uk
                        </a>
                    </div>
                </div>
            </section>
        </div >
    );
}
