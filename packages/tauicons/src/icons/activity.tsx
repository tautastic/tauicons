import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Activity: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    </svg>
  );
});

Activity.displayName = "Activity";

export default Activity;
