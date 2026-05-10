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
    <Section id="metrics">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="max-w-xl">
          <span className="editorial-label">Performance Core</span>
          <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-6">
            Growth <span className="text-primary font-normal not-italic">Metrics</span>
          </h2>
        </div>
        <p className="text-slate-400 max-w-sm text-sm font-light leading-relaxed">
          Quantifiable impact delivered for international education brands, FMCG campaigns, and EdTech startups.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {METRICS.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.08,
              ease: [0.21, 0.47, 0.32, 0.98] 
            }}
            viewport={{ once: true, margin: "-20px" }}
            className="p-8 bg-white/5 border-l-2 border-primary flex flex-col justify-center min-h-[180px] hover:bg-white/10 transition-colors duration-500"
          >
            <div className="text-4xl font-serif italic text-white mb-2">
              <AnimatedCounter value={metric.value} />
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary font-bold mb-4">
              {metric.label}
            </div>
            <p className="text-xs text-white/40 leading-relaxed font-light">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function CaseStudies() {
  const otherCaseStudies = CASE_STUDIES.slice(1);
  return (
    <Section id="case-studies" className="bg-navy border-t border-white/10">
      <div className="mb-24">
        <span className="editorial-label">Selected Achievements</span>
        <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-6">
          More <span className="text-primary font-normal not-italic">Case Studies</span>
        </h2>
      </div>

      <div className="grid gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden lg:grid-cols-2">
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
    <Section id="featured-case" className="bg-navy border-t border-white/10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <span className="editorial-label">In-Depth Case Study</span>
          <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-10 leading-tight">
            Scaling <span className="text-primary not-italic font-normal">Regional Growth</span> Across 11 Schools.
          </h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 mb-4">The Challenge</h4>
              <p className="text-xl text-slate-custom/60 font-light leading-relaxed italic">
                {cs.challenge} Fragmentation across multiple markets required a unified engine that could scale without losing brand equity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 border-t border-white/5 pt-12">
               <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-4">Strategic Action</h4>
                  <p className="text-sm text-slate-custom/80 leading-relaxed font-light">
                    {cs.action} I implemented a centralized CRM architecture and performance dashboard system to provide real-time visibility across the UAE and Qatar portfolios.
                  </p>
               </div>
               <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 mb-4">The Result</h4>
                  <p className="text-2xl font-serif italic text-white leading-tight">
                    {cs.result}
                  </p>
               </div>
            </div>
            <div className="pt-8 flex flex-wrap gap-3">
              {cs.tools.map(tool => (
                <span key={tool} className="text-[10px] font-mono uppercase tracking-widest text-white/20 px-3 py-1 border border-white/5">
                  {tool}
                </span>
              ))}
            </div>
            <div className="pt-8">
               <Button href="#case-studies" variant="outline" className="px-10 h-14" icon={<ArrowRight size={14} />}>
                  View More Achievements
               </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square lg:aspect-auto lg:h-[700px] bg-white/5 border border-white/10 p-12 flex flex-col justify-end"
        >
           <div className="absolute top-0 right-0 p-12 text-[12vw] font-serif italic text-white/[0.02] leading-none select-none pointer-events-none">
             Growth
           </div>
           
           <div className="space-y-10 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-12 h-1 bg-primary" />
                <div className="text-primary font-mono text-[10px] tracking-widest uppercase">Key Metric</div>
              </div>
              <div className="text-7xl md:text-9xl font-serif italic text-white leading-none">
                35% <span className="text-2xl not-italic font-mono uppercase tracking-tighter text-white/40 block mt-4">Uplift in Qualified Leads</span>
              </div>
              <div className="text-white/40 max-w-sm text-sm font-light leading-relaxed">
                Integrated demand generation combined with workflow automation reduced leakage and increased conversion velocity.
              </div>
           </div>
        </motion.div>
      </div>
    </Section>
  );
}

function CaseStudyCard({ cs, index }: CaseStudyCardProps) {
  // Use solid color for the first one like the design sample
  const isFeatured = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`p-12 flex flex-col justify-between min-h-[500px] ${isFeatured ? 'bg-primary text-navy' : 'bg-navy text-slate-Custom border border-white/5'}`}
    >
      <div>
        <h4 className={`text-[10px] font-mono uppercase tracking-[0.3em] mb-10 pb-2 border-b ${isFeatured ? 'border-navy/20' : 'border-white/10 text-white/40'}`}>
          {isFeatured ? 'Featured Achievement' : `Project 0${index + 1}`}
        </h4>
        <h3 className={`text-3xl md:text-4xl font-serif italic leading-tight mb-8 ${isFeatured ? 'font-bold' : 'text-white'}`}>
          {cs.title}
        </h3>
      </div>

      <div className="space-y-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className={`text-[9px] font-mono uppercase tracking-widest mb-3 ${isFeatured ? 'opacity-60' : 'text-white/20'}`}>Challenge</h5>
            <p className={`text-sm leading-relaxed ${isFeatured ? 'font-medium' : 'font-light text-slate-400'}`}>{cs.challenge}</p>
          </div>
          <div>
            <h5 className={`text-[9px] font-mono uppercase tracking-widest mb-3 ${isFeatured ? 'opacity-60' : 'text-white/20'}`}>Result</h5>
            <p className={`text-sm leading-relaxed ${isFeatured ? 'font-bold' : 'font-medium text-white'}`}>{cs.result}</p>
          </div>
        </div>

        <div className={`pt-6 border-t ${isFeatured ? 'border-navy/20' : 'border-white/10'}`}>
          <div className="flex flex-wrap gap-2">
            {cs.tools.map(tool => (
              <span key={tool} className={`text-[9px] font-mono px-2 py-1 ${isFeatured ? 'bg-navy/10' : 'bg-white/5 text-white/40'}`}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
