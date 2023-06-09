import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const GitMerge: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="18" cy="18" r="3"></circle>
      <circle cx="6" cy="6" r="3"></circle>
      <path d="M6 21V9a9 9 0 009 9"></path>
    </svg>
  );
});

GitMerge.displayName = "GitMerge";

export default GitMerge;
