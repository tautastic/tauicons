import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Umbrella: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7"></path>
    </svg>
  );
});

Umbrella.displayName = "Umbrella";

export default Umbrella;
