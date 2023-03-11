import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Move: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg
      ref={ref}
      width={iconProps.size}
      height={iconProps.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={iconProps.color}
      strokeWidth={iconProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M5 9l-3 3 3 3"></path>
      <path d="M9 5l3-3 3 3"></path>
      <path d="M15 19l-3 3-3-3"></path>
      <path d="M19 9l3 3-3 3"></path>
      <path d="M2 12h20"></path>
      <path d="M12 2v20"></path>
    </svg>
  );
});

Move.displayName = "Move";

export default Move;
