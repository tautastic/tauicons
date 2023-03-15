import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const UserCheck: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
      <circle cx="8.5" cy="7" r="4"></circle>
      <path d="M17 11l2 2 4-4"></path>
    </svg>
  );
});

UserCheck.displayName = "UserCheck";

export default UserCheck;
