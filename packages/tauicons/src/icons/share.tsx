import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Share: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"></path>
      <path d="M16 6l-4-4-4 4"></path>
      <path d="M12 2v13"></path>
    </svg>
  );
});

Share.displayName = "Share";

export default Share;
