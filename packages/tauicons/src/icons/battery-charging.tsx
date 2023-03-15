import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const BatteryCharging: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M5 18H3a2 2 0 01-2-2V8a2 2 0 012-2h3.19M15 6h2a2 2 0 012 2v8a2 2 0 01-2 2h-3.19"></path>
      <path d="M23 13v-2"></path>
      <path d="M11 6l-4 6h6l-4 6"></path>
    </svg>
  );
});

BatteryCharging.displayName = "BatteryCharging";

export default BatteryCharging;
