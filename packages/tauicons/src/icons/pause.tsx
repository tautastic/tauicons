import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Pause: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <rect x="6" y="4" width="4" height="16" fill={iconProps.fill}></rect>
      <rect x="14" y="4" width="4" height="16" fill={iconProps.fill}></rect>
    </svg>
  );
});

Pause.displayName = "Pause";

export default Pause;
