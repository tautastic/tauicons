import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ShoppingBag: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
      <path d="M3 6h18"></path>
      <path d="M16 10a4 4 0 01-8 0"></path>
    </svg>
  );
});

ShoppingBag.displayName = "ShoppingBag";

export default ShoppingBag;
