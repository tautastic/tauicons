import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Percent: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M19 5L5 19"></path>
      <circle cx="6.5" cy="6.5" r="2.5"></circle>
      <circle cx="17.5" cy="17.5" r="2.5"></circle>
    </svg>
  );
});

Percent.displayName = "Percent";

export default Percent;
