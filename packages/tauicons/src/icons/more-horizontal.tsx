import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const MoreHorizontal: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="12" r="1" fill="currentColor"></circle>
      <circle cx="19" cy="12" r="1" fill="currentColor"></circle>
      <circle cx="5" cy="12" r="1" fill="currentColor"></circle>
    </svg>
  );
});

MoreHorizontal.displayName = "MoreHorizontal";

export default MoreHorizontal;
