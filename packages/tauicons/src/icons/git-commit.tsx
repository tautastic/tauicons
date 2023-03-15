import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const GitCommit: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M1.05 12H7"></path>
      <path d="M17.01 12h5.95"></path>
    </svg>
  );
});

GitCommit.displayName = "GitCommit";

export default GitCommit;
