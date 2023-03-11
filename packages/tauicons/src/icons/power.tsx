import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Power: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M18.36 6.64a9 9 0 11-12.73 0"></path>
      <path d="M12 2v10"></path>
    </svg>
  );
});

Power.displayName = "Power";

export default Power;
