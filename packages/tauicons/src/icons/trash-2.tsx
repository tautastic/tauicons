import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Trash2: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M3 6h18"></path>
      <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
      <path d="M10 11v6"></path>
      <path d="M14 11v6"></path>
    </svg>
  );
});

Trash2.displayName = "Trash2";

export default Trash2;
