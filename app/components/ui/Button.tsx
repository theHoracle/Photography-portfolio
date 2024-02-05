import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { Loader2 } from "lucide-react";

export const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center text-sm font-medium transistion-color  focus:outline-none focus:ring-1 focus:ring-dark-400 focus:ring-offset-2 disabled:opacity-50  disabled:pointer-event-none",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100",
        outline:
          "bg-gray-900 hover:bg-slate-900 border border-slate-800 hover:bg-slate-10 ",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
        super:
          "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-2 rounded-md",
        lg: "h-14 px-6 rounded-md",
        xl: "h-16 px-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, size, variant, isLoading, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
