import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ArrowUpLeft: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M17 17L7 7"></path>
      <path d="M7 17V7h10"></path>
    </svg>
  );
});

ArrowUpLeft.displayName = "ArrowUpLeft";

export default ArrowUpLeft;
