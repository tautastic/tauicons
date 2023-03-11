import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ChevronUp: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M18 15l-6-6-6 6"></path>
    </svg>
  );
});

ChevronUp.displayName = "ChevronUp";

export default ChevronUp;
