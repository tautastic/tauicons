import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Flag: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
      <path d="M4 22v-7"></path>
    </svg>
  );
});

Flag.displayName = "Flag";

export default Flag;
