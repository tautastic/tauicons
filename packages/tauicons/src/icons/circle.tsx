import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Circle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="12" r="10" fill={iconProps.fill}></circle>
    </svg>
  );
});

Circle.displayName = "Circle";

export default Circle;
