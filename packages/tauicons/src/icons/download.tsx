import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Download: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
      <path d="M7 10l5 5 5-5"></path>
      <path d="M12 15V3"></path>
    </svg>
  );
});

Download.displayName = "Download";

export default Download;
