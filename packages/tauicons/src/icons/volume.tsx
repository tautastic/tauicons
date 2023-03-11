import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Volume: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
    </svg>
  );
});

Volume.displayName = "Volume";

export default Volume;
