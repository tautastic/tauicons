import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Cpu: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <path d="M9 9h6v6H9z"></path>
      <path d="M9 1v3"></path>
      <path d="M15 1v3"></path>
      <path d="M9 20v3"></path>
      <path d="M15 20v3"></path>
      <path d="M20 9h3"></path>
      <path d="M20 14h3"></path>
      <path d="M1 9h3"></path>
      <path d="M1 14h3"></path>
    </svg>
  );
});

Cpu.displayName = "Cpu";

export default Cpu;
