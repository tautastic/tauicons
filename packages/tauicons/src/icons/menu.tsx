import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Menu: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M3 12h18"></path>
      <path d="M3 6h18"></path>
      <path d="M3 18h18"></path>
    </svg>
  );
});

Menu.displayName = "Menu";

export default Menu;
