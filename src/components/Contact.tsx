import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EXPERIENCE, SERVICES, TECH_STACK, EDUCATION } from "../data";
import { Section, Button } from "./UI";
import { Briefcase, Layers, Zap, GraduationCap, Mail, Phone, MapPin, Linkedin, Send, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import summaryImage from "../assets/images/regenerated_image_1778338448863.png";

export function ExperienceTimeline() {
  return (
    <Section id="experience" className="relative border-t border-border-subtle bg-surface/5">
      <div className="mb-24 flex justify-between items-end">
        <div className="max-w-xl">
          <span className="editorial-label">// CAREER_TRAJECTORY</span>
          <h2 className="text-5xl md:text-7xl font-display font-light text-text-primary tracking-tightest">
            Work <span className="font-bold text-primary italic">Architecture.</span>
          </h2>
        </div>
        <div className="hidden md:block text-[8px] font-mono text-text-secondary/30 uppercase tracking-[0.5em] vertical-text">
          HISTORY_LOG_011
        </div>
      </div>

      <div className="relative border-l border-border-subtle pl-10 md:pl-20 ml-6 space-y-32 py-10">
        {EXPERIENCE.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group lg:max-w-4xl"
          >
            <div className="absolute -left-[45px] md:-left-[85px] top-4 w-3 h-3 bg-background border-2 border-primary rounded-full z-10 group-hover:scale-150 group-hover:bg-primary transition-all duration-500" />
            <div className="absolute -left-[45px] md:-left-[85px] top-4 w-3 h-3 bg-primary blur-[8px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-4">
                  <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary font-bold">
                    {exp.period}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-text-primary group-hover:text-primary transition-colors tracking-tight">
                    {exp.role}
                  </h3>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-surface px-6 py-3 border border-border-subtle rounded-xl w-fit">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-xs font-mono font-bold text-text-primary uppercase tracking-widest">{exp.company}</span>
                <span className="text-[10px] font-mono text-text-secondary/40 font-bold uppercase tracking-widest">{exp.location}</span>
              </div>
              
              <p className="text-text-secondary text-base max-w-3xl leading-relaxed font-light italic border-l-2 border-border-subtle pl-8 group-hover:border-primary/40 transition-colors">
                {exp.summary}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services" className="border-t border-border-subtle bg-background">
      <div className="mb-24 flex justify-between items-end">
        <div className="max-w-xl">
          <span className="editorial-label">// ENGAGEMENT_MODELS</span>
          <h2 className="text-5xl md:text-7xl font-display font-light text-text-primary tracking-tightest leading-none">
            Strategic <br/> <span className="font-bold text-primary italic">Consultancy.</span>
          </h2>
        </div>
        <div className="p-4 bg-surface border border-border-subtle rounded-2xl hidden lg:flex items-center gap-4">
           <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-background">
              <Briefcase size={18} />
           </div>
           <div className="text-[10px] font-mono font-bold text-text-primary uppercase tracking-widest">Global Ops Ready</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-10 bg-surface border border-border-subtle rounded-3xl hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[40px] rounded-full translate-x-12 -translate-y-12 group-hover:bg-primary/10 transition-all" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="text-primary mb-10 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-500">
                <Zap size={20} />
              </div>
              <h3 className="text-2xl font-display font-bold text-text-primary mb-8 group-hover:text-primary transition-colors tracking-tight">
                {service.title}
              </h3>
              <div className="mt-auto space-y-8">
                <div className="p-6 bg-background/50 border border-border-subtle rounded-2xl backdrop-blur-sm">
                  <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-text-secondary/40 mb-3 font-bold">Optimization Vector</div>
                  <div className="text-sm text-text-secondary font-light italic leading-relaxed">{service.forWho}</div>
                </div>
                <div className="flex items-center gap-4 group-hover:translate-x-2 transition-transform">
                  <ArrowRight size={14} className="text-primary" />
                  <div className="text-[10px] font-mono font-bold text-text-primary uppercase tracking-[0.2em]">{service.outcome}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-40 bg-linear-to-br from-primary to-secondary p-12 md:p-24 relative overflow-hidden text-background rounded-3xl group">
        <div className="absolute top-0 left-0 w-full h-full animate-grid opacity-10 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full group-hover:scale-110 transition-transform duration-[2000ms]" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-7xl font-display font-bold mb-10 leading-[0.9] tracking-tightest">Connect Brand, Data & <span className="italic underline underline-offset-8 decoration-white/30 decoration-2">Revenue.</span></h3>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90 italic">
              Deploying high-performance ecosystems as a Fractional Head of Marketing, Remote Growth Leader, or Strategic PMO.
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-10">
            <div className="text-2xl md:text-4xl font-display font-light text-left md:text-right max-w-sm ml-auto leading-[1.1] tracking-tight">
              "Architecting growth in <span className="font-bold">UAE, UK, EU,</span> and <span className="font-bold">global</span> markets."
            </div>
            <Button href="#contact" variant="secondary" className="h-16 px-14 group/btn">
              INITIALIZE PROTOCOL <ArrowRight size={16} className="ml-4 group-hover/btn:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function TechAndEducation() {
  return (
    <Section className="border-t border-border-subtle bg-surface/5">
      <div className="grid lg:grid-cols-12 gap-24">
        <div className="lg:col-span-7">
          <span className="editorial-label">// TECH_STACK_INVENTORY</span>
          <h2 className="text-4xl md:text-6xl font-display font-light text-text-primary mb-16 tracking-tight">Modern <span className="font-bold text-primary">Stack.</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
            {TECH_STACK.slice(0, 18).map(tech => (
              <div key={tech} className="group flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-primary/30 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                <div className="text-xs font-mono font-bold text-text-secondary uppercase tracking-widest group-hover:text-text-primary transition-colors">{tech}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <span className="editorial-label">// CREDENTIALS</span>
          <h2 className="text-4xl md:text-6xl font-display font-light text-text-primary mb-16 tracking-tight">Academic <span className="font-bold text-primary">Log.</span></h2>
          <div className="space-y-12">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="flex gap-10 group relative p-6 bg-surface border border-border-subtle rounded-2xl hover:border-primary/30 transition-all duration-500">
                <div className="text-primary font-mono text-xs font-bold opacity-30 mt-1">0{index + 1}</div>
                <div>
                  <h4 className="text-text-primary text-xl font-display font-bold group-hover:text-primary transition-colors tracking-tight">{edu.degree}</h4>
                  <div className="flex items-center gap-3 mt-4">
                     <GraduationCap size={14} className="text-text-secondary/40" />
                     <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-secondary/60 font-bold">{edu.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      category: formData.get('category'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to send");

      setStatus('success');
      formRef.current?.reset();
      
      setTimeout(() => setStatus('idle'), 8000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg("Connection failure. Strategic abort. Please retry.");
    }
  };

  return (
    <Section id="contact" className="border-t border-border-subtle overflow-hidden bg-background">
      <div className="grid lg:grid-cols-12 gap-24">
        <div className="lg:col-span-5">
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-28 h-28 rounded-3xl overflow-hidden border border-border-subtle p-1 relative z-10">
                <div className="w-full h-full rounded-2xl overflow-hidden grayscale dark:grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={summaryImage} 
                    alt="Yasir Dil avatar" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div>
               <span className="editorial-label mb-4">// NEURAL_UP_LINK</span>
               <h2 className="text-6xl md:text-7xl font-display font-light text-text-primary leading-[0.8] tracking-tightest">Let's <br/> <span className="text-primary font-bold italic">Connect.</span></h2>
            </div>
          </div>
          
          <p className="text-text-secondary mb-20 text-xl font-light leading-relaxed italic border-l-2 border-primary/20 pl-10 max-w-sm">
            Strategic growth leadership for the global era. Architecting modern demand generation across EMEA and beyond.
          </p>
          
          <div className="space-y-10 mb-24">
            <a href="mailto:ydnkonline@gmail.com" className="flex items-center gap-8 group">
              <div className="p-3 bg-surface border border-border-subtle rounded-xl text-text-secondary group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-500">
                 <Mail size={18} />
              </div>
              <div className="space-y-1">
                 <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-secondary/40 font-bold group-hover:text-primary transition-colors">Digital Comms</div>
                 <span className="text-lg text-text-primary font-display font-bold tracking-tight">ydnkonline@gmail.com</span>
              </div>
            </a>
            
            <a href="tel:+971501428596" className="flex items-center gap-8 group">
              <div className="p-3 bg-surface border border-border-subtle rounded-xl text-text-secondary group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-500">
                 <Phone size={18} />
              </div>
              <div className="space-y-1">
                 <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-secondary/40 font-bold group-hover:text-primary transition-colors">Direct Voice</div>
                 <span className="text-lg text-text-primary font-display font-bold tracking-tight">+971 50 142 8596</span>
              </div>
            </a>

            <div className="flex items-center gap-8 group">
              <div className="p-3 bg-surface border border-border-subtle rounded-xl text-text-secondary">
                 <MapPin size={18} />
              </div>
              <div className="space-y-1">
                 <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-secondary/40 font-bold">Strategic HQ</div>
                 <span className="text-lg text-text-primary font-display font-bold tracking-tight">Dubai, UAE (UTC+4)</span>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/yasirdil" target="_blank" rel="noreferrer" className="flex items-center gap-8 group">
              <div className="p-3 bg-surface border border-border-subtle rounded-xl text-text-secondary group-hover:bg-[#0077b5] group-hover:text-white group-hover:border-[#0077b5] transition-all duration-500">
                 <Linkedin size={18} />
              </div>
              <div className="space-y-1">
                 <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-secondary/40 font-bold group-hover:text-[#0077b5] transition-colors">Professional Ledger</div>
                 <span className="text-lg text-text-primary font-display font-bold tracking-tight">/in/yasirdil</span>
              </div>
            </a>
          </div>

          <div className="bg-surface/50 backdrop-blur-md p-10 border border-border-subtle rounded-3xl group">
            <div className="flex justify-between items-center mb-8">
               <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary font-bold">Quick Protocols</h4>
               <div className="w-8 h-px bg-border-subtle group-hover:w-16 group-hover:bg-primary transition-all duration-700" />
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <a href="#metrics" className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-secondary hover:text-primary transition-colors">Metrics</a>
              <a href="#services" className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-secondary hover:text-primary transition-colors">Services</a>
              <a href="#ai-studio" className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-secondary hover:text-primary transition-colors">Neural Studio</a>
              <a href="#contact" className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">Inquiry</a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-primary/5 p-20 border border-primary/20 flex flex-col items-center text-center justify-center h-full min-h-[600px] rounded-3xl backdrop-blur-xl"
              >
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-10 text-primary">
                   <CheckCircle2 size={48} />
                </div>
                <h3 className="text-4xl font-display font-bold text-text-primary mb-6 tracking-tight">Transmission Secured.</h3>
                <p className="text-text-secondary text-lg font-light italic max-w-sm leading-relaxed">
                  Encryption complete. Growth inquiry has been logged. Expect neural response within 24 operational cycles.
                </p>
                <div className="mt-16 h-px w-24 bg-primary/20" />
              </motion.div>
            ) : (
              <motion.form 
                ref={formRef}
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-surface/50 backdrop-blur-xl p-12 md:p-20 border border-border-subtle space-y-12 rounded-3xl group relative overflow-hidden" 
                onSubmit={handleSubmit}
              >
                {/* Decorative Form Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-2xl flex items-center gap-4 text-red-500 text-xs font-mono font-bold">
                    <AlertCircle size={20} />
                    {errorMsg}
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-text-secondary/30">Individual Name</label>
                    <input name="name" type="text" required disabled={status === 'sending'} className="w-full bg-transparent border-b border-border-subtle py-6 text-text-primary text-xl font-display font-bold focus:border-primary focus:text-primary outline-hidden transition-all disabled:opacity-50 tracking-tight" placeholder="Your Name" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-text-secondary/30">Node Address</label>
                    <input name="email" type="email" required disabled={status === 'sending'} className="w-full bg-transparent border-b border-border-subtle py-6 text-text-primary text-xl font-display font-bold focus:border-primary focus:text-primary outline-hidden transition-all disabled:opacity-50 tracking-tight" placeholder="email@domain.com" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-text-secondary/30">Deployment Intent</label>
                  <select name="category" disabled={status === 'sending'} className="w-full bg-transparent border-b border-border-subtle py-6 text-text-primary text-xl font-display font-bold focus:border-primary focus:text-primary outline-hidden transition-all appearance-none cursor-pointer disabled:opacity-50 tracking-tight">
                    <option value="Not Specified">Select Inquiry Protocol...</option>
                    <option value="Executive Leadership">Executive Leadership (Direct Hire)</option>
                    <option value="Fractional Role">Fractional Growth Leadership</option>
                    <option value="Consulting Project">Strategic Consulting Project</option>
                    <option value="Global Recruitment">Global Talent Recruitment</option>
                    <option value="Other">Strategic Innovation Inquiry</option>
                  </select>
                </div>
                
                <div className="space-y-4">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-text-secondary/30">Strategic Outline</label>
                  <textarea name="message" rows={4} required disabled={status === 'sending'} className="w-full bg-transparent border-b border-border-subtle py-6 text-text-primary text-xl font-display font-bold focus:border-primary focus:text-primary outline-hidden transition-all resize-none disabled:opacity-50 tracking-tight" placeholder="Detail your growth challenge..."></textarea>
                </div>
                
                <Button type="submit" disabled={status === 'sending'} className="w-full h-20 text-xs font-mono font-bold uppercase tracking-[0.4em] group/btn" icon={status === 'sending' ? null : <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />}>
                  {status === 'sending' ? "PROCESSING TRANS..." : "EXECUTE ENQUIRY"}
                </Button>
                
                <div className="flex justify-between items-center text-[8px] font-mono text-text-secondary/30 uppercase tracking-[0.3em]">
                   <span>System Secure // 256-bit</span>
                   <span>YDNK_OPS_LOG_ACTIVE</span>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      <footer className="mt-40 pt-16 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-12 text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-text-secondary/30">
        <div className="flex items-center gap-6">
           <div className="w-3 h-3 bg-primary/20 rounded-full animate-pulse" />
           <span>© 2026 Yasir Dil · Strategic Operating System V1.1</span>
        </div>
        <div className="flex gap-12">
          <span className="hover:text-primary transition-colors cursor-default">MENA</span>
          <span className="hover:text-primary transition-colors cursor-default">EMEA</span>
          <span className="hover:text-primary transition-colors cursor-default">AMER</span>
          <span className="hover:text-primary transition-colors cursor-default">APAC</span>
        </div>
      </footer>
    </Section>
  );
}
