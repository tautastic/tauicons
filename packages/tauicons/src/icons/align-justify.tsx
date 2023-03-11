import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const AlignJustify: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M21 10H3"></path>
      <path d="M21 6H3"></path>
      <path d="M21 14H3"></path>
      <path d="M21 18H3"></path>
    </svg>
  );
});

AlignJustify.displayName = "AlignJustify";

export default AlignJustify;
