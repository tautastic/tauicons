import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Monitor: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg
      ref={ref}
      width={iconProps.size}
      height={iconProps.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={iconProps.color}
      strokeWidth={iconProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M8 21h8"></path>
      <path d="M12 17v4"></path>
    </svg>
  );
});

Monitor.displayName = "Monitor";

export default Monitor;
