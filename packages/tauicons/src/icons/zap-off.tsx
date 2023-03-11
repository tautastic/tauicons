import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const ZapOff: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M12.41 6.75L13 2l-2.43 2.92"></path>
      <path d="M18.57 12.91L21 10h-5.34"></path>
      <path d="M8 8l-5 6h9l-1 8 5-6"></path>
      <path d="M1 1l22 22"></path>
    </svg>
  );
});

ZapOff.displayName = "ZapOff";

export default ZapOff;
