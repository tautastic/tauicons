import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Map: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"></path>
      <path d="M8 2v16"></path>
      <path d="M16 6v16"></path>
    </svg>
  );
});

Map.displayName = "Map";

export default Map;
