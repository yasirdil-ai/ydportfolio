import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  dark?: boolean;
}

export function Section({ id, children, className = "", containerClassName = "", dark = true }: SectionProps) {
  return (
    <motion.section 
      id={id} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative py-40 px-6 md:px-12 lg:px-24 overflow-hidden ${dark ? 'bg-navy' : 'bg-navy-light'} ${className}`}
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
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-4 font-bold transition-all duration-300 active:scale-95 text-xs uppercase tracking-widest disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100";
  
  const variants = {
    primary: "bg-primary text-navy hover:brightness-110",
    secondary: "bg-white text-navy hover:bg-white/90",
    outline: "border border-white/20 text-white hover:bg-white/5",
    ghost: "text-white/70 hover:text-white hover:bg-white/5",
  };

  const content = (
    <>
      {children}
      {icon && <span className="text-current">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        download={download}
        target={href.startsWith('http') ? '_blank' : undefined}
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
