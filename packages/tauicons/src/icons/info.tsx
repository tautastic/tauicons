import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Info: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="12" r="10" fill={iconProps.fill}></circle>
      <path d="M12 16v-4" stroke="currentColor"></path>
      <path d="M12 8h.01" stroke="currentColor"></path>
    </svg>
  );
});

Info.displayName = "Info";

export default Info;
