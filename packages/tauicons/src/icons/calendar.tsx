import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Calendar: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <path d="M16 2v4"></path>
      <path d="M8 2v4"></path>
      <path d="M3 10h18"></path>
    </svg>
  );
});

Calendar.displayName = "Calendar";

export default Calendar;
