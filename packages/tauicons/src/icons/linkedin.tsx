import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Linkedin: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
      <path d="M2 9h4v12H2z"></path>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
});

Linkedin.displayName = "Linkedin";

export default Linkedin;
