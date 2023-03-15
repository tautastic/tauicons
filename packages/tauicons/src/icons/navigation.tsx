import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Navigation: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M3 11l19-9-9 19-2-8-8-2z"></path>
    </svg>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
