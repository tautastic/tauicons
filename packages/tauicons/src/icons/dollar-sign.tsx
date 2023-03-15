import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const DollarSign: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M12 1v22"></path>
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path>
    </svg>
  );
});

DollarSign.displayName = "DollarSign";

export default DollarSign;
