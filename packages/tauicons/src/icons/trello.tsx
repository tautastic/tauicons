import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Trello: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <path d="M7 7h3v9H7z"></path>
      <path d="M14 7h3v5h-3z"></path>
    </svg>
  );
});

Trello.displayName = "Trello";

export default Trello;
