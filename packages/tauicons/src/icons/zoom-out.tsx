import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ZoomOut: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="11" cy="11" r="8"></circle>
      <path d="M21 21l-4.35-4.35"></path>
      <path d="M8 11h6"></path>
    </svg>
  );
});

ZoomOut.displayName = "ZoomOut";

export default ZoomOut;
