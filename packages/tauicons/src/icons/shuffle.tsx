import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Shuffle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M16 3h5v5"></path>
      <path d="M4 20L21 3"></path>
      <path d="M21 16v5h-5"></path>
      <path d="M15 15l6 6"></path>
      <path d="M4 4l5 5"></path>
    </svg>
  );
});

Shuffle.displayName = "Shuffle";

export default Shuffle;
