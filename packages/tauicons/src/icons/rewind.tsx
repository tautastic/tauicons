import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Rewind: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M11 19l-9-7 9-7v14z"></path>
      <path d="M22 19l-9-7 9-7v14z"></path>
    </svg>
  );
});

Rewind.displayName = "Rewind";

export default Rewind;
