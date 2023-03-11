import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const UserPlus: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg
      ref={ref}
      width={iconProps.size}
      height={iconProps.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={iconProps.color}
      strokeWidth={iconProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
      <circle cx="8.5" cy="7" r="4"></circle>
      <path d="M20 8v6"></path>
      <path d="M23 11h-6"></path>
    </svg>
  );
});

UserPlus.displayName = "UserPlus";

export default UserPlus;
