import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Minus: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M5 12h14"></path>
    </svg>
  );
});

Minus.displayName = "Minus";

export default Minus;
