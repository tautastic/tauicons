import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const BarChart: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M12 20V10"></path>
      <path d="M18 20V4"></path>
      <path d="M6 20v-4"></path>
    </svg>
  );
});

BarChart.displayName = "BarChart";

export default BarChart;
