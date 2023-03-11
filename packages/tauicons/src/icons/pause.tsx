import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Pause: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <rect x="6" y="4" width="4" height="16" fill="none"></rect>
      <rect x="14" y="4" width="4" height="16" fill="none"></rect>
    </svg>
  );
});

Pause.displayName = "Pause";

export default Pause;
