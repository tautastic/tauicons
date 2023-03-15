import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const LifeBuoy: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M4.93 4.93l4.24 4.24"></path>
      <path d="M14.83 14.83l4.24 4.24"></path>
      <path d="M14.83 9.17l4.24-4.24"></path>
      <path d="M14.83 9.17l3.53-3.53"></path>
      <path d="M4.93 19.07l4.24-4.24"></path>
    </svg>
  );
});

LifeBuoy.displayName = "LifeBuoy";

export default LifeBuoy;
