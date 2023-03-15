import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ChevronsDown: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M7 13l5 5 5-5"></path>
      <path d="M7 6l5 5 5-5"></path>
    </svg>
  );
});

ChevronsDown.displayName = "ChevronsDown";

export default ChevronsDown;
