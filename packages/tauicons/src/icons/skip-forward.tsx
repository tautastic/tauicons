import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const SkipForward: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M5 4l10 8-10 8V4z"></path>
      <path d="M19 5v14"></path>
    </svg>
  );
});

SkipForward.displayName = "SkipForward";

export default SkipForward;
