import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Crop: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M6.13 1L6 16a2 2 0 002 2h15"></path>
      <path d="M1 6.13L16 6a2 2 0 012 2v15"></path>
    </svg>
  );
});

Crop.displayName = "Crop";

export default Crop;
