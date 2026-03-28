/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Menu, 
  X,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Award,
  Mail
} from "lucide-react";
import React, { useState, useEffect } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: 'Cosmetic Smile Design',
    message: ''
  });
  const [errors, setErrors] = useState({
    fullName: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name in errors) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { fullName: '', phone: '' };
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Invalid phone format';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({
        fullName: '',
        phone: '',
        service: 'Cosmetic Smile Design',
        message: ''
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-700 ${scrolled ? "bg-white/80 backdrop-blur-2xl py-4 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]" : "bg-transparent py-8"}`}>
        <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-accent shadow-2xl group-hover:rotate-12 transition-transform duration-500">
              <ShieldCheck size={28} strokeWidth={1.2} />
            </div>
            <div>
              <span className="text-2xl font-serif font-bold tracking-tight block leading-none text-primary">DENTAL FIX</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-accent font-black">By Dr. Asad Ali</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.25em] font-bold text-slate-400">
            {["services", "about", "testimonials", "gallery"].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-accent transition-all duration-300 relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a href="#contact" className="bg-primary text-white px-10 py-4 rounded-full hover:bg-accent hover:text-primary transition-all duration-500 shadow-2xl shadow-slate-200 uppercase text-[10px] tracking-widest">Book Now</a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-xl md:hidden"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">About</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Reviews</a>
            <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Clinic</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white px-6 py-3 rounded-xl text-center font-bold">Book Now</a>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 md:pt-64 md:pb-52 overflow-hidden bg-surface">
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-accent/5 rounded-l-[300px] blur-[120px]" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-md border border-white px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.3em] font-black text-accent mb-10 shadow-sm">
                  <Sparkles size={14} className="animate-pulse" />
                  <span>The Pinnacle of Dental Artistry</span>
                </div>
                <h1 className="text-6xl md:text-[110px] font-serif font-medium leading-[0.88] mb-10 text-primary tracking-tighter">
                  Precision <br />
                  <span className="italic font-light text-accent ml-4">Meets</span> <br />
                  Elegance
                </h1>
                <p className="text-xl text-slate-500 mb-14 max-w-lg leading-relaxed font-light">
                  Welcome to Dental Fix, where Dr. Asad Ali redefines oral healthcare through a lens of luxury, comfort, and uncompromising clinical excellence.
                </p>
                
                <div className="flex flex-wrap gap-8">
                  <a 
                    href="https://wa.me/923126963668" 
                    target="_blank"
                    className="group relative flex items-center gap-4 bg-primary text-white px-12 py-6 rounded-full font-bold overflow-hidden transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)]"
                  >
                    <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <MessageCircle size={22} className="relative z-10 group-hover:text-primary transition-colors" />
                    <span className="relative z-10 group-hover:text-primary transition-colors uppercase tracking-widest text-xs">Book via WhatsApp</span>
                  </a>
                  <a 
                    href="tel:+923126963668" 
                    className="flex items-center gap-4 bg-white border border-slate-200 text-primary px-12 py-6 rounded-full font-bold hover:border-accent hover:text-accent transition-all duration-500 uppercase tracking-widest text-xs"
                  >
                    <Phone size={20} />
                    Call Concierge
                  </a>
                </div>

                <div className="mt-16 flex items-center gap-8">
                  <div className="flex -space-x-4">
                    {[
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100",
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
                    ].map((url, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-lg"
                      >
                        <img src={url} alt="Patient" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </motion.div>
                    ))}
                  </div>
                  <div className="h-12 w-px bg-slate-200" />
                  <div>
                    <div className="flex text-accent mb-1 gap-0.5">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Trusted by 5,000+ Patients</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative z-10 rounded-[80px] overflow-hidden shadow-[0_80px_120px_-30px_rgba(0,0,0,0.2)] border-[1px] border-white/50">
                  <img 
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200&h=1600" 
                    alt="Premium Dental Studio" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-[3s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60" />
                </div>
                
                {/* Floating Experience Card */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-12 -right-8 md:-right-12 z-20 glass-card p-10 rounded-[50px] flex items-center gap-8 shadow-2xl"
                >
                  <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-accent shadow-2xl rotate-3">
                    <Award size={40} strokeWidth={1} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Clinical Mastery</p>
                    <p className="text-3xl font-serif font-bold text-primary">12+ Years</p>
                    <p className="text-[11px] text-accent font-bold uppercase tracking-widest mt-1">Experience</p>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
                <div className="absolute top-1/2 -left-10 w-24 h-24 border border-accent/30 rounded-full -z-10 animate-ping opacity-20" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-40 bg-white relative">
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
              <div className="max-w-3xl">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Our Specialized Services</span>
                </motion.div>
                <h2 className="text-5xl md:text-8xl font-serif font-medium text-primary leading-[0.9] tracking-tighter">
                  Curated <br />
                  <span className="italic text-accent">Oral</span> Artistry
                </h2>
              </div>
              <p className="text-slate-500 max-w-md text-xl font-light leading-relaxed border-l-2 border-accent/20 pl-8">
                We blend advanced medical science with an aesthetic eye to deliver results that are as beautiful as they are functional.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Root Canal Mastery", desc: "Specialized endodontic procedures using microscopic precision to save teeth with zero pain.", icon: <Stethoscope size={32} />, img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600&h=400" },
                { title: "Smile Sculpting", desc: "Transformative cosmetic dentistry including veneers and whitening for a Hollywood-standard smile.", icon: <Sparkles size={32} />, img: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=600&h=400" },
                { title: "Elite Hygiene", desc: "Advanced scaling and polishing using airflow technology for a deep, refreshing clean.", icon: <ShieldCheck size={32} />, img: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&q=80&w=600&h=400" },
                { title: "Restorative Art", desc: "Natural-looking fillings and inlays that restore strength without compromising on aesthetics.", icon: <CheckCircle2 size={32} />, img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600&h=400" },
                { title: "Prosthetic Design", desc: "Custom-milled crowns and bridges crafted from the finest zirconia and porcelain materials.", icon: <Award size={32} />, img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600&h=400" },
                { title: "Surgical Excellence", desc: "Expert extractions and implantology performed in a sterile, high-tech environment.", icon: <Star size={32} />, img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600&h=400" },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-surface rounded-[50px] overflow-hidden border border-slate-100 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-700"
                >
                  <div className="h-64 overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-12 relative">
                    <div className="absolute -top-10 right-10 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {service.icon}
                    </div>
                    <h4 className="text-3xl font-serif font-bold mb-6 text-primary">{service.title}</h4>
                    <p className="text-slate-500 leading-relaxed mb-10 font-light text-lg">{service.desc}</p>
                    <a href="#contact" className="inline-flex items-center gap-3 text-accent font-black text-[10px] uppercase tracking-[0.3em] group-hover:gap-6 transition-all duration-500">
                      Explore Procedure <ChevronRight size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-40 overflow-hidden bg-primary text-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative z-10 rounded-[100px] overflow-hidden border-[1px] border-white/20 shadow-2xl group"
                >
                  <img 
                    src="Dr Asad.jpg" 
                    alt="Dr. Asad Ali" 
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-accent/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                </motion.div>
                
                {/* Signature Card */}
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-16 -right-8 md:-right-16 bg-white p-12 rounded-[60px] shadow-2xl max-w-sm"
                >
                  <div className="mb-6">
                    <span className="text-accent font-serif italic text-4xl block mb-1">Dr. Asad Ali</span>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-black">Chief Clinical Director</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed italic">
                    "My mission is to marry clinical perfection with an unparalleled patient experience. Every smile we craft is a unique masterpiece."
                  </p>
                </motion.div>

                {/* Decorative Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">The Visionary Behind Dental Fix</span>
                </div>
                <h3 className="text-5xl md:text-8xl font-serif font-medium mb-12 leading-[0.9] tracking-tighter">
                  A Legacy of <br />
                  <span className="italic text-accent">Excellence</span>
                </h3>
                <div className="space-y-10 text-slate-300 text-xl font-light leading-relaxed">
                  <p>
                    Dr. Asad Ali is not just a dentist; he is an architect of confidence. With a career spanning over a decade, he has established himself as the premier choice for discerning patients in Sahiwal and Okara.
                  </p>
                  <p>
                    His philosophy centers on "Pain-Free Luxury"—a commitment to ensuring that advanced dental procedures are delivered in an environment that feels more like a private lounge than a clinic.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 pt-8">
                    {[
                      { label: "Precision", val: "99.9%" },
                      { label: "Satisfaction", val: "100%" },
                      { label: "Procedures", val: "15k+" },
                      { label: "Awards", val: "12" }
                    ].map((stat, i) => (
                      <div key={i} className="border-l border-white/10 pl-6">
                        <p className="text-3xl font-serif text-accent mb-1">{stat.val}</p>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-20">
                  <a href="#contact" className="group inline-flex items-center gap-6 bg-accent text-primary px-14 py-6 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white transition-all duration-500 shadow-2xl shadow-accent/20">
                    Schedule Private Consultation
                    <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-40 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 border border-white rounded-full" />
            <div className="absolute bottom-20 right-10 w-[600px] h-[600px] border border-white rounded-full" />
          </div>
          
          <div className="container mx-auto px-4 md:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-4 mb-8"
              >
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Patient Experiences</span>
                <div className="h-px w-12 bg-accent" />
              </motion.div>
              <h3 className="text-5xl md:text-8xl font-serif font-medium mb-10 leading-[0.9] tracking-tighter">Voices of <br /><span className="italic text-accent">Satisfaction</span></h3>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { name: "Ahmed Khan", text: "The clinical precision and care provided by Dr. Asad are unparalleled. My root canal was completely painless and the results are perfect.", rating: 5, role: "Business Executive" },
                { name: "Sana Malik", text: "A truly premium experience. The clinic's hygiene standards and the doctor's aesthetic vision transformed my smile beyond expectations.", rating: 5, role: "Architect" },
                { name: "Zubair Ali", text: "I've always been anxious about dental visits, but the atmosphere here is so calming. The procedure was swift and professional.", rating: 5, role: "Software Engineer" },
              ].map((review, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/5 backdrop-blur-2xl p-14 rounded-[60px] border border-white/10 hover:bg-white/10 transition-all duration-700 group"
                >
                  <div className="flex text-accent mb-10 gap-1">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-2xl font-serif italic mb-12 leading-relaxed text-slate-200 group-hover:text-white transition-colors">"{review.text}"</p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center font-serif text-3xl text-accent border border-accent/30 group-hover:scale-110 transition-transform">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-bold tracking-[0.2em] text-xs uppercase mb-1">{review.name}</p>
                      <p className="text-[10px] text-accent uppercase tracking-[0.2em] font-black">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-40 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
              <div className="max-w-3xl">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">The Atelier of Smiles</span>
                </motion.div>
                <h3 className="text-5xl md:text-8xl font-serif font-medium text-primary leading-[0.9] tracking-tighter">State-of-the-Art <br /><span className="italic text-accent">Studio</span></h3>
              </div>
              <p className="text-slate-500 max-w-md text-xl font-light leading-relaxed border-l-2 border-accent/20 pl-8">
                Step into an environment where every detail is calibrated for your serenity and every piece of technology is at the forefront of dental science.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
              {[
                "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=1000&h=1000",
                "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000&h=1000",
                "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000&h=1000",
                "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000&h=1000",
                "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000&h=1000",
                "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=1000&h=1000",
                "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000&h=1000",
                "https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&q=80&w=1000&h=1000"
              ].map((url, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className={`relative rounded-[60px] overflow-hidden shadow-2xl cursor-pointer group ${i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}
                >
                  <img 
                    src={url} 
                    alt={`Clinic Interior ${i + 1}`} 
                    className="w-full h-full object-cover aspect-square md:aspect-auto group-hover:scale-110 transition-transform duration-[2s]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-2xl rounded-full flex items-center justify-center text-white border border-white/30 scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Sparkles size={32} strokeWidth={1} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Booking Section */}
        <section id="contact" className="py-40 bg-surface relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid lg:grid-cols-2 gap-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Concierge & Bookings</span>
                </div>
                <h3 className="text-5xl md:text-8xl font-serif font-medium text-primary mb-12 leading-[0.9] tracking-tighter">Begin Your <br /><span className="italic text-accent">Transformation</span></h3>
                
                <div className="space-y-12 mt-20">
                  {[
                    { icon: <Phone size={24} />, label: "Direct Line", val: "+92 312 6963668", sub: "Available 10AM - 8PM" },
                    { icon: <Mail size={24} />, label: "Email Inquiry", val: "concierge@dentalfix.pk", sub: "Response within 24 hours" },
                    { icon: <MapPin size={24} />, label: "The Studio", val: "Al-Shafi Hospital, Sahiwal", sub: "Private Parking Available" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-16 h-16 rounded-3xl bg-white shadow-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">{item.label}</p>
                        <p className="text-2xl font-serif text-primary mb-1">{item.val}</p>
                        <p className="text-sm text-slate-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-20 p-8 bg-white rounded-[40px] shadow-2xl border border-slate-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Live Map</span>
                  </div>
                  <div className="aspect-video bg-slate-100 rounded-[30px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.364434234234!2d73.10!3d30.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM5JzM2LjAiTiA3M8KwMDYnMDAuMCJF!5e0!3m2!1sen!2s!4v1616161616161!5m2!1sen!2s" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 md:p-20 rounded-[80px] shadow-2xl border border-slate-100 relative"
              >
                <div className="absolute top-12 right-12 text-accent opacity-20">
                  <Sparkles size={48} strokeWidth={1} />
                </div>
                <h4 className="text-3xl font-serif text-primary mb-12">Private Appointment Request</h4>
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 p-8 rounded-[40px] text-center"
                  >
                    <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h5 className="text-2xl font-serif text-primary mb-2">Request Received</h5>
                    <p className="text-slate-500">Our concierge will contact you shortly to confirm your appointment.</p>
                  </motion.div>
                ) : (
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-4">Full Name</label>
                        <input 
                          type="text" 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Alexander Pierce" 
                          className={`w-full px-8 py-6 rounded-full bg-slate-50 border-none focus:ring-2 transition-all placeholder:text-slate-300 ${errors.fullName ? 'focus:ring-red-500 ring-2 ring-red-500/20' : 'focus:ring-accent/20'}`} 
                        />
                        {errors.fullName && <p className="text-red-500 text-[10px] uppercase tracking-widest font-bold ml-4">{errors.fullName}</p>}
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-4">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+92 300 0000000" 
                          className={`w-full px-8 py-6 rounded-full bg-slate-50 border-none focus:ring-2 transition-all placeholder:text-slate-300 ${errors.phone ? 'focus:ring-red-500 ring-2 ring-red-500/20' : 'focus:ring-accent/20'}`} 
                        />
                        {errors.phone && <p className="text-red-500 text-[10px] uppercase tracking-widest font-bold ml-4">{errors.phone}</p>}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-4">Select Service</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-8 py-6 rounded-full bg-slate-50 border-none focus:ring-2 focus:ring-accent/20 transition-all text-slate-500 appearance-none"
                      >
                        <option>Cosmetic Smile Design</option>
                        <option>Advanced Implantology</option>
                        <option>Orthodontic Excellence</option>
                        <option>General Oral Health</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-4">Personal Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4} 
                        placeholder="How can we assist you today?" 
                        className="w-full px-8 py-6 rounded-[40px] bg-slate-50 border-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-slate-300 resize-none"
                      ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary text-white py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-accent transition-all duration-500 shadow-2xl shadow-primary/20 group">
                      Confirm Request
                      <ChevronRight size={18} className="inline-block ml-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                    <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest">
                      Your privacy is our priority. All data is encrypted.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-32">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-4 gap-20 mb-32">
            <div className="col-span-2">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary">
                  <Sparkles size={24} />
                </div>
                <span className="text-3xl font-serif font-medium tracking-tight">Dental Fix</span>
              </div>
              <p className="text-slate-400 text-xl font-light leading-relaxed max-w-md mb-12">
                Redefining the dental experience through clinical excellence and aesthetic mastery. Your journey to a perfect smile begins here.
              </p>
              <div className="flex gap-8">
                {[
                  { name: 'Instagram', url: 'https://www.instagram.com/dentalfix_by_dr.asadali/' },
                  { name: 'Facebook', url: 'https://www.facebook.com/people/Dental-Fix-By-Dr-Asad-Ali/61559132816202/?ref=NONE_xav_ig_profile_page_web#' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dr-asad-ali' },
                  { name: 'WhatsApp', url: 'https://wa.me/923126963668' }
                ].map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-widest font-black text-slate-500 hover:text-accent transition-all duration-300 hover:-translate-y-1"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-accent font-black tracking-[0.3em] uppercase text-[10px] mb-10">Navigation</h5>
              <ul className="space-y-6">
                {['Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors text-sm font-light uppercase tracking-widest">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-accent font-black tracking-[0.3em] uppercase text-[10px] mb-10">Studio Hours</h5>
              <ul className="space-y-6 text-sm font-light tracking-widest uppercase">
                <li className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-500">Mon - Sat</span>
                  <span>10AM - 8PM</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-500">Sunday</span>
                  <span>Appointment Only</span>
                </li>
              </ul>
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-4">Location</p>
                <p className="text-sm font-light text-slate-400 leading-relaxed">
                  Al-Shafi Hospital, Sahiwal<br />
                  Punjab, Pakistan
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-500 text-[10px] uppercase tracking-[0.4em] font-bold">
              © 2026 Dental Fix by Dr. Asad Ali. All Rights Reserved.
            </p>
            <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/923126963668" 
        target="_blank"
        className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-200 hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
