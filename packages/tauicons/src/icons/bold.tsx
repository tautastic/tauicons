import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Bold: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z"></path>
      <path d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z"></path>
    </svg>
  );
});

Bold.displayName = "Bold";

export default Bold;
