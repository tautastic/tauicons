import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Airplay: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1"></path>
      <path d="M12 15l5 6H7l5-6z"></path>
    </svg>
  );
});

Airplay.displayName = "Airplay";

export default Airplay;
