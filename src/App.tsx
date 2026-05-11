/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero } from "./components/Navigation";
import { Metrics, CaseStudies, FeaturedCaseStudy } from "./components/Achievements";
import { Expertise } from "./components/Expertise";
import { AIStudio } from "./components/AIStudio";
import { ExperienceTimeline, Services, TechAndEducation, Contact } from "./components/Contact";
import { Section, Button } from "./components/UI";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import summaryImage from "./assets/images/regenerated_image_1778338448863.png";
import { useState } from "react";
import { ZoomIn, ZoomOut, Maximize2, Loader2, Info } from "lucide-react";

import { Insights } from "./components/Insights";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [zoom, setZoom] = useState(1);
  const [cvLoading, setCvLoading] = useState(true);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.5));
  const handleResetZoom = () => setZoom(1);

  return (
    <div className="relative selection:bg-primary selection:text-background">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[100] origin-left shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" 
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Metrics />
        
        {/* About Executive Summary Section */}
        <Section id="summary" className="border-t border-border-subtle overflow-hidden" containerClassName="max-w-5xl relative">
          {/* Decorative Grid Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 animate-grid pointer-events-none" />

          <span className="editorial-label mb-12">// STRATEGIC POSITIONING</span>
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <h2 className="text-4xl md:text-6xl font-display font-light text-text-primary leading-tight mb-12 tracking-tight">
                Senior marketing leader with <span className="font-bold underline decoration-primary/20 underline-offset-[12px] decoration-4">11+ years</span> of building growth engines for global knowledge brands.
              </h2>
              <div className="flex flex-col sm:flex-row gap-10 items-start">
                <div className="flex-shrink-0 w-28 h-28 rounded-2xl overflow-hidden border border-border-subtle p-1 hover:border-primary/30 transition-all duration-500 group">
                  <div className="w-full h-full rounded-xl overflow-hidden grayscale dark:grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                      src={summaryImage} 
                      alt="Yasir Dil Profile Photo" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light italic border-l-2 border-primary/20 pl-8">
                  Architecting <span className="text-text-primary font-medium">high-performance ecosystems</span> across UK, Italy, UAE, Qatar, KSA and Pakistan.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 self-stretch">
              <div className="h-full flex flex-col justify-between py-2 space-y-12">
                <div className="space-y-6 border-l border-border-subtle pl-8">
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary font-bold">Deployment Scope</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-text-primary/80 leading-loose">
                    Demand Generation<br/>
                    CRM Architecture<br/>
                    Revenue Ops<br/>
                    Multi-Market PMO<br/>
                    Brand Positioning
                  </div>
                </div>
                
                <div className="flex items-center gap-3 px-4 py-3 bg-surface border border-border-subtle rounded-xl">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Info size={16} />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono uppercase tracking-widest text-text-secondary">Current Location</div>
                    <div className="text-xs font-display font-bold text-text-primary">Dubai, UAE (UTC+4)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <AIStudio />
        <Expertise />
        <FeaturedCaseStudy />
        <CaseStudies />
        <ExperienceTimeline />
        <Insights />
        
        {/* CV Embed Section */}
        <Section id="cv" className="border-t border-border-subtle">
          <div className="mb-24 px-6 md:px-0 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <span className="editorial-label">Credentials</span>
              <h2 className="text-5xl md:text-6xl font-serif italic text-text-primary mb-6">
                Curriculum <span className="text-primary font-normal not-italic">Vitae</span>
              </h2>
              <p className="text-text-secondary text-sm font-light leading-relaxed">
                Live document reflecting the latest strategic marketing leadership achievements and certifications.
              </p>
            </div>
            
            <div className="flex items-center gap-2 bg-surface p-2 border border-border-subtle rounded-lg">
              <button 
                onClick={handleZoomOut}
                className="p-2 hover:bg-text-secondary/10 text-text-primary transition-colors" 
                title="Zoom Out"
              >
                <ZoomOut size={16} />
              </button>
              <span className="text-[10px] font-mono text-text-secondary w-12 text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button 
                onClick={handleZoomIn}
                className="p-2 hover:bg-text-secondary/10 text-text-primary transition-colors" 
                title="Zoom In"
              >
                <ZoomIn size={16} />
              </button>
              <div className="w-px h-4 bg-border-subtle mx-1" />
              <button 
                onClick={handleResetZoom}
                className="p-2 hover:bg-text-secondary/10 text-text-primary transition-colors" 
                title="Reset Zoom"
              >
                <Maximize2 size={16} />
              </button>
            </div>
          </div>
          
          <div className="relative w-full h-[600px] md:h-[800px] bg-white rounded-sm shadow-2xl overflow-auto custom-scrollbar border border-border-subtle">
            <AnimatePresence>
              {cvLoading && (
                <motion.div 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center"
                >
                  <div className="w-full max-w-2xl px-12 space-y-8 animate-pulse">
                    <div className="h-8 bg-slate-100 w-1/3 rounded-sm" />
                    <div className="space-y-4">
                      <div className="h-4 bg-slate-50 w-full rounded-sm" />
                      <div className="h-4 bg-slate-50 w-full rounded-sm" />
                      <div className="h-4 bg-slate-50 w-3/4 rounded-sm" />
                    </div>
                    <div className="pt-12 space-y-6">
                      <div className="h-24 bg-slate-200/50 w-full rounded-sm" />
                      <div className="h-4 bg-slate-50 w-full rounded-sm" />
                      <div className="h-4 bg-slate-50 w-5/6 rounded-sm" />
                    </div>
                    <div className="flex justify-center pt-12">
                      <Loader2 className="animate-spin text-primary/40" size={24} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div 
              style={{ 
                transform: `scale(${zoom})`, 
                transformOrigin: 'top center',
                height: zoom > 1 ? 'auto' : '100%',
                minHeight: '100%'
              }}
              className={`transition-transform duration-300 ease-out ${cvLoading ? 'opacity-0' : 'opacity-100'}`}
            >
              <iframe 
                src="https://docs.google.com/document/d/e/2PACX-1vR9BFSuk1DU1-LkvS2tcls-R0fZxHh0BTElJNgSApgoXoz5GfYjIxnQxK3I_yYyNA/pub?embedded=true" 
                className="w-full h-[1200px] border-0"
                title="Yasir Dil CV"
                onLoad={() => setCvLoading(false)}
              />
            </div>
          </div>
          
          <div className="mt-12 flex justify-center gap-4">
             <Button variant="outline" href="https://docs.google.com/document/d/e/2PACX-1vR9BFSuk1DU1-LkvS2tcls-R0fZxHh0BTElJNgSApgoXoz5GfYjIxnQxK3I_yYyNA/pub" className="h-14">
                Open in Full Window
             </Button>
          </div>
        </Section>

        <Services />
        <TechAndEducation />
        <Contact />
      </main>
    </div>
  );
}
