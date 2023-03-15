import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ChevronsLeft: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M11 17l-5-5 5-5"></path>
      <path d="M18 17l-5-5 5-5"></path>
    </svg>
  );
});

ChevronsLeft.displayName = "ChevronsLeft";

export default ChevronsLeft;
