import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Twitch: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
    </svg>
  );
});

Twitch.displayName = "Twitch";

export default Twitch;
