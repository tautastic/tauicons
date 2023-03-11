import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const LogIn: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"></path>
      <path d="M10 17l5-5-5-5"></path>
      <path d="M15 12H3"></path>
    </svg>
  );
});

LogIn.displayName = "LogIn";

export default LogIn;
