import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Slash: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M4.93 4.93l14.14 14.14"></path>
    </svg>
  );
});

Slash.displayName = "Slash";

export default Slash;
