import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Sliders: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M4 21v-7"></path>
      <path d="M4 10V3"></path>
      <path d="M12 21v-9"></path>
      <path d="M12 8V3"></path>
      <path d="M20 21v-5"></path>
      <path d="M20 12V3"></path>
      <path d="M1 14h6"></path>
      <path d="M9 8h6"></path>
      <path d="M17 16h6"></path>
    </svg>
  );
});

Sliders.displayName = "Sliders";

export default Sliders;
