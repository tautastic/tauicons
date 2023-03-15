import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Server: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <path d="M6 6h.01"></path>
      <path d="M6 18h.01"></path>
    </svg>
  );
});

Server.displayName = "Server";

export default Server;
