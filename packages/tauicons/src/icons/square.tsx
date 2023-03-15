import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Square: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    </svg>
  );
});

Square.displayName = "Square";

export default Square;
