import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Frown: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
      <path d="M9 9h.01"></path>
      <path d="M15 9h.01"></path>
    </svg>
  );
});

Frown.displayName = "Frown";

export default Frown;
