import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const AlertCircle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <circle cx="12" cy="12" r="10" fill="none"></circle>
      <path d="M12 8v4" stroke="currentColor"></path>
      <path d="M12 16h.01" stroke="currentColor"></path>
    </svg>
  );
});

AlertCircle.displayName = "AlertCircle";

export default AlertCircle;
