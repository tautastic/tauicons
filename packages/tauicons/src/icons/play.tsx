import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Play: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <polygon points="5 3 19 12 5 21 5 3" fill={iconProps.fill}></polygon>
    </svg>
  );
});

Play.displayName = "Play";

export default Play;
