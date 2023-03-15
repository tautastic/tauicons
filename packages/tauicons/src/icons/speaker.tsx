import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Speaker: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
      <circle cx="12" cy="14" r="4"></circle>
      <path d="M12 6h.01"></path>
    </svg>
  );
});

Speaker.displayName = "Speaker";

export default Speaker;
