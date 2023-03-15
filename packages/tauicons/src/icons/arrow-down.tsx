import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ArrowDown: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M12 5v14"></path>
      <path d="M19 12l-7 7-7-7"></path>
    </svg>
  );
});

ArrowDown.displayName = "ArrowDown";

export default ArrowDown;
