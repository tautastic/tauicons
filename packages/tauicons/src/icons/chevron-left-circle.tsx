import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ChevronLeftCircle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        fill="none"
      ></path>
      <path d="M13 8l-4 4 4 4" stroke="currentColor" fill="none"></path>
    </svg>
  );
});

ChevronLeftCircle.displayName = "ChevronLeftCircle";

export default ChevronLeftCircle;
