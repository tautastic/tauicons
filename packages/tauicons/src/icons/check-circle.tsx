import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CheckCircle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
      <path d="M22 4L12 14.01l-3-3"></path>
    </svg>
  );
});

CheckCircle.displayName = "CheckCircle";

export default CheckCircle;
