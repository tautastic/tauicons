import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Meh: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M8 15h8"></path>
      <path d="M9 9h.01"></path>
      <path d="M15 9h.01"></path>
    </svg>
  );
});

Meh.displayName = "Meh";

export default Meh;
