import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CornerRightDown: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M10 15l5 5 5-5"></path>
      <path d="M4 4h7a4 4 0 014 4v12"></path>
    </svg>
  );
});

CornerRightDown.displayName = "CornerRightDown";

export default CornerRightDown;
