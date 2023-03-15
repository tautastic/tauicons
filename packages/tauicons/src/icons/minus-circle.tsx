import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const MinusCircle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 12h8"></path>
    </svg>
  );
});

MinusCircle.displayName = "MinusCircle";

export default MinusCircle;
