import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const VolumeX: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
      <path d="M23 9l-6 6"></path>
      <path d="M17 9l6 6"></path>
    </svg>
  );
});

VolumeX.displayName = "VolumeX";

export default VolumeX;
