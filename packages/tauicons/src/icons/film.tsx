import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Film: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
      <path d="M7 2v20"></path>
      <path d="M17 2v20"></path>
      <path d="M2 12h20"></path>
      <path d="M2 7h5"></path>
      <path d="M2 17h5"></path>
      <path d="M17 17h5"></path>
      <path d="M17 7h5"></path>
    </svg>
  );
});

Film.displayName = "Film";

export default Film;
