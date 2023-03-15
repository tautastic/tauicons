import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Navigation2: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M12 2l7 19-7-4-7 4 7-19z"></path>
    </svg>
  );
});

Navigation2.displayName = "Navigation2";

export default Navigation2;
