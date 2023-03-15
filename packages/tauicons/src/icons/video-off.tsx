import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const VideoOff: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M16 16v1a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h2m5.66 0H14a2 2 0 012 2v3.34l1 1L23 7v10"></path>
      <path d="M1 1l22 22"></path>
    </svg>
  );
});

VideoOff.displayName = "VideoOff";

export default VideoOff;
