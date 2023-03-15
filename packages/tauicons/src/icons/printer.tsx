import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Printer: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M6 9V2h12v7"></path>
      <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"></path>
      <path d="M6 14h12v8H6z"></path>
    </svg>
  );
});

Printer.displayName = "Printer";

export default Printer;
