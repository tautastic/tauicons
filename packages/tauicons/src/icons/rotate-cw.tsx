import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const RotateCw: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M23 4v6h-6"></path>
      <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"></path>
    </svg>
  );
});

RotateCw.displayName = "RotateCw";

export default RotateCw;
