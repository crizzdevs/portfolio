import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
}

const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      accent: "bg-accent text-accent-foreground hover:bg-accent/90",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "px-6 py-3 font-medium text-sm rounded-lg modern-shadow",
          "transition-all duration-200 hover:scale-105 hover:shadow-lg",
          "active:scale-95",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PixelButton.displayName = "PixelButton";

export { PixelButton };
