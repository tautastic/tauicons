import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const SkipBack: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M19 20L9 12l10-8v16z"></path>
      <path d="M5 19V5"></path>
    </svg>
  );
});

SkipBack.displayName = "SkipBack";

export default SkipBack;
