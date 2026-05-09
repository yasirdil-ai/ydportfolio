import { motion } from "motion/react";
import { Download, Mail, Linkedin, MapPin, ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button, Section } from "./UI";
import heroImage from "../assets/images/regenerated_image_1778338447248.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Summary", href: "#summary" },
    { name: "Metrics", href: "#metrics" },
    { name: "Expertise", href: "#expertise" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Experience", href: "#experience" },
    { name: "AI Lab", href: "#ai-lab" },
    { name: "CV", href: "#cv" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white">
          YD<span className="text-primary leading-none">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="text-[9px] bg-primary/10 text-primary px-3 py-1 border border-primary/20 font-mono tracking-tighter">
            AVAILABLE FOR GLOBAL ROLES
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-navy border-b border-white/10 p-6 flex flex-col gap-6 items-center"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-widest font-bold text-white/80 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full" href="mailto:ydnkonline@gmail.com">Contact Me</Button>
        </motion.div>
      )}
    </nav>
  );
}

export function Hero() {
  return (
    <Section className="min-h-screen flex items-center pt-52 pb-40" containerClassName="relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <span className="editorial-label">// HEAD OF MARKETING</span>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif italic font-light leading-[0.85] text-white mb-8">
            Yasir <br/> Dil
          </h1>
          
          <div className="max-w-xl">
            <p className="text-xl md:text-2xl text-slate-Custom/80 leading-relaxed font-light mb-10">
              I build <span className="text-white font-medium italic">growth engines</span> for Education & EdTech brands, combining demand generation, CRM automation, and multi-market leadership to turn marketing into <span className="text-primary font-medium">measurable revenue.</span>
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Button href="#contact" className="px-10">
                Email Me
              </Button>
              <Button variant="outline" href="https://docs.google.com/document/d/e/2PACX-1vR9BFSuk1DU1-LkvS2tcls-R0fZxHh0BTElJNgSApgoXoz5GfYjIxnQxK3I_yYyNA/pub">
                View CV
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-2">
              {["Full-Funnel", "CRM Architecture", "Revenue Ops", "MENA Strategy"].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] uppercase tracking-tighter text-white/40">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative group"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
            {/* Gradient Glow */}
            <div className="absolute inset-0 bg-linear-to-t from-navy via-transparent to-transparent opacity-60 z-10" />
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            
            <img 
              src={heroImage} 
              alt="Yasir Dil, Head of Marketing and Growth Marketing Strategist" 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Floating Labels */}
            <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-2">
              <div className="px-3 py-1 bg-navy/80 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-mono uppercase tracking-widest text-primary">
                Marketing Growth Leader
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="mb-4 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 bg-navy/40 backdrop-blur-sm p-2 inline-block">
                Education | EdTech | CRM | Demand Gen
              </div>
              
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {[
                  { val: "21K+", label: "leads/year" },
                  { val: "25%", label: "YoY growth" },
                  { val: "12+", label: "team led" }
                ].map((badge, i) => (
                  <div key={i} className="flex-shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 p-3 rounded-xl">
                    <div className="text-white font-bold text-sm">{badge.val}</div>
                    <div className="text-[8px] uppercase tracking-tighter text-white/40">{badge.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Caption */}
          <div className="mt-6 flex items-center gap-4 text-white/30 italic text-sm">
            <div className="w-8 h-[1px] bg-white/10" />
            <p>Building growth engines for education and EdTech brands</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
