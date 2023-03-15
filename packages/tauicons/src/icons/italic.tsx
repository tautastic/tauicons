import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Italic: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M19 4h-9"></path>
      <path d="M14 20H5"></path>
      <path d="M15 4L9 20"></path>
    </svg>
  );
});

Italic.displayName = "Italic";

export default Italic;
