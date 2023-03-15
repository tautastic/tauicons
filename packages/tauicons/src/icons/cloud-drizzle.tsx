import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CloudDrizzle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M8 19v2"></path>
      <path d="M8 13v2"></path>
      <path d="M16 19v2"></path>
      <path d="M16 13v2"></path>
      <path d="M12 21v2"></path>
      <path d="M12 15v2"></path>
      <path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25"></path>
    </svg>
  );
});

CloudDrizzle.displayName = "CloudDrizzle";

export default CloudDrizzle;
