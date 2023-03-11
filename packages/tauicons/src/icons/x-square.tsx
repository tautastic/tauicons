import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const XSquare: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <path d="M9 9l6 6"></path>
      <path d="M15 9l-6 6"></path>
    </svg>
  );
});

XSquare.displayName = "XSquare";

export default XSquare;
