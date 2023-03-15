import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CornerUpRight: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M15 14l5-5-5-5"></path>
      <path d="M4 20v-7a4 4 0 014-4h12"></path>
    </svg>
  );
});

CornerUpRight.displayName = "CornerUpRight";

export default CornerUpRight;
