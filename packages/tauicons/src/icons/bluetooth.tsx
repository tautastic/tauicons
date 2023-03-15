import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Bluetooth: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11"></path>
    </svg>
  );
});

Bluetooth.displayName = "Bluetooth";

export default Bluetooth;
