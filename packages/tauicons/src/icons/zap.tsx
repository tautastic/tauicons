import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Zap: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
    </svg>
  );
});

Zap.displayName = "Zap";

export default Zap;
