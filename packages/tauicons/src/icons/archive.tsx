import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Archive: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M21 8v13H3V8"></path>
      <path d="M1 3h22v5H1z"></path>
      <path d="M10 12h4"></path>
    </svg>
  );
});

Archive.displayName = "Archive";

export default Archive;
