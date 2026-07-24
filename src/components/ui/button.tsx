import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
        {
          "bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:shadow-lg hover:shadow-accent-primary/25 hover:scale-[1.02] active:scale-[0.98]":
            variant === "primary",
          "bg-secondary text-secondary-foreground hover:bg-secondary/80":
            variant === "secondary",
          "border border-border/50 bg-card hover:bg-accent/50 hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/10":
            variant === "outline",
          "hover:bg-accent/30 text-muted-foreground hover:text-foreground": variant === "ghost",
          "bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary text-white hover:shadow-xl hover:shadow-accent-secondary/25 hover:scale-[1.02] active:scale-[0.98]":
            variant === "gradient",
        },
        {
          "h-8 px-3 text-xs rounded-md": size === "sm",
          "h-10 px-4 py-2 text-sm rounded-lg": size === "md",
          "h-12 px-6 py-3 text-base rounded-xl": size === "lg",
        },
        className,
      )}
      {...props}
    >
      {/* Shimmer effect for gradient buttons */}
      {(variant === "primary" || variant === "gradient") && (
        <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

interface LinkButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  children: ReactNode;
  className?: string;
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  external,
  children,
  className,
}: LinkButtonProps) {
  const isExternal = external || href.startsWith("http");
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 relative overflow-hidden group";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        baseStyles,
        {
          "bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:shadow-lg hover:shadow-accent-primary/25 hover:scale-[1.02] active:scale-[0.98]":
            variant === "primary",
          "bg-secondary text-secondary-foreground hover:bg-secondary/80":
            variant === "secondary",
          "border border-border/50 bg-card hover:bg-accent/50 hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/10":
            variant === "outline",
          "hover:bg-accent/30 text-muted-foreground hover:text-foreground": variant === "ghost",
          "bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary text-white hover:shadow-xl hover:shadow-accent-secondary/25 hover:scale-[1.02] active:scale-[0.98]":
            variant === "gradient",
        },
        {
          "h-8 px-3 text-xs rounded-md": size === "sm",
          "h-10 px-4 py-2 text-sm rounded-lg": size === "md",
          "h-12 px-6 py-3 text-base rounded-xl": size === "lg",
        },
        className,
      )}
    >
      {/* Shimmer effect for gradient buttons */}
      {(variant === "primary" || variant === "gradient") && (
        <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full" />
      )}
      <span className="relative z-10">{children}</span>
    </a>
  );
}
