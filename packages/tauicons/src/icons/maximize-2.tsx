import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Maximize2: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M15 3h6v6"></path>
      <path d="M9 21H3v-6"></path>
      <path d="M21 3l-7 7"></path>
      <path d="M3 21l7-7"></path>
    </svg>
  );
});

Maximize2.displayName = "Maximize2";

export default Maximize2;
