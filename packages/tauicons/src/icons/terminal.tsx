import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Terminal: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M4 17l6-6-6-6"></path>
      <path d="M12 19h8"></path>
    </svg>
  );
});

Terminal.displayName = "Terminal";

export default Terminal;
