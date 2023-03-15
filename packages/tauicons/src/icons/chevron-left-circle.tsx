import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ChevronLeftCircle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        fill={iconProps.fill}
      ></path>
      <path d="M13 8l-4 4 4 4" stroke="currentColor" fill={iconProps.fill}></path>
    </svg>
  );
});

ChevronLeftCircle.displayName = "ChevronLeftCircle";

export default ChevronLeftCircle;
