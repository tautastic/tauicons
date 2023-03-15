import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ArrowDownLeft: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M17 7L7 17"></path>
      <path d="M17 17H7V7"></path>
    </svg>
  );
});

ArrowDownLeft.displayName = "ArrowDownLeft";

export default ArrowDownLeft;
