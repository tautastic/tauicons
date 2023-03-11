import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const X: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M18 6L6 18"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  );
});

X.displayName = "X";

export default X;
