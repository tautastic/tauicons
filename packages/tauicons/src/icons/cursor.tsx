import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Cursor: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="m4 4 16 5.333L12 12l-2.667 8L4 4Z"></path>
    </svg>
  );
});

Cursor.displayName = "Cursor";

export default Cursor;
