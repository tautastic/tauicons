import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const FastForward: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M13 19l9-7-9-7v14z"></path>
      <path d="M2 19l9-7-9-7v14z"></path>
    </svg>
  );
});

FastForward.displayName = "FastForward";

export default FastForward;
