import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Check: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M20 6L9 17l-5-5"></path>
    </svg>
  );
});

Check.displayName = "Check";

export default Check;
