import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CheckBox: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M16.09 3H7.91A4.91 4.91 0 003 7.91v8.18A4.909 4.909 0 007.91 21h8.18A4.909 4.909 0 0021 16.09V7.91A4.909 4.909 0 0016.09 3z"></path>
    </svg>
  );
});

CheckBox.displayName = "CheckBox";

export default CheckBox;
