import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const StopCircle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9 9h6v6H9z"></path>
    </svg>
  );
});

StopCircle.displayName = "StopCircle";

export default StopCircle;
