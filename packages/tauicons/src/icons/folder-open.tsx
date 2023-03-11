import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const FolderOpen: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M5.4 7.7l-3.8 9a1 1 0 001 1.3h17a1 1 0 001-.6L24 8.7a1 1 0 00-.9-1.4L6.3 7.1a1 1 0 00-1 .6z"></path>
      <path d="M20.3 7.2V5c0-.6-.4-1-1-1H9.7a1 1 0 01-.8-.6L7.8 1.5a1 1 0 00-.9-.5H2a1 1 0 00-1 1v16"></path>
    </svg>
  );
});

FolderOpen.displayName = "FolderOpen";

export default FolderOpen;
