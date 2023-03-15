import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Droplet: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"></path>
    </svg>
  );
});

Droplet.displayName = "Droplet";

export default Droplet;
