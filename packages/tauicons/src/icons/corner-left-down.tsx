import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CornerLeftDown: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M14 15l-5 5-5-5"></path>
      <path d="M20 4h-7a4 4 0 00-4 4v12"></path>
    </svg>
  );
});

CornerLeftDown.displayName = "CornerLeftDown";

export default CornerLeftDown;
