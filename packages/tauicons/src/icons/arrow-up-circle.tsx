import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ArrowUpCircle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M16 12l-4-4-4 4"></path>
      <path d="M12 16V8"></path>
    </svg>
  );
});

ArrowUpCircle.displayName = "ArrowUpCircle";

export default ArrowUpCircle;
