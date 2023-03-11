import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Divider: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M16.88 3.549L7.12 20.451"></path>
    </svg>
  );
});

Divider.displayName = "Divider";

export default Divider;
