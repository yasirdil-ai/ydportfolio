import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BLOG_POSTS, BlogPost } from "../data";
import { Section, Button } from "./UI";
import { Clock, ArrowRight, X } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-white/5 border border-white/10 overflow-hidden flex flex-col h-full hover:border-primary/30 transition-colors"
    >
      <div className="p-8 flex flex-col h-full">
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map(tag => (
            <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-primary px-2 py-1 bg-primary/10 rounded-sm">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-serif italic text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-slate-custom/60 font-light text-sm italic leading-relaxed mb-8 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/30">
            <Clock size={12} />
            {post.readingTime}
          </div>
          
          <button 
            onClick={onClick}
            className="text-[10px] font-mono uppercase tracking-[0.2em] text-white hover:text-primary transition-colors flex items-center gap-2"
          >
            VIEW MORE <ArrowRight size={10} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function BlogModal({ post, isOpen, onClose }: { post: BlogPost | null; isOpen: boolean; onClose: () => void }) {
  if (!post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/95 backdrop-blur-md"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-navy border border-white/10 max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 md:p-10 border-b border-white/5 flex items-center justify-between sticky top-0 bg-navy z-10">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary">Insight</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">{post.date}</span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-20 custom-scrollbar">
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "headline": post.title,
                  "description": post.excerpt,
                  "datePublished": post.date,
                  "author": {
                    "@type": "Person",
                    "name": "Yasir Dil"
                  }
                })}
              </script>
              <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-10 leading-tight">
                  {post.title}
                </h2>
                
                <div 
                  className="prose prose-invert prose-slate max-w-none 
                    prose-p:text-slate-custom/70 prose-p:font-light prose-p:italic prose-p:leading-relaxed prose-p:text-lg
                    prose-h3:text-white prose-h3:font-serif prose-h3:italic prose-h3:text-2xl prose-h3:mt-12
                    prose-strong:text-white prose-strong:font-bold prose-headings:text-white"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-8 md:p-12 bg-white/5 border-t border-white/5 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <p className="text-white/60 text-sm italic font-light">
                  Ready to optimize your marketing engine?
                </p>
                <Button 
                  href="#contact" 
                  onClick={onClose}
                  className="px-10"
                >
                  LET'S CONNECT
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function Insights() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closePost = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <Section id="insights" className="bg-navy border-t border-white/10">
      <div className="mb-20">
        <span className="editorial-label">Thought Leadership</span>
        <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-8">
          Insights, Growth & <br />
          <span className="text-primary not-italic font-normal">Marketing Strategy</span>
        </h2>
        <p className="text-slate-custom/60 max-w-2xl italic font-light text-lg">
          Thoughts on growth marketing, CRM systems, education strategy, and building modern marketing teams across MENA and global education sectors.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <BlogCard post={post} onClick={() => openPost(post)} />
          </motion.div>
        ))}
      </div>

      <BlogModal 
        post={selectedPost} 
        isOpen={isModalOpen} 
        onClose={closePost} 
      />
    </Section>
  );
}
