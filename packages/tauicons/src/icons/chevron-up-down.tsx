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
      <path d="M17 8.517L12 3 7 8.517M7 15.48l5 5.517 5-5.517"></path>
    </svg>
  );
});

ChevronUp.displayName = "ChevronUp";

export default ChevronUp;
