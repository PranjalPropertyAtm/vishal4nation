import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-blood text-white shadow-[0_0_24px_rgba(193,18,31,0.35)] hover:bg-blood/90 hover:shadow-[0_0_32px_rgba(193,18,31,0.55)]",
        outline:
          "border border-white/15 bg-white/5 text-white backdrop-blur-sm hover:border-blood/60 hover:bg-blood/10 hover:shadow-[0_0_20px_rgba(193,18,31,0.25)]",
        ghost: "text-white hover:bg-white/10",
        saffron:
          "bg-saffron text-ink shadow-[0_0_20px_rgba(255,153,51,0.35)] hover:brightness-110",
        whatsapp:
          "bg-[#25D366] text-ink shadow-[0_0_28px_rgba(37,211,102,0.45)] hover:brightness-110",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
