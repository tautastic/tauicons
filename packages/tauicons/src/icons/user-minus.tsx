import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const UserMinus: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
      <circle cx="8.5" cy="7" r="4"></circle>
      <path d="M23 11h-6"></path>
    </svg>
  );
});

UserMinus.displayName = "UserMinus";

export default UserMinus;
