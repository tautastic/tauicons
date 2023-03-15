import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Wifi: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M5 12.55a11 11 0 0114.08 0"></path>
      <path d="M1.42 9a16 16 0 0121.16 0"></path>
      <path d="M8.53 16.11a6 6 0 016.95 0"></path>
      <path d="M12 20h.01"></path>
    </svg>
  );
});

Wifi.displayName = "Wifi";

export default Wifi;
