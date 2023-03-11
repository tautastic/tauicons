import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const AtSign: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94"></path>
    </svg>
  );
});

AtSign.displayName = "AtSign";

export default AtSign;
