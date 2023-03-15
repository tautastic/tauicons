import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const PauseCircle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M10 15V9"></path>
      <path d="M14 15V9"></path>
    </svg>
  );
});

PauseCircle.displayName = "PauseCircle";

export default PauseCircle;
