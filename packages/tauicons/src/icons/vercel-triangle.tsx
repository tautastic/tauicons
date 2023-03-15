import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const VercelTriangle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path clipRule="evenodd" d="M12 3 2 19h20L12 3Z" strokeWidth="1.5"></path>
    </svg>
  );
});

VercelTriangle.displayName = "VercelTriangle";

export default VercelTriangle;
