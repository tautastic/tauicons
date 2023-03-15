import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const MicOff: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M1 1l22 22"></path>
      <path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6"></path>
      <path d="M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23"></path>
      <path d="M12 19v4"></path>
      <path d="M8 23h8"></path>
    </svg>
  );
});

MicOff.displayName = "MicOff";

export default MicOff;
