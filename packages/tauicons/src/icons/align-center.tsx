import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const AlignCenter: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M18 10H6"></path>
      <path d="M21 6H3"></path>
      <path d="M21 14H3"></path>
      <path d="M18 18H6"></path>
    </svg>
  );
});

AlignCenter.displayName = "AlignCenter";

export default AlignCenter;
