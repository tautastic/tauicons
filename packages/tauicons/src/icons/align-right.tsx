import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const AlignRight: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M21 10H7"></path>
      <path d="M21 6H3"></path>
      <path d="M21 14H3"></path>
      <path d="M21 18H7"></path>
    </svg>
  );
});

AlignRight.displayName = "AlignRight";

export default AlignRight;
