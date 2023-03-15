import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CloudLightning: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9"></path>
      <path d="M13 11l-4 6h6l-4 6"></path>
    </svg>
  );
});

CloudLightning.displayName = "CloudLightning";

export default CloudLightning;
