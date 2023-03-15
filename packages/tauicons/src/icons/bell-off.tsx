import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const BellOff: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M13.73 21a2 2 0 01-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0118 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 00-9.33-5"></path>
      <path d="M1 1l22 22"></path>
    </svg>
  );
});

BellOff.displayName = "BellOff";

export default BellOff;
