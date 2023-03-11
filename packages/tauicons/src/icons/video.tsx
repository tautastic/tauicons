import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Video: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M23 7l-7 5 7 5V7z"></path>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
    </svg>
  );
});

Video.displayName = "Video";

export default Video;
