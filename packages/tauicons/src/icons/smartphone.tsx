import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Smartphone: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <path d="M12 18h.01"></path>
    </svg>
  );
});

Smartphone.displayName = "Smartphone";

export default Smartphone;
