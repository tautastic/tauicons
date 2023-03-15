import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const XCircle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="12" r="10" fill={iconProps.fill}></circle>
      <path d="M15 9l-6 6" stroke="currentColor"></path>
      <path d="M9 9l6 6" stroke="currentColor"></path>
    </svg>
  );
});

XCircle.displayName = "XCircle";

export default XCircle;
