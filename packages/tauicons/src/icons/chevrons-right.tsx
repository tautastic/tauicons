import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ChevronsRight: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M13 17l5-5-5-5"></path>
      <path d="M6 17l5-5-5-5"></path>
    </svg>
  );
});

ChevronsRight.displayName = "ChevronsRight";

export default ChevronsRight;
