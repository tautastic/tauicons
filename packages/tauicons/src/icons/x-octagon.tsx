import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const XOctagon: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z"></path>
      <path d="M15 9l-6 6"></path>
      <path d="M9 9l6 6"></path>
    </svg>
  );
});

XOctagon.displayName = "XOctagon";

export default XOctagon;
