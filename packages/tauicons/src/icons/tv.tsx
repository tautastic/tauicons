import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Tv: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
      <path d="M17 2l-5 5-5-5"></path>
    </svg>
  );
});

Tv.displayName = "Tv";

export default Tv;
