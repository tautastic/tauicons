import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Repeat: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M17 1l4 4-4 4"></path>
      <path d="M3 11V9a4 4 0 014-4h14"></path>
      <path d="M7 23l-4-4 4-4"></path>
      <path d="M21 13v2a4 4 0 01-4 4H3"></path>
    </svg>
  );
});

Repeat.displayName = "Repeat";

export default Repeat;
