import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface PixelCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "game" | "quest";
  image?: string; // still allowed but no auto-render
}

const PixelCard = forwardRef<HTMLDivElement, PixelCardProps>(
  ({ className, variant = "default", children, image, ...props }, ref) => {
    const variants = {
      default: "bg-card text-card-foreground",
      game: "bg-muted text-foreground",
      quest: "bg-primary/10 border-primary text-foreground",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "p-6 rounded-xl modern-shadow border border-border",
          variants[variant],
          className
        )}
        {...props}
      >
        {/* ❌ Removed automatic image */}
        {/* Now YOU will manually position the image inside children */}

        {children}
      </div>
    );
  }
);

PixelCard.displayName = "PixelCard";

export { PixelCard };
