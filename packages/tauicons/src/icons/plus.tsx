import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Plus: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M12 5v14"></path>
      <path d="M5 12h14"></path>
    </svg>
  );
});

Plus.displayName = "Plus";

export default Plus;
