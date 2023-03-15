import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Codepen: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z"></path>
      <path d="M12 22v-6.5"></path>
      <path d="M22 8.5l-10 7-10-7"></path>
      <path d="M2 15.5l10-7 10 7"></path>
      <path d="M12 2v6.5"></path>
    </svg>
  );
});

Codepen.displayName = "Codepen";

export default Codepen;
