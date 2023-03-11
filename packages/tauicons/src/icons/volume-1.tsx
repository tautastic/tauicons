import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Volume1: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
      <path d="M15.54 8.46a5 5 0 010 7.07"></path>
    </svg>
  );
});

Volume1.displayName = "Volume1";

export default Volume1;
