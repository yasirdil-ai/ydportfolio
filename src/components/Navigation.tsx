import { motion, AnimatePresence } from "motion/react";
import { Download, Mail, Linkedin, MapPin, ArrowRight, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button, Section } from "./UI";
import heroImage from "../assets/images/regenerated_image_1778338447248.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark";
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  const toggleTheme = () => setTheme(prev => prev === "dark" ? "light" : "dark");

  const navLinks = [
    { name: "Summary", href: "#summary" },
    { name: "Metrics", href: "#metrics" },
    { name: "AI Studio", href: "#ai-studio" },
    { name: "Expertise", href: "#expertise" },
    { name: "Strategic Case Search", href: "#case-studies" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border-subtle py-4 dark:bg-background/90' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-xs group-hover:rotate-90 transition-transform duration-500">
            <div className="w-4 h-4 border-2 border-background" />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter text-text-primary">
            YDNK<span className="text-primary">.ONLINE</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-secondary hover:text-primary transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 pl-4 border-l border-border-subtle">
            <button 
              onClick={toggleTheme}
              className="relative w-12 h-6 bg-surface border border-border-subtle rounded-full p-1 flex items-center transition-all hover:border-primary/50"
              aria-label="Toggle Theme"
            >
              <motion.div 
                className="w-4 h-4 bg-primary rounded-full flex items-center justify-center"
                animate={{ x: theme === 'dark' ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {theme === "dark" ? <Moon size={10} className="text-background" /> : <Sun size={10} className="text-background" />}
              </motion.div>
            </button>
            <div className="text-[9px] bg-primary/10 text-primary px-3 py-1 border border-primary/20 font-mono tracking-tighter rounded-xs">
              MKTG GROWTH OPS
            </div>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 lg:hidden">
           <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-surface border border-border-subtle text-text-secondary"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            className="text-text-primary z-50 relative p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 bg-background z-40 flex flex-col justify-center items-center px-12"
          >
            <div className="flex flex-col gap-6 items-center w-full">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.2 }}
                  className="text-2xl font-display font-light text-text-primary/80 hover:text-primary transition-colors tracking-tight text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.3 }}
                className="mt-8 w-full"
              >
                <Button className="w-full h-16 text-sm tracking-[0.2em]" href="mailto:ydnkonline@gmail.com">
                  CONNECT NOW
                </Button>
              </motion.div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
              <div className="text-[9px] font-mono uppercase tracking-[0.4em] text-text-secondary/40">
                SYSTEM_V1.1_STABLE
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Hero() {
  return (
    <Section className="min-h-screen flex items-center pt-52 pb-40 overflow-hidden" containerClassName="relative z-10">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-0 animate-grid opacity-20 dark:opacity-30" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono font-bold tracking-widest rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
            AI-POWERED GROWTH STRATEGY
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-light leading-[0.9] text-text-primary tracking-tightest mb-10">
            Marketing <br/> <span className="font-bold italic text-primary">Intelligence.</span>
          </h1>
          
          <div className="max-w-xl">
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light mb-12">
              Building <span className="text-text-primary font-medium">automated revenue engines</span> for global education brands. Where strategic demand gen meets CRM architecture and multi-market leadership.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Button href="#contact" className="h-14 px-10 rounded-xs shadow-lg shadow-primary/20">
                Initiate Project
              </Button>
              <Button variant="outline" href="#case-studies" className="h-14 px-10 rounded-xs">
                View Intelligence
              </Button>
            </div>
            
            <div className="mt-16 pt-12 border-t border-border-subtle grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Markets", val: "MENA | EU | UK" },
                { label: "Verticals", val: "EdTech | Higher Ed" },
                { label: "Expertise", val: "GTM | Revenue Ops" },
                { label: "System", val: "CRM | AI Sync" }
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary/50 mb-1">{stat.label}</div>
                  <div className="text-xs font-bold text-text-primary">{stat.val}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative group">
            {/* Holographic Border Effect */}
            <div className="absolute -inset-[1px] bg-linear-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-2xl opacity-20 group-hover:opacity-100 transition-opacity duration-1000 blur-sm" />
            
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface border border-border-subtle shadow-2xl transition-all duration-700 group-hover:shadow-primary/20">
              <img 
                src={heroImage} 
                alt="Yasir Dil, Growth Strategist" 
                className="w-full h-full object-cover dark:grayscale-[0.2] group-hover:scale-105 transition-all duration-1000"
              />
              
              {/* Overlay Terminal */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/80 backdrop-blur-xl border border-border-subtle rounded-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400/50" />
                    <div className="w-2 h-2 rounded-full bg-amber-400/50" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400/50" />
                  </div>
                  <div className="text-[8px] font-mono text-primary animate-pulse">SYSTEM_ACTIVE</div>
                </div>
                <div className="space-y-3">
                  <div className="h-1 w-full bg-primary/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-text-secondary">
                    <span>REVENUE_TRAJECTORY</span>
                    <span className="text-text-primary">+35.2%</span>
                  </div>
                </div>
              </div>

              {/* Floaties */}
              <div className="absolute top-6 left-6 px-3 py-1 bg-primary text-background text-[9px] font-mono font-bold tracking-tighter rounded-xs select-none">
                GROWTH_OPS_LEAD
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
