import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ChevronsUp: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M17 11l-5-5-5 5"></path>
      <path d="M17 18l-5-5-5 5"></path>
    </svg>
  );
});

ChevronsUp.displayName = "ChevronsUp";

export default ChevronsUp;
