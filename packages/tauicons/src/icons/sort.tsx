import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Sort: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M15 18H3M21 6H3M17 12H3"></path>
    </svg>
  );
});

Sort.displayName = "Sort";

export default Sort;
