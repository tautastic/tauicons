import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ArrowDownCircle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 12l4 4 4-4"></path>
      <path d="M12 8v8"></path>
    </svg>
  );
});

ArrowDownCircle.displayName = "ArrowDownCircle";

export default ArrowDownCircle;
