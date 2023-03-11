import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const DownloadCloud: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M8 17l4 4 4-4"></path>
      <path d="M12 12v9"></path>
      <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
    </svg>
  );
});

DownloadCloud.displayName = "DownloadCloud";

export default DownloadCloud;
