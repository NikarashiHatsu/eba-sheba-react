import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  children: ReactNode;
  href?: string;
}

const variants = {
  primary:
    "bg-gold text-matte-black hover:bg-gold-light border border-gold",
  ghost:
    "bg-transparent text-ivory border border-ivory/30 hover:border-gold hover:text-gold",
  outline:
    "bg-transparent text-gold border border-gold/50 hover:border-gold hover:bg-gold/10",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
