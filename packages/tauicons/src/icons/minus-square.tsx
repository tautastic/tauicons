import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const MinusSquare: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <path d="M8 12h8"></path>
    </svg>
  );
});

MinusSquare.displayName = "MinusSquare";

export default MinusSquare;
