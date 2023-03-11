import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const RotateCcw: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M1 4v6h6"></path>
      <path d="M3.51 15a9 9 0 102.13-9.36L1 10"></path>
    </svg>
  );
});

RotateCcw.displayName = "RotateCcw";

export default RotateCcw;
