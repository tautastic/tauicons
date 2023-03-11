import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Pin: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path d="M6.52 10.2l4.24 5.65m.01-9.9a2 2 0 000-2.83l-.7-.71L3 9.49l.7.7a1.998 1.998 0 002.83 0m4.24 5.66l5.66-5.66m-5.66 5.66s-1.76 2.47.71 4.95l9.89-9.9c-2.47-2.48-4.95-.7-4.95-.7m-5.65 5.65l5.65-5.65m0 0l-5.66-4.25m5.66 9.9l4.24 4.24"></path>
    </svg>
  );
});

Pin.displayName = "Pin";

export default Pin;
