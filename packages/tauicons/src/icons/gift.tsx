import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Gift: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M20 12v10H4V12"></path>
      <path d="M2 7h20v5H2z"></path>
      <path d="M12 22V7"></path>
      <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"></path>
      <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"></path>
    </svg>
  );
});

Gift.displayName = "Gift";

export default Gift;
