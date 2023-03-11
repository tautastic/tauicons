import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Feather: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z"></path>
      <path d="M16 8L2 22"></path>
      <path d="M17.5 15H9"></path>
    </svg>
  );
});

Feather.displayName = "Feather";

export default Feather;
