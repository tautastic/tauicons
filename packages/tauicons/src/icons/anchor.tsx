import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Anchor: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="5" r="3"></circle>
      <path d="M12 22V8"></path>
      <path d="M5 12H2a10 10 0 0020 0h-3"></path>
    </svg>
  );
});

Anchor.displayName = "Anchor";

export default Anchor;
