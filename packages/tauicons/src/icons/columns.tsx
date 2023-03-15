import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Columns: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M12 3h7a2 2 0 012 2v14a2 2 0 01-2 2h-7m0-18H5a2 2 0 00-2 2v14a2 2 0 002 2h7m0-18v18"></path>
    </svg>
  );
});

Columns.displayName = "Columns";

export default Columns;
