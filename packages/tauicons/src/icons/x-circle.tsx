import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const XCircle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M15 9l-6 6" stroke="currentColor"></path>
      <path d="M9 9l6 6" stroke="currentColor"></path>
    </svg>
  );
});

XCircle.displayName = "XCircle";

export default XCircle;
