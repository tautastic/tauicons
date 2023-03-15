import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const BarChart2: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M18 20V10"></path>
      <path d="M12 20V4"></path>
      <path d="M6 20v-6"></path>
    </svg>
  );
});

BarChart2.displayName = "BarChart2";

export default BarChart2;
