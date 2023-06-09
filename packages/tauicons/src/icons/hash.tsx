import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Hash: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M4 9h16"></path>
      <path d="M4 15h16"></path>
      <path d="M10 3L8 21"></path>
      <path d="M16 3l-2 18"></path>
    </svg>
  );
});

Hash.displayName = "Hash";

export default Hash;
