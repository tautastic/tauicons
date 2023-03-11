import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CornerDownLeft: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M9 10l-5 5 5 5"></path>
      <path d="M20 4v7a4 4 0 01-4 4H4"></path>
    </svg>
  );
});

CornerDownLeft.displayName = "CornerDownLeft";

export default CornerDownLeft;
