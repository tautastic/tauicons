import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CloudOff: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M22.61 16.95A5 5 0 0018 10h-1.26a8 8 0 00-7.05-6M5 5a8 8 0 004 15h9a5 5 0 001.7-.3"></path>
      <path d="M1 1l22 22"></path>
    </svg>
  );
});

CloudOff.displayName = "CloudOff";

export default CloudOff;
