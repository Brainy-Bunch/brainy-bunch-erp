import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const loaderVariants = cva("border border-2 border-b-transparent border-r-transparent animate-spin rounded-full", {
  variants: {
    variant: {
      default: "border-primary",
    },
    size: {
      default: "size-4",
      sm: "size-8 ",
      lg: "size-10",
      icon: "size-9",
    },
  },
  defaultVariants: {
    size: "default",
  }
});

interface LoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loaderVariants> {}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, variant, size, ...props }) => {
    return (
      <div className={cn(loaderVariants({ variant, size, className }))}></div>
    );
  }
);
export default Loader;
