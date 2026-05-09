import React, { useState } from "react";
import { Section, Button } from "./UI";
import { generateMarketingCopy } from "../services/geminiService";
import { Sparkles, Loader2, Send, Quote, Smartphone, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function AIGenerator() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [type, setType] = useState<'slogan' | 'ad' | 'social'>('slogan');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setError("");
    try {
      const data = await generateMarketingCopy(topic, type);
      setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate content");
    } finally {
      setLoading(false);
    }
  };

  const types = [
    { id: 'slogan', label: 'Slogans', icon: <Quote size={16} /> },
    { id: 'ad', label: 'Ad Copy', icon: <Smartphone size={16} /> },
    { id: 'social', label: 'Social Media', icon: <Share2 size={16} /> },
  ] as const;

  return (
    <Section id="ai-lab" className="bg-navy-light/30 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="editorial-label">Innovation Hub</span>
          <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-6">
            AI-Powered <span className="text-primary not-italic font-normal">Content Generation</span>
          </h2>
          <p className="text-slate-custom/60 max-w-2xl mx-auto italic font-light text-lg">
            Experience the future of marketing automation. Input your campaign topic and let our AI engine draft your high-performance copy.
          </p>
        </div>

        <div className="bg-navy p-8 md:p-12 border border-white/10 rounded-2xl shadow-2xl">
          <form onSubmit={handleGenerate} className="space-y-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {types.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setType(t.id)}
                  className={`flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold border transition-all ${
                    type === t.id 
                      ? "bg-primary border-primary text-navy" 
                      : "border-white/10 text-white/60 hover:border-white/30"
                  }`}
                >
                  {t.icon}
                  {t.label}
                </button>
              ))}
            </div>

            <div className="relative group">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter a campaign topic (e.g., Luxury EdTech in Dubai, MBA Open Day 2026)"
                className="w-full bg-navy-light border-b border-white/10 p-6 text-white text-xl font-light focus:border-primary focus:bg-white/5 outline-hidden transition-all placeholder:text-white/20"
              />
              <div className="absolute top-1/2 -translate-y-1/2 right-4">
                <Button 
                  onClick={() => {}} // Form submit handles it
                  className="h-12 !px-6"
                  icon={loading ? <Loader2 className="animate-spin" size={16} /> : <Sparkles size={16} />}
                >
                  {loading ? "Thinking..." : "Generate"}
                </Button>
              </div>
            </div>
          </form>

          {error && (
            <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <AnimatePresence>
            {results.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-16 grid gap-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Generation Results</span>
                  <button 
                    onClick={() => setResults([])}
                    className="text-[10px] font-mono text-white/40 hover:text-white uppercase"
                  >
                    Clear All
                  </button>
                </div>
                {results.map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative p-8 bg-white/5 border-l-2 border-primary/40 hover:border-primary transition-colors"
                  >
                    <p className="text-white/90 text-xl font-serif italic leading-relaxed">
                      "{result}"
                    </p>
                    <button 
                      onClick={() => navigator.clipboard.writeText(result)}
                      className="absolute top-4 right-4 text-white/20 hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Send size={14} />
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-mono">
            Powered by Google Gemini 3 Flash • Built for Innovation
          </p>
        </div>
      </div>
    </Section>
  );
}
