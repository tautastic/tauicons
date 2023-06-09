import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Voicemail: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="5.5" cy="11.5" r="4.5"></circle>
      <circle cx="18.5" cy="11.5" r="4.5"></circle>
      <path d="M5.5 16h13"></path>
    </svg>
  );
});

Voicemail.displayName = "Voicemail";

export default Voicemail;
