import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const PlusCircle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 8v8"></path>
      <path d="M8 12h8"></path>
    </svg>
  );
});

PlusCircle.displayName = "PlusCircle";

export default PlusCircle;
