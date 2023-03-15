import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const TrendingDown: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M23 18l-9.5-9.5-5 5L1 6"></path>
      <path d="M17 18h6v-6"></path>
    </svg>
  );
});

TrendingDown.displayName = "TrendingDown";

export default TrendingDown;
