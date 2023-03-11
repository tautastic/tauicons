import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Underline: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M6 3v7a6 6 0 006 6 6 6 0 006-6V3"></path>
      <path d="M4 21h16"></path>
    </svg>
  );
});

Underline.displayName = "Underline";

export default Underline;
