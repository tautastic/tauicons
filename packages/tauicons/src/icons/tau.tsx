import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Tau: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg
      ref={ref}
      width={iconProps.size}
      height={iconProps.size}
      viewBox="0 0 24 24"
      stroke="none"
      fill={iconProps.color}
      strokeWidth={iconProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M14.4 3.7 13.6 11C13.5 12.3 13.4 13.5 13.4 14.8 13.4 17.3 13.7 18.7 14.3 19.2 14.9 19.8 15.6 20 16.2 20 17.9 20 18.8 19 19.1 16.9L20.1 16.9C19.5 21.6 17.7 24 14.5 24 11.1 24 9.5 22.1 9.5 18.2 9.5 16.3 9.7 13.9 10.1 11L10.9 3.7 8.4 3.7C7.1 3.7 6 3.9 5.2 4.4 4.4 4.9 3.7 5.9 3.1 7.2L2.2 7.2C2.7 5.4 3.4 3.9 4.1 2.8 4.8 1.7 5.6 1 6.2.6 6.9.2 7.9 0 9.2 0L21.8 0 21.8 3.7 14.4 3.7Z"></path>
    </svg>
  );
});

Tau.displayName = "Tau";

export default Tau;
