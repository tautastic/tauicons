import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Clock: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 6v6l4 2"></path>
    </svg>
  );
});

Clock.displayName = "Clock";

export default Clock;
