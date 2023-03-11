import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Function: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg
      ref={ref}
      width={iconProps.size}
      height={iconProps.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={iconProps.color}
      strokeWidth={iconProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M8 10.854h3.798M8 21c2.578 0 3.798-1.494 3.798-4.19v-5.956m0 0h3.75m-3.75 0V7.476c0-2.906 1.379-4.898 4.202-4.4"></path>
    </svg>
  );
});

Function.displayName = "Function";

export default Function;
