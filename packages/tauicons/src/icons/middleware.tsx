import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Middleware: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path
        d="M10.2 12L2.39995 16.8L2.39995 7.19995L10.2 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15.6001 9.59998L15.6001 14.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M21.6001 7.19995L21.6001 16.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
});

Middleware.displayName = "Middleware";

export default Middleware;
