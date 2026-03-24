import { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, CheckCircle, Clock, MapPin, Phone, Mail, ChevronRight, Eye, Shield, Bus, Target, ShieldCheck } from "lucide-react";
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
import heroImage from "../../assets/privacy-laws.jpg";

export function MobilePatrols() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(e.currentTarget);
        const name = formData.get("Name") || "Customer";
        
        // Unique Subject
        formData.append("_subject", `Service Quote: Mobile Patrols - ${name} [${new Date().toLocaleTimeString()}]`);
        
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
                <title>Mobile Security Patrols & Rapid Response | Zarkoon Security Limited</title>
                <meta name="description" content="Secure your premises with high-visibility mobile security patrols and rapid alarm response. Proactive deterrents tailored to your unique site requirements." />
            </Helmet>
            {/* Hero Section */}
            <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="Mobile Patrols Hero"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black/45"></div>
                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <p className="text-[#5DADE2] text-sm font-black uppercase tracking-[0.4em] mb-6 animate-fade-in">Proactive Security Solutions</p>
                    <h1 className="text-white text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-tight">
                        Mobile Patrol <br />
                        <span className="text-[#5DADE2]">Services</span>
                    </h1>
                    <p className="text-gray-300 text-xl font-light mb-12 leading-relaxed">
                        Randomized inspections and high-visibility deterrents to secure your premises, deter crime, and provide rapid response—tailored precisely to your timeline.
                    </p>
                    <Link to="/contact-us">
                        <Button className="bg-[#1E5A8E] hover:bg-[#5DADE2] text-white px-12 py-7 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 uppercase tracking-widest border-2 border-white/10">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Service Pillars Section */}
            <section className="py-32 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <span className="text-[#1E5A8E] font-black text-sm uppercase tracking-widest">Our Approach</span>
                        <h2 className="text-[#0A1929] text-5xl font-bold tracking-tight">Dynamic Protection for <br /><span className="text-[#1E5A8E]">High-Risk Estates</span></h2>
                        <p className="text-gray-600 text-xl font-light leading-relaxed">
                            Static guarding isn't always the solution. By employing unpredictable, high-frequency patrols, we create a formidable deterrent against intrusion and vandalism without the cost of a full-time guard presence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#1E5A8E]/30 transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="bg-[#F4F8FB] w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1E5A8E] transition-colors">
                                <Target className="w-10 h-10 text-[#1E5A8E] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-[#0A1929] text-2xl font-bold mb-4">Random Inspections</h3>
                            <p className="text-gray-600 font-light leading-relaxed">
                                Our highly trained officers conduct unpredictable site visits to prevent criminals from identifying patterns and planning targeted breaches.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#1E5A8E]/30 transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="bg-[#F4F8FB] w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1E5A8E] transition-colors">
                                <Eye className="w-10 h-10 text-[#1E5A8E] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-[#0A1929] text-2xl font-bold mb-4">Visual Deterrent</h3>
                            <p className="text-gray-600 font-light leading-relaxed">
                                Highly visible, fully liveried Zarkoon Security Limited response vehicles clearly warn potential intruders that the premises are actively protected.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#1E5A8E]/30 transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="bg-[#F4F8FB] w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1E5A8E] transition-colors">
                                <Shield className="w-10 h-10 text-[#1E5A8E] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-[#0A1929] text-2xl font-bold mb-4">Rapid Response</h3>
                            <p className="text-gray-600 font-light leading-relaxed">
                                In the event of an alarm trigger or suspicious activity, our mobile units provide immediate, industry-leading response times on-site.
                            </p>
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
                            <Bus className="w-16 h-16 text-[#1E5A8E] mb-8" />
                            <h3 className="text-[#0A1929] text-4xl font-bold mb-6 tracking-tight">Flexible, Scalable Security</h3>
                            <p className="text-gray-600 text-xl font-light leading-relaxed mb-10">
                                Mobile patrols offer a highly effective compromise between having no security and employing a full-time Manned Guard. Ideal for large industrial estates, retail parks, and vacant properties.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="w-6 h-6 text-[#1E5A8E]" />
                                    <span className="text-[#0A1929] font-bold">Comprehensive Perimeter Checks</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="w-6 h-6 text-[#1E5A8E]" />
                                    <span className="text-[#0A1929] font-bold">Lock and Unlock Services</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="w-6 h-6 text-[#1E5A8E]" />
                                    <span className="text-[#0A1929] font-bold">Real-time GPS Tracking logs</span>
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
                                <p className="text-gray-400 text-sm mt-4 font-light uppercase tracking-widest">Tailored Patrol Packages</p>
                            </div>
                            
                            {isSubmitted ? (
                                <div className="p-20 text-center animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/50">
                                        <ShieldCheck className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-white text-3xl font-bold mb-4 tracking-tight">Thank You!</h3>
                                    <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
                                        Your request for a Mobile Patrols quote has been received. Our team will review your requirements and contact you shortly.
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
                                    <input type="hidden" name="Source" value="Mobile Patrols Quote Form" />

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
                        <a href="mailto:info@zarkoonsecurity.co.uk" className="flex items-center justify-center gap-4 bg-transparent border-4 border-white text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-white hover:text-[#1E5A8E] transition-all transform hover:-translate-y-2">
                            <Mail className="w-8 h-8" />
                            info@zarkoonsecurity.co.uk
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
