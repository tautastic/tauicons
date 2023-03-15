import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Truck: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M1 3h15v13H1z"></path>
      <path d="M16 8h4l3 3v5h-7V8z"></path>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  );
});

Truck.displayName = "Truck";

export default Truck;
