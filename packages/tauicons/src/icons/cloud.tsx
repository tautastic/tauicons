import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Cloud: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"></path>
    </svg>
  );
});

Cloud.displayName = "Cloud";

export default Cloud;
