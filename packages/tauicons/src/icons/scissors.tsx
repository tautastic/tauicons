import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Scissors: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <circle cx="6" cy="6" r="3"></circle>
      <circle cx="6" cy="18" r="3"></circle>
      <path d="M20 4L8.12 15.88"></path>
      <path d="M14.47 14.48L20 20"></path>
      <path d="M8.12 8.12L12 12"></path>
    </svg>
  );
});

Scissors.displayName = "Scissors";

export default Scissors;
