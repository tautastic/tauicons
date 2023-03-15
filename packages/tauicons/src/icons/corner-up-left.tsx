import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CornerUpLeft: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M9 14L4 9l5-5"></path>
      <path d="M20 20v-7a4 4 0 00-4-4H4"></path>
    </svg>
  );
});

CornerUpLeft.displayName = "CornerUpLeft";

export default CornerUpLeft;
