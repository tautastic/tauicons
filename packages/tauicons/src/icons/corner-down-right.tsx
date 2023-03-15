import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CornerDownRight: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M15 10l5 5-5 5"></path>
      <path d="M4 4v7a4 4 0 004 4h12"></path>
    </svg>
  );
});

CornerDownRight.displayName = "CornerDownRight";

export default CornerDownRight;
