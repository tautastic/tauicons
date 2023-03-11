import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CornerLeftUp: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M14 9L9 4 4 9"></path>
      <path d="M20 20h-7a4 4 0 01-4-4V4"></path>
    </svg>
  );
});

CornerLeftUp.displayName = "CornerLeftUp";

export default CornerLeftUp;
