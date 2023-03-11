import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Sunrise: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M17 18a5 5 0 00-10 0"></path>
      <path d="M12 2v7"></path>
      <path d="M4.22 10.22l1.42 1.42"></path>
      <path d="M1 18h2"></path>
      <path d="M21 18h2"></path>
      <path d="M18.36 11.64l1.42-1.42"></path>
      <path d="M23 22H1"></path>
      <path d="M8 6l4-4 4 4"></path>
    </svg>
  );
});

Sunrise.displayName = "Sunrise";

export default Sunrise;
