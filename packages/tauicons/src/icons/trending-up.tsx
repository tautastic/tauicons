import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const TrendingUp: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
      <path d="M17 6h6v6"></path>
    </svg>
  );
});

TrendingUp.displayName = "TrendingUp";

export default TrendingUp;
