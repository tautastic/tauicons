import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const VercelTriangle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
      <path clipRule="evenodd" d="M12 3 2 19h20L12 3Z" strokeWidth="1.5"></path>
    </svg>
  );
});

VercelTriangle.displayName = "VercelTriangle";

export default VercelTriangle;
