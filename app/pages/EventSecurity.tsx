import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Shield, Calendar, Music, Building2, CheckCircle, Info, ShieldCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import heroImage from "../../assets/event-security-500x500.png";
import detailsImage from "../../assets/event-security-details.png";
import festivalImg from "../../assets/festival-security-card.png";
import corporateImg from "../../assets/corporate-event-card.png";
import musicImg from "../../assets/music-event-card.png";
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


export function EventSecurity() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(e.currentTarget);
        const name = formData.get("Name") || "Customer";
        
        // Unique Subject
        formData.append("_subject", `Service Quote: Event Security - ${name} [${new Date().toLocaleTimeString()}]`);
        
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

    const services = [
        {
            title: "Festival Security",
            description: "Crowd management and site protection for large-scale outdoor festivals and cultural events.",
            icon: Music,
            image: festivalImg
        },
        {
            title: "Corporate Event Security",
            description: "Discreet and professional security for high-profile business gatherings and conferences.",
            icon: Building2,
            image: corporateImg
        },
        {
            title: "Music Festival Security",
            description: "Specialized safety protocols for concerts and tours, ensuring performer and fan safety.",
            icon: Calendar,
            image: musicImg
        }
    ];

    return (
        <div className="min-h-screen font-['Outfit'] bg-white">
            <Helmet>
                <title>Event Security & Crowd Management | Zarkoon Security Limited</title>
                <meta name="description" content="Expert event security and professional crowd management services for festivals, corporate events, and concerts. Ensuring safety and peace of mind." />
            </Helmet>
            {/* Unique Hero Banner */}
            <section
                className="relative h-[550px] flex items-center justify-center bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-[#0A1929]/80 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center px-6">
                    <p className="text-[#5DADE2] text-sm font-bold uppercase tracking-[0.4em] mb-6">Expert Event Protection</p>
                    <h1 className="text-white text-6xl md:text-8xl font-bold mb-8 tracking-tighter">
                        Event <span className="text-[#5DADE2]">Security</span>
                    </h1>
                    <p className="text-gray-300 text-xl max-w-2xl mx-auto font-light mb-12 leading-relaxed">
                        Setting the standard for safe, professionally managed events across the UK. Protecting your vision, your guests, and your peace of mind.
                    </p>
                    <Link to="/contact-us">
                        <Button className="bg-[#1E5A8E] hover:bg-[#5DADE2] text-white px-12 py-7 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 uppercase tracking-widest border-2 border-white/10">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Service Overview - Unique Grid Layout */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
                    {services.map((service, idx) => (
                        <div 
                            key={idx} 
                            className="group relative h-[500px] rounded-[40px] overflow-hidden cursor-pointer shadow-2xl transition-all duration-500"
                        >
                            {/* Background Image */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />
                            
                            {/* Premium Overlay */}
                            <div className="absolute inset-0 bg-[#0A1929]/40 group-hover:bg-[#0A1929]/80 transition-all duration-500" />

                            {/* Content Wrapper */}
                            <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                {/* Normal State: Only Title */}
                                <h3 className="text-white text-3xl font-bold mb-0 transform translate-y-0 group-hover:-translate-y-4 transition-transform duration-500">
                                    {service.title}
                                </h3>

                                {/* Hover State Elements (Fade In) */}
                                <div className="space-y-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    <div className="w-16 h-16 bg-[#1E5A8E] rounded-2xl flex items-center justify-center">
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <p className="text-gray-300 text-lg font-light leading-relaxed">
                                        {service.description}
                                    </p>
                                    <Link 
                                        to="/contact-us" 
                                        className="inline-flex items-center gap-3 text-[#5DADE2] text-lg font-bold hover:gap-5 transition-all duration-300"
                                    >
                                        Get Started <CheckCircle className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Transition Block: How much does security cost? */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
                    <div className="lg:col-span-6">
                        <div className="relative rounded-[60px] overflow-hidden shadow-2xl border-4 border-[#1E5A8E]/10">
                            <img
                                src={detailsImage}
                                alt="Event Security Details"
                                className="w-full h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] to-transparent opacity-60"></div>
                        </div>
                    </div>
                    <div className="lg:col-span-6 bg-[#0A1929] p-16 rounded-[60px] text-white shadow-3xl border border-[#1E88E5]/20 transform lg:-translate-x-12 relative z-20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-[#1E5A8E] rounded-2xl">
                                <Info className="w-8 h-8 text-[#5DADE2]" />
                            </div>
                            <h2 className="text-4xl font-bold leading-tight">How much does security <br /><span className="text-[#5DADE2]">cost for a festival?</span></h2>
                        </div>
                        <p className="text-gray-300 text-lg font-light leading-relaxed mb-10">
                            Event security pricing is dynamic and depends heavily on the risk profile of your gathering. Factors include crowd size, high-profile attendance, alcoholic beverage availability, and the duration of the event. At Zarkoon Security Limited, we provide transparent, competitive rates based on SIA-licensed personnel requirements.
                        </p>
                        <div className="space-y-6">
                            {[
                                "Custom Risk Assessments",
                                "SIA Licensed Stewarding",
                                "Emergency Response Teams",
                                "Transparent Hourly Rates"
                            ].map((point, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-2 h-2 bg-[#5DADE2] rounded-full group-hover:scale-150 transition-transform"></div>
                                    <span className="text-gray-200 font-medium tracking-wide">{point}</span>
                                </div>
                            ))}
                        </div>
                        <Link to="/contact-us" className="mt-12 inline-block">
                            <Button className="bg-[#5DADE2] text-[#0A1929] hover:bg-white px-10 py-5 rounded-2xl font-black uppercase tracking-tighter transition-all">
                                Request Precise Pricing
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Form & Specific Info Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                    {/* Left: Content Block */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="bg-[#F4F8FB] p-16 rounded-[60px] border border-gray-100 shadow-xl">
                            <h2 className="text-[#0A1929] text-4xl font-bold mb-8">Securing the Moment</h2>
                            <p className="text-gray-600 font-light leading-relaxed mb-10 text-xl">
                                Managing event security requires more than just physical presence. It demands advanced crowd dynamics analysis, risk assessment at every entry point, and seamless communication.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-[#1E5A8E] rounded-xl flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-[#0A1929]">Entry Control</h4>
                                    <p className="text-gray-500">Strict ticket verification and prohibited items checks to maintain a controlled perimeter.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-[#1E5A8E] rounded-xl flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-[#0A1929]">Elite Stewarding</h4>
                                    <p className="text-gray-500">Friendly yet firm presence to guide your guests safely through the venue.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Enhanced Quote Form */}
                    <div className="lg:col-span-5 transform lg:-translate-y-20">
                        <div className="bg-[#0A1929] rounded-[60px] shadow-3xl overflow-hidden border-2 border-[#1E88E5]/40">
                            <div className="p-12 border-b border-[#1E88E5]/20 bg-gradient-to-br from-[#1E5A8E]/10 to-transparent">
                                <h3 className="text-white text-4xl font-bold mb-3 tracking-tighter">Get A Quote</h3>
                                <div className="w-16 h-1.5 bg-[#5DADE2] rounded-full"></div>
                                <p className="text-gray-400 text-sm mt-4 font-light uppercase tracking-widest">Rapid response within 1 hour</p>
                            </div>
                            
                            {isSubmitted ? (
                                <div className="p-20 text-center animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/50">
                                        <ShieldCheck className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-white text-3xl font-bold mb-4 tracking-tight">Thank You!</h3>
                                    <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
                                        Your request for an Event Security quote has been received. Our team will review your requirements and contact you shortly.
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
                                    <input type="hidden" name="Source" value="Event Security Quote Form" />

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
                                        <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Email</label>
                                        <Input
                                            type="email"
                                            name="Email"
                                            required
                                            placeholder="john@example.com"
                                            className="bg-white border-2 border-[#0A1929]/50 h-14 focus:border-[#5DADE2] text-[#0A1929] rounded-2xl"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Phone</label>
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
                                        <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Select</label>
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
                                        placeholder="Full Event Location"
                                        className="bg-white border-2 border-[#0A1929]/50 h-14 focus:border-[#5DADE2] text-[#0A1929] rounded-2xl"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Message</label>
                                    <Textarea
                                        name="Message"
                                        required
                                        placeholder="Describe your event security needs..."
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
        </div>
    );
}

