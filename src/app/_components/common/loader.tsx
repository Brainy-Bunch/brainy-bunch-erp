import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const loaderVariants = cva("", {
  variants: {
    size: {
      default: "size-9",
      sm: "size-8 ",
      lg: "size-10",
      icon: "size-9",
    },
  },
});

interface LoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loaderVariants> {}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, ...props }) => {
    return <div></div>;
  }
);
export default Loader;
