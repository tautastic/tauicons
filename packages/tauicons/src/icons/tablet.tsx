import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Tablet: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
      <path d="M12 18h.01"></path>
    </svg>
  );
});

Tablet.displayName = "Tablet";

export default Tablet;
