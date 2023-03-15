import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Mic: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"></path>
      <path d="M19 10v2a7 7 0 01-14 0v-2"></path>
      <path d="M12 19v4"></path>
      <path d="M8 23h8"></path>
    </svg>
  );
});

Mic.displayName = "Mic";

export default Mic;
