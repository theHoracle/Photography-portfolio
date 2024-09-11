import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva(" uppercase font-medium", {
  variants: {
    size: {
      sm: "text-2xl md:text-3xl",
      default: "text-3xl md:text-4xl",
      lg: "text-5xl md:text-6xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(headingVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  },
);
Heading.displayName = "heading";
export default Heading;
