import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Battery: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect>
      <path d="M23 13v-2"></path>
    </svg>
  );
});

Battery.displayName = "Battery";

export default Battery;
