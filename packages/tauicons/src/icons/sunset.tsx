import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Sunset: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M17 18a5 5 0 00-10 0"></path>
      <path d="M12 9V2"></path>
      <path d="M4.22 10.22l1.42 1.42"></path>
      <path d="M1 18h2"></path>
      <path d="M21 18h2"></path>
      <path d="M18.36 11.64l1.42-1.42"></path>
      <path d="M23 22H1"></path>
      <path d="M16 5l-4 4-4-4"></path>
    </svg>
  );
});

Sunset.displayName = "Sunset";

export default Sunset;
