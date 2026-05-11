import { motion } from "motion/react";
import { Section } from "./UI";
import { Cpu, BarChart3, Database, Workflow, Brain, Sparkles, Activity, ShieldCheck, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export function AIStudio() {
  const [activeTab, setActiveTab] = useState("analysis");
  const [loading, setLoading] = useState(false);

  const simulateProcess = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  useEffect(() => {
    simulateProcess();
  }, [activeTab]);

  const features = [
    { id: "analysis", label: "Predictive Analysis", icon: Brain },
    { id: "automation", label: "Workflow Logic", icon: Workflow },
    { id: "intelligence", label: "Growth Intelligence", icon: BarChart3 },
    { id: "security", label: "System Security", icon: ShieldCheck },
  ];

  return (
    <Section id="ai-studio" className="relative border-t border-border-subtle bg-surface/30 dark:bg-transparent overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono font-bold tracking-widest rounded-full mb-6">
          <Sparkles size={12} />
          SYSTEM CORE VERSION 1.1
        </div>
        <h2 className="text-5xl md:text-7xl font-display font-light text-text-primary mb-8 tracking-tightest">
          AI Campaign <span className="font-bold text-primary italic">Studio.</span>
        </h2>
        <p className="text-text-secondary max-w-2xl font-light text-lg italic">
          A premium strategic command center designed to optimize growth engines through predictive modeling, CRM intelligence, and automated demand generation.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-2">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl border transition-all duration-300 text-left group ${
                activeTab === feature.id
                  ? "bg-primary text-background border-primary shadow-lg shadow-primary/20"
                  : "bg-surface/50 border-border-subtle text-text-secondary hover:border-primary/30 hover:bg-surface"
              }`}
            >
              <feature.icon size={18} className={activeTab === feature.id ? "" : "group-hover:text-primary transition-colors"} />
              <span className="text-xs font-bold uppercase tracking-widest">{feature.label}</span>
            </button>
          ))}

          <div className="mt-12 p-6 bg-surface/50 border border-border-subtle rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="text-primary animate-pulse" size={16} />
              <span className="text-[10px] font-mono font-bold text-text-primary uppercase tracking-widest">Global Pulse</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-mono font-bold">
                <span className="text-text-secondary/60 uppercase tracking-widest">Latent Processing</span>
                <span className="text-primary">99.8%</span>
              </div>
              <div className="h-1.5 w-full bg-border-subtle rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: "99.8%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="lg:col-span-9">
          <div className="bg-surface/80 backdrop-blur-xl border border-border-subtle rounded-3xl p-8 md:p-12 min-h-[500px] relative overflow-hidden">
            {/* Visual Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div>
                <div className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.3em] mb-2">{activeTab} system activated</div>
                <h3 className="text-3xl font-display font-bold text-text-primary capitalize">
                  {activeTab === 'analysis' ? 'Predictive Funnel Modeling' : 
                   activeTab === 'automation' ? 'Cognitive CRM Workflows' :
                   activeTab === 'intelligence' ? 'Growth Data Intelligence' :
                   'Adaptive Protocol Security'}
                </h3>
              </div>
              <div className="px-4 py-2 bg-background border border-border-subtle rounded-lg flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-mono font-bold text-text-secondary uppercase">Operational</span>
              </div>
            </div>

            {/* Simulated Dashboard Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { label: "Growth Efficiency", val: "+24.5%", color: "text-emerald-500" },
                { label: "Lead Precision", val: "94.2%", color: "text-primary" },
                { label: "Cost Optimization", val: "-18.4%", color: "text-secondary" }
              ].map((stat, i) => (
                <div key={i} className="bg-background/50 border border-border-subtle p-6 rounded-2xl hover:border-primary/20 transition-colors">
                  <div className="text-[9px] font-mono font-bold text-text-secondary/60 uppercase tracking-widest mb-2">{stat.label}</div>
                  <div className={`text-2xl font-display font-bold ${stat.color}`}>{stat.val}</div>
                </div>
              ))}
            </div>

            {/* Content Display */}
            <div className="relative border border-border-subtle rounded-2xl bg-background/30 p-8 overflow-hidden min-h-[240px] flex flex-col justify-center">
              {loading ? (
                <div className="flex flex-col items-center gap-4">
                  <Cpu className="animate-spin text-primary" size={40} />
                  <span className="text-[10px] font-mono font-bold text-text-secondary uppercase animate-pulse">Initializing Neural Nodes...</span>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid md:grid-cols-2 gap-12"
                >
                  <div className="space-y-6">
                    <p className="text-text-secondary leading-relaxed font-light italic">
                      My strategic implementation centers on high-precision {activeTab} that connects cross-channel data to revenue outcomes.
                    </p>
                    <ul className="space-y-4">
                      {['Cross-market optimization', 'Channel efficiency mapping', 'LTV trajectory modeling'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Zap size={10} className="text-primary" />
                          <span className="text-xs font-bold text-text-primary uppercase tracking-widest">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative bg-surface p-6 rounded-xl border border-border-subtle shadow-sm flex flex-col justify-center">
                    <div className="flex justify-between items-end mb-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-[8px] font-mono text-text-secondary uppercase">Projected ROI</span>
                        <span className="text-3xl font-display font-bold text-text-primary">14.2x</span>
                      </div>
                      <div className="w-24 h-12 flex items-center justify-center">
                        <svg className="w-full h-full text-primary" viewBox="0 0 100 40">
                          <path d="M0,40 Q25,35 50,15 T100,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M0,40 Q25,35 50,15 T100,5 L100,40 L0,40 Z" fill="currentColor" fillOpacity="0.1" />
                        </svg>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-primary/10 text-primary hover:bg-primary hover:text-background transition-all rounded-lg text-[9px] font-mono font-bold uppercase tracking-widest">
                      Export Growth Map
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Decorative Scanline */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div 
                  className="w-full h-[1px] bg-primary/20 shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" 
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ position: 'absolute' }}
                />
              </div>
            </div>

            {/* Bottom Credits */}
            <div className="mt-12 pt-8 border-t border-border-subtle flex justify-between items-center text-[8px] font-mono font-bold text-text-secondary/40 uppercase tracking-widest">
              <span>Yasir Dil Strategic Ops</span>
              <div className="flex gap-4">
                <span>MENA // 004</span>
                <span>SYSTEM // SECURE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
