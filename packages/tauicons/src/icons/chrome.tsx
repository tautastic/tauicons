import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Chrome: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M21.17 8H12"></path>
      <path d="M3.95 6.06L8.54 14"></path>
      <path d="M10.88 21.94L15.46 14"></path>
    </svg>
  );
});

Chrome.displayName = "Chrome";

export default Chrome;
