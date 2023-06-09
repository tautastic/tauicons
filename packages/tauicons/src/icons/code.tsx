import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Code: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M16 18l6-6-6-6"></path>
      <path d="M8 6l-6 6 6 6"></path>
    </svg>
  );
});

Code.displayName = "Code";

export default Code;
