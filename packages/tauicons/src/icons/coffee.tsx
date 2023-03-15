import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Coffee: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M18 8h1a4 4 0 010 8h-1"></path>
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"></path>
      <path d="M6 1v3"></path>
      <path d="M10 1v3"></path>
      <path d="M14 1v3"></path>
    </svg>
  );
});

Coffee.displayName = "Coffee";

export default Coffee;
