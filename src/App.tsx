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
import { ExperienceTimeline, Services, TechAndEducation, Contact } from "./components/Contact";
import { Section, Button } from "./components/UI";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import summaryImage from "./assets/images/regenerated_image_1778338448863.png";
import { useState } from "react";
import { ZoomIn, ZoomOut, Maximize2, Loader2 } from "lucide-react";

import { AIGenerator } from "./components/AIGenerator";
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
    <div className="relative selection:bg-primary/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left" 
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Metrics />
        
        {/* About Executive Summary Section */}
        <Section id="summary" className="bg-navy border-t border-white/10" containerClassName="max-w-5xl">
          <span className="editorial-label mb-12">Executive Summary</span>
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-tight mb-12">
                Yasir Dil is a <span className="font-bold underline decoration-primary/20 underline-offset-8">senior marketing leader</span> with 11+ years of building engines for global knowledge brands.
              </h2>
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all">
                  <img 
                    src={summaryImage} 
                    alt="Yasir Dil" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-xl md:text-2xl text-slate-custom/60 font-light leading-relaxed italic">
                  Specializing in Education, EdTech, and mission-led organizations across UK, Italy, UAE, Qatar, Saudi Arabia and Pakistan.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col justify-end h-full">
              <div className="space-y-6 border-l border-white/10 pl-8">
                <div className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">Scope of Work</div>
                <div className="text-sm font-medium text-white/80 leading-relaxed">
                  Demand Generation • CRM Architecture • Revenue Ops • Multi-Market PMO • Brand Positioning
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Expertise />
        <FeaturedCaseStudy />
        <CaseStudies />
        <ExperienceTimeline />
        <Insights />
        <AIGenerator />
        
        {/* CV Embed Section */}
        <Section id="cv" className="bg-navy border-t border-white/10">
          <div className="mb-24 px-6 md:px-0 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <span className="editorial-label">Credentials</span>
              <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-6">
                Curriculum <span className="text-primary font-normal not-italic">Vitae</span>
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Live document reflecting the latest strategic marketing leadership achievements and certifications.
              </p>
            </div>
            
            <div className="flex items-center gap-2 bg-white/5 p-2 border border-white/10 rounded-lg">
              <button 
                onClick={handleZoomOut}
                className="p-2 hover:bg-white/10 text-white transition-colors" 
                title="Zoom Out"
              >
                <ZoomOut size={16} />
              </button>
              <span className="text-[10px] font-mono text-white/50 w-12 text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button 
                onClick={handleZoomIn}
                className="p-2 hover:bg-white/10 text-white transition-colors" 
                title="Zoom In"
              >
                <ZoomIn size={16} />
              </button>
              <div className="w-px h-4 bg-white/10 mx-1" />
              <button 
                onClick={handleResetZoom}
                className="p-2 hover:bg-white/10 text-white transition-colors" 
                title="Reset Zoom"
              >
                <Maximize2 size={16} />
              </button>
            </div>
          </div>
          
          <div className="relative w-full h-[600px] md:h-[800px] bg-white rounded-sm shadow-2xl overflow-auto custom-scrollbar">
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
