import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CloudSnow: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25"></path>
      <path d="M8 16h.01"></path>
      <path d="M8 20h.01"></path>
      <path d="M12 18h.01"></path>
      <path d="M12 22h.01"></path>
      <path d="M16 16h.01"></path>
      <path d="M16 20h.01"></path>
    </svg>
  );
});

CloudSnow.displayName = "CloudSnow";

export default CloudSnow;
