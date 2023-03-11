import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Rss: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M4 11a9 9 0 019 9"></path>
      <path d="M4 4a16 16 0 0116 16"></path>
      <circle cx="5" cy="19" r="1"></circle>
    </svg>
  );
});

Rss.displayName = "Rss";

export default Rss;
