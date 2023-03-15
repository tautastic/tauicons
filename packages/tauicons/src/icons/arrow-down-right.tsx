import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ArrowDownRight: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M7 7l10 10"></path>
      <path d="M17 7v10H7"></path>
    </svg>
  );
});

ArrowDownRight.displayName = "ArrowDownRight";

export default ArrowDownRight;
