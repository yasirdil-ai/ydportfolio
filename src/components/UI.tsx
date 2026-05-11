import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({ id, children, className = "", containerClassName = "" }: SectionProps) {
  return (
    <motion.section 
      id={id} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative py-40 px-6 md:px-12 lg:px-24 overflow-hidden bg-background text-text-primary ${className}`}
    >
      <div className={`max-w-7xl mx-auto ${containerClassName}`}>
        {children}
      </div>
    </motion.section>
  );
}

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  icon?: ReactNode;
  download?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({ children, onClick, href, variant = "primary", className = "", icon, download, type = "button", disabled = false }: ButtonProps) {
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 font-bold transition-all duration-500 active:scale-95 text-[10px] uppercase tracking-[0.3em] disabled:opacity-50 disabled:pointer-events-none rounded-xl group";
  
  const variants = {
    primary: "bg-primary text-background hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)]",
    secondary: "bg-surface border border-border-subtle text-text-primary hover:border-primary/40 hover:text-primary backdrop-blur-md",
    outline: "border border-border-subtle text-text-secondary hover:border-primary/50 hover:text-primary bg-transparent",
    ghost: "text-text-secondary/60 hover:text-primary hover:bg-primary/5",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {icon && <span className="transition-transform duration-500 group-hover:translate-x-1">{icon}</span>}
      </span>
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Shine Effect */}
      <div className="absolute top-0 -left-[100%] w-[120%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[120%] transition-all duration-[800ms] pointer-events-none" />
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        download={download}
        target={href.startsWith('http') || href.endsWith('.pdf') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}
