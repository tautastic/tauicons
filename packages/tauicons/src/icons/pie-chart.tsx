import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const PieChart: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M21.21 15.89A10 10 0 118 2.83"></path>
      <path d="M22 12A10 10 0 0012 2v10z"></path>
    </svg>
  );
});

PieChart.displayName = "PieChart";

export default PieChart;
