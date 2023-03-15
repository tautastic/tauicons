import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ToggleRight: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
      <circle cx="16" cy="12" r="3"></circle>
    </svg>
  );
});

ToggleRight.displayName = "ToggleRight";

export default ToggleRight;
