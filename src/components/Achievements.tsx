import { motion, useInView, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { CaseStudy, METRICS, CASE_STUDIES } from "../data";
import { Section } from "./UI";
import { CheckCircle2, Layout, Database, TrendingUp, Users, ArrowRight } from "lucide-react";
import { Button } from "./UI";

interface CaseStudyCardProps {
  cs: CaseStudy;
  index: number;
  key?: string | number;
}

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and formatting
  // e.g. "21,000+" -> 21000 and "+"
  const numberPart = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9,]/g, "");
  const targetNumber = parseInt(numberPart, 10);

  useEffect(() => {
    if (isInView && !isNaN(targetNumber)) {
      const controls = animate(0, targetNumber, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // easeOutQuart
        onUpdate: (latest) => {
          if (ref.current) {
            // Re-format with commas if the original had them
            const formatted = Math.round(latest).toLocaleString();
            ref.current.textContent = formatted;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, targetNumber]);

  return (
    <span className="tabular-nums">
      <span ref={ref}>0</span>
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

export function Metrics() {
  return (
    <Section id="metrics" className="relative">
      <div className="absolute inset-0 animate-grid opacity-5 pointer-events-none" />
      
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="max-w-xl">
          <span className="editorial-label">// ANALYTICS_REALTIIME</span>
          <h2 className="text-5xl md:text-7xl font-display font-light text-text-primary mb-6 tracking-tightest">
            Performance <span className="font-bold text-primary italic">Metrics.</span>
          </h2>
        </div>
        <p className="text-text-secondary max-w-sm text-sm font-light leading-relaxed border-l border-primary/20 pl-6">
          Quantifiable impact delivered across international education networks, EdTech scaling, and mission-led growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {METRICS.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1] 
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-surface border border-border-subtle p-8 rounded-2xl hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[40px] rounded-full translate-x-12 -translate-y-12 group-hover:bg-primary/10 transition-all duration-700" />
            
            <div className="relative z-10">
              <div className="text-5xl font-display font-bold text-text-primary mb-4 tracking-tighter">
                <AnimatedCounter value={metric.value} />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary font-bold mb-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                {metric.label}
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                {metric.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function CaseStudies() {
  const otherCaseStudies = CASE_STUDIES.slice(1);
  return (
    <Section id="case-studies" className="border-t border-border-subtle bg-surface/10">
      <div className="mb-24 px-6 md:px-0">
        <span className="editorial-label">// INVENTORY_STRATEGIC</span>
        <h2 className="text-5xl md:text-7xl font-display font-light text-text-primary mb-6 tracking-tightest">
          Growth <span className="font-bold text-primary italic">Intelligence Capsules.</span>
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {otherCaseStudies.map((cs, index) => (
          <CaseStudyCard key={cs.id} cs={cs} index={index + 1} />
        ))}
      </div>
    </Section>
  );
}

export function FeaturedCaseStudy() {
  const cs = CASE_STUDIES[0];
  return (
    <Section id="featured-case" className="border-t border-border-subtle overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <span className="editorial-label">// CASE_STUDY_ALPHA</span>
          <h2 className="text-5xl md:text-7xl font-display font-light text-text-primary mb-12 leading-[0.9] tracking-tightest">
            Scaling <br/> <span className="font-bold italic text-primary">High-Volume</span> <br/> Funnels.
          </h2>
          
          <div className="space-y-12">
            <div className="p-8 bg-surface border border-border-subtle rounded-2xl relative group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
              <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-text-secondary/40 mb-6">Strategic Challenge</h4>
              <p className="text-lg text-text-secondary leading-relaxed font-light italic relative z-10 border-l-2 border-primary/30 pl-8">
                {cs.challenge} Fragmented market architecture required a unified intelligence engine to scale without equity leakage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
               <div className="space-y-4">
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary font-bold">Protocol Executed</h4>
                  <p className="text-xs text-text-secondary leading-relaxed font-light">
                    {cs.action} Deployment of centralized CRM architecture and performance dashboard clusters for UAE and Qatar portfolios.
                  </p>
               </div>
               <div className="space-y-4">
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-text-secondary/40">Expected Outcome</h4>
                  <p className="text-2xl font-display italic font-bold text-text-primary leading-tight">
                    {cs.result}
                  </p>
               </div>
            </div>
            
            <div className="pt-8 flex flex-wrap gap-2">
              {cs.tools.map(tool => (
                <span key={tool} className="text-[9px] font-mono font-bold uppercase tracking-widest text-primary/70 px-3 py-1 bg-primary/5 border border-primary/10 rounded-xs">
                  {tool}
                </span>
              ))}
            </div>
            
            <div className="pt-8">
               <Button href="#case-studies" className="h-14 px-12 group">
                  EXPLORE ARCHIVE <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform" />
               </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square lg:aspect-auto lg:h-[750px] bg-surface/50 backdrop-blur-xl border border-border-subtle p-12 flex flex-col justify-end rounded-3xl group overflow-hidden"
        >
           {/* Animated Background Pulse */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-all duration-1000" />
           <div className="absolute -top-10 -right-10 text-[180px] font-display font-black text-text-primary/[0.03] leading-none select-none pointer-events-none group-hover:text-text-primary/[0.05] transition-all duration-1000">
             001
           </div>
           
           <div className="space-y-12 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-12 h-px bg-primary" />
                <div className="text-primary font-mono text-[10px] tracking-[0.4em] uppercase font-bold">Impact Dashboard</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-8xl md:text-9xl font-display font-light text-text-primary leading-none tracking-tighter">
                  35% <span className="font-bold italic text-primary">+</span>
                </div>
                <div className="text-lg font-mono uppercase tracking-tighter text-text-secondary/60">
                  Uplift in Qualified Pipeline
                </div>
              </div>
              
              <div className="p-6 bg-background/50 border border-border-subtle rounded-2xl max-w-sm backdrop-blur-md">
                <div className="text-[10px] font-mono text-text-secondary/40 uppercase mb-4">Neural Analytics</div>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Integrated demand gen systems combined with cognitive CRM automation reduced lead leakage by 74% and accelerated conversion velocity.
                </p>
              </div>
           </div>
        </motion.div>
      </div>
    </Section>
  );
}

function CaseStudyCard({ cs, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden bg-surface border border-border-subtle p-12 flex flex-col justify-between min-h-[550px] rounded-3xl hover:border-primary/40 transition-all duration-500"
    >
      <div className="absolute top-0 right-0 p-8 text-4xl font-display font-bold text-text-primary/[0.05] group-hover:text-primary transition-colors">
        0{index + 1}
      </div>

      <div className="relative z-10">
        <div className="inline-block px-3 py-1 bg-background border border-border-subtle rounded-full text-[9px] font-mono font-bold text-text-secondary/40 mb-10 uppercase tracking-widest">
           System Log Trace
        </div>
        <h3 className="text-4xl md:text-5xl font-display font-light leading-[0.95] tracking-tightest mb-8 text-text-primary group-hover:text-primary transition-colors">
          {cs.title}
        </h3>
      </div>

      <div className="space-y-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h5 className="text-[9px] font-mono uppercase tracking-[0.4em] mb-4 text-text-secondary/40 font-bold">Vector Scope</h5>
            <p className="text-sm leading-relaxed font-light text-text-secondary italic">{cs.challenge}</p>
          </div>
          <div>
            <h5 className="text-[9px] font-mono uppercase tracking-[0.4em] mb-4 text-text-secondary/40 font-bold">Optimization Output</h5>
            <p className="text-sm leading-relaxed font-bold text-text-primary tracking-tight">{cs.result}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-border-subtle flex flex-wrap gap-2">
          {cs.tools.map(tool => (
            <span key={tool} className="text-[10px] font-mono px-3 py-1 bg-background border border-border-subtle text-text-secondary/60 rounded-sm">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
