import React, { useState } from "react";
import { Section, Button } from "./UI";
import { generateMarketingIntelligence, AIOutcome } from "../services/geminiService";
import { 
  Sparkles, Loader2, Send, Quote, Smartphone, Share2, Copy, 
  Linkedin, Twitter, Check, Target, Mail, Zap, BookOpen, 
  ChevronRight, ArrowUpRight, BarChart3, Activity, BrainCircuit, Lightbulb
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function AIGenerator() {
  const [topic, setTopic] = useState("");
  const [outcome, setOutcome] = useState<AIOutcome | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentModule, setCurrentModule] = useState<'campaign' | 'crm' | 'growth' | 'storytelling'>('campaign');
  const [tone, setTone] = useState("professional");
  const [audience, setAudience] = useState("education stakeholders & decision makers");
  const [currentStep, setCurrentStep] = useState(0);

  const strategicPrompts = [
    "Generate School Admissions Funnel",
    "Create High-Converting CRM Workflow",
    "Build MENA GTM Strategy",
    "Generate EdTech Launch Campaign",
    "Create Demand Generation Plan",
    "AI-Powered Parent Engagement Strategy"
  ];

  const steps = [
    "Initializing Strategic Engine...",
    "Analyzing Regional Market Context...",
    "Engineering Growth Funnel...",
    "Synthesizing CRM Intelligence...",
    "Refining Narrative Precision..."
  ];

  const [copied, setCopied] = useState(false);

  const modules = [
    { id: 'campaign', label: 'Campaign Strategy', icon: <Target size={18} />, desc: 'GTM angles & positioning' },
    { id: 'crm', label: 'CRM & Nurturing', icon: <Mail size={18} />, desc: 'Funnel messaging & workflows' },
    { id: 'growth', label: 'Growth & Performance', icon: <Zap size={18} />, desc: 'Demand gen & experiments' },
    { id: 'storytelling', label: 'Brand Storytelling', icon: <BookOpen size={18} />, desc: 'Executive narratives & vision' },
  ] as const;

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setOutcome(null);
    setError("");
    setCurrentStep(0);

    const interval = setInterval(() => {
      setCurrentStep(prev => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 1500);

    try {
      const data = await generateMarketingIntelligence(topic, currentModule, tone, audience);
      setOutcome(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Strategy generation failed");
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="ai-lab" className="bg-[#050810] border-t border-white/5 py-32 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="editorial-label text-primary/80 tracking-[0.4em]">// INTELLIGENCE ENGINE</span>
            <h2 className="text-6xl md:text-7xl font-serif italic text-white mb-8 mt-4">
              AI Campaign <span className="text-primary not-italic font-normal">Intelligence Studio</span>
            </h2>
            <p className="text-slate-custom/60 max-w-2xl mx-auto italic font-light text-xl leading-relaxed">
              AI-assisted campaign ideation, GTM strategy, CRM messaging, and growth marketing concepts for education, EdTech, and modern brands.
            </p>
          </motion.div>
        </div>

        {/* Dashboard Interface */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl">
          {/* Module Selector (Tabs) */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10">
            {modules.map((m) => (
              <button
                key={m.id}
                onClick={() => setCurrentModule(m.id)}
                className={`flex flex-col items-start p-6 text-left transition-all relative group overflow-hidden ${
                  currentModule === m.id 
                    ? "bg-white/[0.05]" 
                    : "hover:bg-white/[0.03]"
                }`}
              >
                <div className={`p-2 rounded-lg mb-3 transition-colors ${currentModule === m.id ? "bg-primary text-navy" : "bg-white/5 text-white/40 group-hover:text-primary/70"}`}>
                  {m.icon}
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-white mb-1">{m.label}</div>
                <div className="text-[10px] text-white/30 uppercase tracking-tighter leading-none">{m.desc}</div>
                {currentModule === m.id && (
                  <motion.div 
                    layoutId="activeModule"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="p-8 md:p-12">
            <form onSubmit={handleGenerate} className="space-y-12">
              <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-4">
                  <label className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] block ml-1">Campaign Objective / Topic</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      disabled={loading}
                      placeholder="Describe your campaign objective, audience, or growth challenge..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-6 text-white text-xl font-light focus:border-primary focus:bg-white/[0.06] outline-hidden transition-all placeholder:text-white/20 disabled:opacity-50 pr-16"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 right-4">
                      {loading ? (
                        <div className="flex items-center gap-2 text-primary animate-pulse">
                          <BrainCircuit size={20} />
                        </div>
                      ) : (
                        <div className="p-3 bg-white/5 rounded-lg text-white/20">
                          <Activity size={18} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] block ml-1">Intelligence Tone</label>
                    <select 
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white/80 text-sm focus:border-primary outline-hidden transition-all appearance-none cursor-pointer"
                    >
                      <option value="professional" className="bg-[#050810]">Executive & Strategic</option>
                      <option value="disruptive" className="bg-[#050810]">Bold & Disruptive</option>
                      <option value="luxury" className="bg-[#050810]">Premium & Exclusive</option>
                      <option value="technical" className="bg-[#050810]">Data-Driven & Technical</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] block ml-1">Contextual Audience</label>
                    <input
                      type="text"
                      value={audience}
                      onChange={(e) => setAudience(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white/80 text-sm focus:border-primary outline-hidden transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Strategic Prompts */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] ml-1">Strategic Quick Prompts:</span>
                <div className="flex flex-wrap gap-2">
                  {strategicPrompts.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setTopic(p)}
                      className="text-[10px] font-mono px-4 py-2 bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/40 text-white/50 hover:text-primary transition-all rounded-full"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="text-[10px] font-mono text-white/20 uppercase max-w-xs leading-relaxed hidden md:block">
                  Proprietary growth algorithms enabled via Gemini 3 Flash strategic processing.
                </div>
                <Button 
                  type="submit"
                  disabled={loading || !topic.trim()}
                  className={`h-16 !px-12 text-sm tracking-[0.3em] transition-all duration-500 ${loading ? 'opacity-50 cursor-wait' : 'hover:scale-105 shadow-[0_0_30px_rgba(255,204,51,0.15)]'}`}
                  icon={loading ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
                >
                  {loading ? "PROCESSING INTELLIGENCE" : "GENERATE STRATEGY"}
                </Button>
              </div>
            </form>

            <AnimatePresence>
              {loading && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-20 flex flex-col items-center justify-center p-20 border border-dashed border-primary/20 rounded-3xl bg-primary/[0.02]"
                >
                  <div className="relative mb-10">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse rounded-full" />
                    <div className="relative flex items-center justify-center w-24 h-24 border border-primary/30 rounded-full">
                      <BrainCircuit className="text-primary animate-pulse" size={40} />
                    </div>
                  </div>
                  <div className="text-xl font-serif italic text-white mb-4">{steps[currentStep]}</div>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map(i => (
                      <motion.div 
                        key={i}
                        animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.1, 0.8] }}
                        transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                        className={`w-1.5 h-1.5 rounded-full ${i <= currentStep ? 'bg-primary' : 'bg-white/20'}`}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {error && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-12 p-6 bg-red-500/5 border border-red-500/20 text-red-400 text-xs font-mono text-center flex items-center justify-center gap-3"
              >
                <Activity size={14} /> {error}
              </motion.div>
            )}

            <AnimatePresence>
              {outcome && (
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-24 space-y-12"
                >
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
                    <div>
                      <div className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] mb-4">Strategic Framework Produced</div>
                      <h3 className="text-5xl font-serif italic text-white leading-tight">
                        "{outcome.campaignName}"
                      </h3>
                    </div>
                    <button 
                      onClick={() => copyToClipboard(JSON.stringify(outcome, null, 2))}
                      className="flex items-center gap-2 text-[10px] font-mono text-white/40 hover:text-primary transition-all py-3 px-6 border border-white/10 hover:border-primary/40 bg-white/5 active:scale-95"
                    >
                      {copied ? (
                        <>
                          <Check size={14} className="text-green-500" />
                          <span className="text-green-500 underline underline-offset-4">DATA EXPORTED TO CLIPBOARD</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>EXPORT STRATEGY DATA</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-[10px] font-mono text-primary uppercase tracking-widest">
                            <Target size={14} /> Audience Strategy
                          </div>
                          <p className="text-slate-custom/70 text-sm italic font-light leading-relaxed">
                            {outcome.audienceStrategy}
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-[10px] font-mono text-primary uppercase tracking-widest">
                            <Check size={14} /> Positioning Hooks
                          </div>
                          <div className="space-y-3">
                            {outcome.positioningHooks.map((h, i) => (
                              <div key={i} className="p-4 bg-white/[0.03] border border-white/5 rounded-lg text-white/80 text-sm font-light italic">
                                "{h}"
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-[10px] font-mono text-primary uppercase tracking-widest">
                            <Lightbulb size={14} /> Key Messaging Pillars
                          </div>
                          <ul className="space-y-3">
                            {outcome.keyMessaging.map((m, i) => (
                              <li key={i} className="flex gap-4 items-start text-sm text-white/60 leading-relaxed font-light">
                                <div className="mt-1.5 w-1 h-1 bg-primary rounded-full shrink-0" />
                                {m}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-[10px] font-mono text-primary uppercase tracking-widest">
                            <ChevronRight size={14} /> Suggested CTAs
                          </div>
                          <div className="flex flex-col gap-3">
                            {outcome.ctaExamples.map((cta, i) => (
                              <div key={i} className="px-5 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-mono uppercase tracking-widest text-center">
                                {cta}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Insight Panel */}
                    <div className="bg-primary/[0.07] border border-primary/20 rounded-2xl p-8 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 text-primary opacity-20 transition-opacity group-hover:opacity-40">
                        <BarChart3 size={60} />
                      </div>
                      
                      <div className="relative space-y-8">
                        <div className="flex items-center gap-3 text-[10px] font-mono text-primary uppercase tracking-[0.4em] font-bold">
                          <Activity size={16} /> AI Marketing Insight
                        </div>

                        <div className="space-y-6">
                          <div className="space-y-2">
                            <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Distribution Channels</div>
                            <div className="flex flex-wrap gap-2 pt-1">
                              {outcome.channels.map((ch, i) => (
                                <span key={i} className="text-[9px] px-2 py-1 bg-white/5 text-white/60 border border-white/10 font-mono">
                                  {ch}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Audience Behavior</div>
                            <p className="text-xs text-white/70 italic font-light leading-relaxed">
                              {outcome.insights.audienceBehavior}
                            </p>
                          </div>

                          <div className="space-y-1">
                            <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Suggested CRM Workflow</div>
                            <p className="text-xs text-white/70 italic font-light leading-relaxed">
                              {outcome.insights.suggestedWorkflow}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-primary/10 flex items-center justify-between">
                            <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Conversion Potential</div>
                            <div className="text-primary font-bold font-mono text-xs">{outcome.insights.engagementPotential}</div>
                          </div>
                        </div>

                        <div className="pt-2">
                          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-primary/40 w-[85%]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!outcome && !loading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-20 text-center py-24 border border-dashed border-white/5 rounded-3xl"
              >
                <div className="flex flex-col items-center gap-4 text-white/20">
                  <BrainCircuit size={48} strokeWidth={1} />
                  <p className="text-sm font-mono uppercase tracking-[0.4em] italic"> Intelligence Engine Offline </p>
                  <p className="text-xs max-w-xs mx-auto leading-relaxed italic border-t border-white/5 pt-4"> 
                    Describe your campaign objective, audience, or growth challenge to initiate processing.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-mono">
            Built around modern growth systems, CRM intelligence, and AI-assisted marketing strategy.
          </p>
        </div>
      </div>
    </Section>
  );
}
