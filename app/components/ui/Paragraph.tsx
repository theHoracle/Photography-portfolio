import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const paragraphVariants = cva("max-w-prose  mb-2", {
  variants: {
    variants: {
      default: "text-center",
      topic: "uppercase text-left text-gray-600 ",
    },
    size: {
      default: "text-base sm:text-lg",
      sm: "text-small sm:text-base",
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
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
