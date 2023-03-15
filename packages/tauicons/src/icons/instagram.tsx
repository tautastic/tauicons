import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Instagram: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
      <path d="M17.5 6.5h.01"></path>
    </svg>
  );
});

Instagram.displayName = "Instagram";

export default Instagram;
