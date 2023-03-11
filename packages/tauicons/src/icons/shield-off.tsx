import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ShieldOff: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M19.69 14a6.9 6.9 0 00.31-2V5l-8-3-3.16 1.18"></path>
      <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 005.62-4.38"></path>
      <path d="M1 1l22 22"></path>
    </svg>
  );
});

ShieldOff.displayName = "ShieldOff";

export default ShieldOff;
