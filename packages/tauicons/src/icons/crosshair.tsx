import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Crosshair: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M22 12h-4"></path>
      <path d="M6 12H2"></path>
      <path d="M12 6V2"></path>
      <path d="M12 22v-4"></path>
    </svg>
  );
});

Crosshair.displayName = "Crosshair";

export default Crosshair;
