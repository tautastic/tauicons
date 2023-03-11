import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ArrowUpRight: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M7 17L17 7"></path>
      <path d="M7 7h10v10"></path>
    </svg>
  );
});

ArrowUpRight.displayName = "ArrowUpRight";

export default ArrowUpRight;
