import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Figma: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z"></path>
      <path d="M12 2h3.5a3.5 3.5 0 110 7H12V2z"></path>
      <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z"></path>
      <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z"></path>
      <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z"></path>
    </svg>
  );
});

Figma.displayName = "Figma";

export default Figma;
