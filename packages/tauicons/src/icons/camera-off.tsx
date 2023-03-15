import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CameraOff: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M1 1l22 22"></path>
      <path d="M21 21H3a2 2 0 01-2-2V8a2 2 0 012-2h3m3-3h6l2 3h4a2 2 0 012 2v9.34m-7.72-2.06a4 4 0 11-5.56-5.56"></path>
    </svg>
  );
});

CameraOff.displayName = "CameraOff";

export default CameraOff;
