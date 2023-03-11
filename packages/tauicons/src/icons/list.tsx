import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const List: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M8 6h13"></path>
      <path d="M8 12h13"></path>
      <path d="M8 18h13"></path>
      <path d="M3 6h.01"></path>
      <path d="M3 12h.01"></path>
      <path d="M3 18h.01"></path>
    </svg>
  );
});

List.displayName = "List";

export default List;
