import { motion } from "motion/react";
import { Section } from "./UI";
import { Zap, ShieldCheck, BarChart3, Globe, Rocket, BrainCircuit } from "lucide-react";

export function Expertise() {
  const categories = [
    {
      title: "Growth & Demand Generation",
      icon: <Rocket />,
      items: ["Full-funnel demand generation", "Paid acquisition", "Lead nurturing", "MQL/SQL workflows", "Funnel optimization", "CRO", "Multi-touch attribution"]
    },
    {
      title: "CRM & Marketing Tech",
      icon: <Zap />,
      items: ["HubSpot", "Zoho CRM", "Salesforce", "Lead scoring", "Marketing automation", "Workflow design", "Performance dashboards", "AI personalization"]
    },
    {
      title: "Marketing Leadership",
      icon: <ShieldCheck />,
      items: ["Regional marketing strategy", "Team leadership", "Cross-border management", "Budget & ROI ownership", "Sprint-based execution", "OKR culture", "Stakeholder management"]
    },
    {
      title: "Brand & Content",
      icon: <Globe />,
      items: ["Brand positioning", "Multi-brand management", "Storytelling", "Video production", "Social media growth", "Campaign messaging", "Community engagement"]
    },
    {
      title: "Education & EdTech",
      icon: <BarChart3 />,
      items: ["International schools", "Multi-campus groups", "Academic publishing", "Higher education", "Think tanks", "NGOs", "Youth campaigns"]
    },
    {
      title: "AI & Marketing Innovation",
      icon: <BrainCircuit />,
      items: [
        "AI-POWERED CAMPAIGNS",
        "PREDICTIVE LEAD SCORING",
        "SMART CONTENT PERSONALIZATION",
        "MARKETING AUTOMATION WITH AI",
        "CHATBOT & CONVERSATIONAL MARKETING",
        "AI-DRIVEN INSIGHTS & REPORTING",
        "EXPERIMENTATION & A/B TESTING"
      ]
    }
  ];

  return (
    <Section id="expertise" className="bg-navy">
      <div className="mb-24">
        <span className="editorial-label">Core Competency</span>
        <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-6">
          Technical <span className="text-primary font-normal not-italic">Expertise</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {categories.map((cat, i) => (
          <div key={i} className="p-8 bg-navy border border-white/5 flex flex-col justify-between group h-full">
            <div>
              <div className="text-primary mb-12 opacity-50 group-hover:opacity-100 transition-opacity">
                {cat.icon}
              </div>
              <h3 className="text-lg font-serif italic text-white mb-8 pr-4">
                {cat.title}
              </h3>
              <ul className="space-y-4">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-start gap-3">
                    <span className="w-1 h-1 bg-primary/40 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
