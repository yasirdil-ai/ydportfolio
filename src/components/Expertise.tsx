import { motion } from "motion/react";
import { Section } from "./UI";
import { Zap, ShieldCheck, BarChart3, Globe, Rocket, BrainCircuit } from "lucide-react";

export function Expertise() {
  const categories = [
    {
      title: "Growth & Demand Gen",
      icon: <Rocket size={20} />,
      items: ["Full-funnel demand generation", "Paid acquisition", "Lead nurturing", "MQL/SQL workflows", "Funnel optimization", "CRO", "Multi-touch attribution"],
      glow: "hover:shadow-primary/5"
    },
    {
      title: "CRM & MarTech Systems",
      icon: <Zap size={20} />,
      items: ["HubSpot architecture", "Zoho & Salesforce", "Lead scoring systems", "Marketing automation", "Workflow logic design", "Performance dashboards", "AI personalization"],
      glow: "hover:shadow-secondary/5"
    },
    {
      title: "Strategic Leadership",
      icon: <ShieldCheck size={20} />,
      items: ["Regional marketing strategy", "Team leadership", "Cross-border PMO", "Budget & ROI ownership", "Sprint-based execution", "OKR culture", "Stakeholder management"],
      glow: "hover:shadow-primary/5"
    },
    {
      title: "Brand & Positioning",
      icon: <Globe size={20} />,
      items: ["Brand architecture", "Multi-brand systems", "Strategic storytelling", "Asset production", "Social media growth", "Campaign messaging", "Community engagement"],
      glow: "hover:shadow-secondary/5"
    },
    {
      title: "Education Verticals",
      icon: <BarChart3 size={20} />,
      items: ["International schools", "Multi-campus groups", "Academic publishing", "Higher education", "Think tanks", "NGO growth", "Youth campaigns"],
      glow: "hover:shadow-primary/5"
    },
    {
      title: "Neural Innovation",
      icon: <BrainCircuit size={20} />,
      items: [
        "AI-POWERED CAMPAIGNS",
        "PREDICTIVE LEAD SCORING",
        "SMART CONTENT PERSONALIZATION",
        "CRM AUTOMATION WITH AI",
        "CHATBOT ARCHITECTURE",
        "AI-DRIVEN INSIGHTS",
        "RAPID EXPERIMENTATION"
      ],
      glow: "hover:shadow-primary/10 border-primary/20",
      featured: true
    }
  ];

  return (
    <Section id="expertise" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full animate-grid opacity-5 pointer-events-none" />
      
      <div className="mb-24 flex justify-between items-end">
        <div className="max-w-xl">
          <span className="editorial-label">// SYSTEM_CAPABILITIES</span>
          <h2 className="text-5xl md:text-7xl font-display font-light text-text-primary tracking-tightest">
            Strategic <span className="font-bold text-primary italic">Architecture.</span>
          </h2>
        </div>
        <div className="hidden md:block text-[8px] font-mono text-text-secondary/30 uppercase tracking-[0.5em] vertical-text">
          YDNK_PORTFOLIO_V1.1
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`group relative p-10 bg-surface border border-border-subtle rounded-3xl transition-all duration-500 overflow-hidden ${cat.glow} ${cat.featured ? 'border-primary/20 lg:col-span-1 shadow-lg' : ''}`}
          >
            {cat.featured && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full -translate-y-12 translate-x-12" />
            )}
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div className={`p-3 rounded-xl ${cat.featured ? 'bg-primary text-background' : 'bg-primary/10 text-primary'} transition-transform duration-500 group-hover:scale-110`}>
                  {cat.icon}
                </div>
                <div className="text-[10px] font-mono text-text-secondary/20 font-bold group-hover:text-primary transition-colors">
                  SEC_0{i + 1}
                </div>
              </div>
              
              <h3 className={`text-xl font-display font-bold text-text-primary mb-8 ${cat.featured ? 'text-primary' : ''}`}>
                {cat.title}
              </h3>
              
              <ul className="space-y-4">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-[10px] uppercase tracking-[0.1em] text-text-secondary/70 font-bold flex items-start gap-3 group-hover:text-text-primary transition-colors">
                    <span className={`w-1 h-1 mt-1.5 flex-shrink-0 rounded-full ${cat.featured ? 'bg-primary animate-pulse' : 'bg-primary/40'}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Animated Bottom Light */}
            <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-linear-to-r from-transparent via-primary/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
