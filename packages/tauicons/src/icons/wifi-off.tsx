import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const WifiOff: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M1 1l22 22"></path>
      <path d="M16.72 11.06A10.94 10.94 0 0119 12.55"></path>
      <path d="M5 12.55a10.94 10.94 0 015.17-2.39"></path>
      <path d="M10.71 5.05A16 16 0 0122.58 9"></path>
      <path d="M1.42 9a15.91 15.91 0 014.7-2.88"></path>
      <path d="M8.53 16.11a6 6 0 016.95 0"></path>
      <path d="M12 20h.01"></path>
    </svg>
  );
});

WifiOff.displayName = "WifiOff";

export default WifiOff;
