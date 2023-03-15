import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Delete: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z"></path>
      <path d="M18 9l-6 6"></path>
      <path d="M12 9l6 6"></path>
    </svg>
  );
});

Delete.displayName = "Delete";

export default Delete;
