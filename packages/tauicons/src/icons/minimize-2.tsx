import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Minimize2: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M4 14h6v6"></path>
      <path d="M20 10h-6V4"></path>
      <path d="M14 10l7-7"></path>
      <path d="M3 21l7-7"></path>
    </svg>
  );
});

Minimize2.displayName = "Minimize2";

export default Minimize2;
