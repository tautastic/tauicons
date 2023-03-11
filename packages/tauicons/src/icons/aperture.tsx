import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Aperture: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M14.31 8l5.74 9.94"></path>
      <path d="M9.69 8h11.48"></path>
      <path d="M7.38 12l5.74-9.94"></path>
      <path d="M9.69 16L3.95 6.06"></path>
      <path d="M14.31 16H2.83"></path>
      <path d="M16.62 12l-5.74 9.94"></path>
    </svg>
  );
});

Aperture.displayName = "Aperture";

export default Aperture;
