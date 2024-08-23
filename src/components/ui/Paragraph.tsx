import { cn } from "@/app/lib/utils";
import { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const paragraphVariants = cva("max-w-full", {
  variants: {
    variants: {
      default: "text-center",
      topic: "uppercase text-left text-muted-foreground",
    },
    size: {
      default: "text-sm",
      sm: "text-xs md:text-sm",
      lg: "text-base md:text-lg",
      xl: "text-lg md:text-xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, variants, size, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ variants, size, className }))}
      >
        {children}
      </p>
    );
  },
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
