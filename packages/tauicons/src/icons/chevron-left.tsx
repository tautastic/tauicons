import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ChevronLeft: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M15 18l-6-6 6-6"></path>
    </svg>
  );
});

ChevronLeft.displayName = "ChevronLeft";

export default ChevronLeft;
