import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Filter: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"></path>
    </svg>
  );
});

Filter.displayName = "Filter";

export default Filter;
