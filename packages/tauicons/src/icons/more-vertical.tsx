import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const MoreVertical: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <circle cx="12" cy="12" r="1" fill="currentColor"></circle>
      <circle cx="12" cy="5" r="1" fill="currentColor"></circle>
      <circle cx="12" cy="19" r="1" fill="currentColor"></circle>
    </svg>
  );
});

MoreVertical.displayName = "MoreVertical";

export default MoreVertical;
