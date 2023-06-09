import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Framer: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>
    </svg>
  );
});

Framer.displayName = "Framer";

export default Framer;
