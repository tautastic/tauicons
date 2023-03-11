import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Moon: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
    </svg>
  );
});

Moon.displayName = "Moon";

export default Moon;
