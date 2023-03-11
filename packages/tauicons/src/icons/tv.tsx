import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Tv: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
      <path d="M17 2l-5 5-5-5"></path>
    </svg>
  );
});

Tv.displayName = "Tv";

export default Tv;
