import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const PlayCircle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M10 8l6 4-6 4V8z"></path>
    </svg>
  );
});

PlayCircle.displayName = "PlayCircle";

export default PlayCircle;
