import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Datastore: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg
      ref={ref}
      width={iconProps.size}
      height={iconProps.size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="none"
      strokeWidth={iconProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4ZM4 1C2.34315 1 1 2.34315 1 4V12C1 13.6569 2.34315 15 4 15H12C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1H4Z"
        fill={iconProps.color}
        fillRule="evenodd"
      ></path>
    </svg>
  );
});

Datastore.displayName = "Datastore";

export default Datastore;
