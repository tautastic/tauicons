import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Compass: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"></path>
    </svg>
  );
});

Compass.displayName = "Compass";

export default Compass;
