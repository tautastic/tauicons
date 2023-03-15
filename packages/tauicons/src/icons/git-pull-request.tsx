import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const GitPullRequest: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <circle cx="18" cy="18" r="3"></circle>
      <circle cx="6" cy="6" r="3"></circle>
      <path d="M13 6h3a2 2 0 012 2v7"></path>
      <path d="M6 9v12"></path>
    </svg>
  );
});

GitPullRequest.displayName = "GitPullRequest";

export default GitPullRequest;
