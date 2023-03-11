import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CornerRightUp: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M10 9l5-5 5 5"></path>
      <path d="M4 20h7a4 4 0 004-4V4"></path>
    </svg>
  );
});

CornerRightUp.displayName = "CornerRightUp";

export default CornerRightUp;
