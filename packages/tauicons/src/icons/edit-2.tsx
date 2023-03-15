import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Edit2: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
  );
});

Edit2.displayName = "Edit2";

export default Edit2;
