import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EXPERIENCE, SERVICES, TECH_STACK, EDUCATION } from "../data";
import { Section, Button } from "./UI";
import { Briefcase, Layers, Zap, GraduationCap, Mail, Phone, MapPin, Linkedin, Send, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import summaryImage from "../assets/images/regenerated_image_1778338448863.png";
import { LinkedInFeed } from "./LinkedInFeed";

export function ExperienceTimeline() {
  return (
    <Section id="experience" className="bg-navy border-t border-white/10">
      <div className="mb-24">
        <span className="editorial-label">Trajectory</span>
        <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-6">
          Work <span className="text-primary font-normal not-italic">History</span>
        </h2>
      </div>

      <div className="relative border-l border-white/10 pl-8 md:pl-16 ml-4 space-y-24">
        {EXPERIENCE.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[41px] md:-left-[73px] top-0 w-2 h-2 bg-primary" />
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-4">
                <h3 className="text-2xl font-serif italic text-white">
                  {exp.role}
                </h3>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 whitespace-nowrap">
                  {exp.period}
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 text-primary font-mono text-[10px] uppercase tracking-widest">
                <span>{exp.company}</span>
                <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
                <span className="text-white/40">{exp.location}</span>
              </div>
              <p className="text-slate-400 text-sm max-w-3xl leading-relaxed font-light italic">
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
    <Section id="services" className="bg-navy border-t border-white/10">
      <div className="mb-24">
        <span className="editorial-label">Collaboration</span>
        <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-6">
          Growth <span className="text-primary font-normal not-italic">Consultancy</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            className="group"
          >
            <div className="text-primary mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
              <Zap size={20} />
            </div>
            <h3 className="text-2xl font-serif italic text-white mb-6 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <div className="space-y-6 border-l border-white/10 pl-6">
              <div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-2">Target</div>
                <div className="text-sm text-slate-400 font-light italic">{service.forWho}</div>
              </div>
              <div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-primary/50 mb-2">Outcome</div>
                <div className="text-white text-sm font-medium">{service.outcome}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-40 bg-primary p-12 md:p-24 relative overflow-hidden text-navy">
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl md:text-6xl font-serif italic font-bold mb-8 leading-tight">Connect Brand, Data & Revenue.</h3>
            <p className="text-lg md:text-xl font-medium leading-relaxed opacity-80">
              Fractional Head of Marketing, Remote Leadership, or Global Growth Projects.
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-8">
            <div className="text-xl md:text-2xl font-serif italic font-bold text-right max-w-sm ml-auto">
              "Available for roles in UAE, KSA, UK, EU, and Canada."
            </div>
            <Button href="#contact" variant="secondary" className="h-16 px-12 bg-white text-black hover:bg-white/90">
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function TechAndEducation() {
  return (
    <Section className="bg-navy border-t border-white/10">
      <div className="grid lg:grid-cols-2 gap-32">
        <div>
          <span className="editorial-label">Modern Stack</span>
          <h2 className="text-4xl font-serif italic text-white mb-16">Selected Technologies</h2>
          <div className="flex flex-wrap gap-x-12 gap-y-8">
            {TECH_STACK.slice(0, 15).map(tech => (
              <div key={tech} className="group">
                <div className="text-xs font-bold text-white/60 group-hover:text-primary transition-colors">{tech}</div>
                <div className="h-[1px] w-0 group-hover:w-full bg-primary transition-all duration-300 mt-1" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="editorial-label">Credentials</span>
          <h2 className="text-4xl font-serif italic text-white mb-16">Education & Licenses</h2>
          <div className="space-y-12">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="flex gap-8 group">
                <div className="text-primary font-mono text-xs opacity-30 mt-1">0{index + 1}</div>
                <div>
                  <h4 className="text-white text-lg font-serif italic group-hover:text-primary transition-colors">{edu.degree}</h4>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mt-2">{edu.school}</p>
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
      
      // Auto-revert to idle after 8 seconds
      setTimeout(() => setStatus('idle'), 8000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <Section id="contact" className="bg-navy border-t border-white/10 overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20 p-1">
              <div className="w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img 
                  src={summaryImage} 
                  alt="Yasir Dil avatar" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 className="text-6xl md:text-7xl font-serif italic text-white leading-tight">Let's <span className="text-primary font-normal not-italic underline decoration-1 underline-offset-8 decoration-primary/30">Connect.</span></h2>
          </div>
          <p className="text-slate-400 mb-16 text-lg font-light leading-relaxed italic">
            Strategic growth leadership for the modern era. Ready for global challenges.
          </p>
          
          <div className="space-y-10 mb-20">
            <a href="mailto:ydnkonline@gmail.com" className="flex items-center gap-6 group">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/30 group-hover:text-primary transition-colors">Email</div>
              <span className="text-lg text-white font-medium border-b border-white/10 pb-1 group-hover:border-primary transition-all">ydnkonline@gmail.com</span>
            </a>
            <a href="tel:+971501428596" className="flex items-center gap-6 group">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/30 group-hover:text-primary transition-colors">Mobile</div>
              <span className="text-lg text-white font-medium border-b border-white/10 pb-1 group-hover:border-primary transition-all">+971 50 142 8596</span>
            </a>
            <div className="flex items-center gap-6 group">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/30">Studio</div>
              <span className="text-lg text-white font-medium border-b border-white/10 pb-1">Dubai, UAE (UTC+4)</span>
            </div>
            <a href="https://www.linkedin.com/in/yasirdil" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/30 group-hover:text-primary transition-colors">LinkedIn</div>
              <span className="text-lg text-white font-medium border-b border-white/10 pb-1 group-hover:border-primary transition-all">/in/yasirdil</span>
            </a>
          </div>

          <div className="bg-white/5 p-10 border border-white/10">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-primary mb-6">Email Signature Link?</h4>
            <div className="flex flex-wrap gap-6">
              <a href="#metrics" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors border-b border-white/20">Results</a>
              <a href="#services" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors border-b border-white/20">Services</a>
              <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/40">Contact</a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-primary/5 p-16 border border-primary/20 flex flex-col items-center text-center justify-center h-full min-h-[500px]"
              >
                <CheckCircle2 className="text-primary mb-6" size={64} />
                <h3 className="text-3xl font-serif italic text-white mb-4">Submission Received</h3>
                <p className="text-slate-400 max-w-sm italic">
                  Thank you for submitting your enquiry. I’ll get back to you shortly.
                </p>
                <div className="mt-12 h-[1px] w-12 bg-primary/30" />
              </motion.div>
            ) : (
              <motion.form 
                ref={formRef}
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white/5 p-12 md:p-16 border border-white/10 space-y-10" 
                onSubmit={handleSubmit}
              >
                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/20 p-4 flex items-center gap-3 text-red-500 text-sm">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/40">Identification</label>
                    <input name="name" type="text" required disabled={status === 'sending'} className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg font-light focus:border-primary outline-hidden transition-colors disabled:opacity-50" placeholder="Full Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/40">Electronic Mail</label>
                    <input name="email" type="email" required disabled={status === 'sending'} className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg font-light focus:border-primary outline-hidden transition-colors disabled:opacity-50" placeholder="email@address.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/40">Inquiry Type</label>
                  <select name="category" disabled={status === 'sending'} className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg font-light focus:border-primary outline-hidden transition-colors appearance-none cursor-pointer disabled:opacity-50">
                    <option className="bg-navy" value="Not Specified">Select a category...</option>
                    <option className="bg-navy" value="Executive Leadership">Executive Leadership</option>
                    <option className="bg-navy" value="Fractional Role">Fractional Role</option>
                    <option className="bg-navy" value="Consulting Project">Consulting Project</option>
                    <option className="bg-navy" value="Global Recruitment">Global Recruitment</option>
                    <option className="bg-navy" value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/40">Brief Message</label>
                  <textarea name="message" rows={3} required disabled={status === 'sending'} className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg font-light focus:border-primary outline-hidden transition-colors resize-none disabled:opacity-50" placeholder="How can we collaborate?"></textarea>
                </div>
                <Button type="submit" disabled={status === 'sending'} className="w-full px-12 h-16 text-sm tracking-[0.3em]" icon={status === 'sending' ? null : <ArrowRight size={14} />}>
                  {status === 'sending' ? "Sending..." : "ENQUIRY"}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-40">
        <LinkedInFeed />
      </div>

      <footer className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-20 text-[9px] font-mono uppercase tracking-widest">
        <div>© 2026 Yasir Dil • Portfolio Edition V1.0</div>
        <div className="flex gap-10">
          <span>MENA</span>
          <span>EMEA</span>
          <span>AMER</span>
          <span>APAC</span>
        </div>
      </footer>
    </Section>
  );
}
