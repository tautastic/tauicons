import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Emoji: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="M7 14.5s0 4 5 4 5-4 5-4" fill="currentColor"></path>
      <path d="M7 14.5s0 4 5 4 5-4 5-4H7z"></path>
      <circle cx="15.5" cy="9.5" r=".75"></circle>
      <circle cx="8.5" cy="9.5" r=".75"></circle>
    </svg>
  );
});

Emoji.displayName = "Emoji";

export default Emoji;
