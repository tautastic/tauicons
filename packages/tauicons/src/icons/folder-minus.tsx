import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const FolderMinus: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"></path>
      <path d="M9 14h6"></path>
    </svg>
  );
});

FolderMinus.displayName = "FolderMinus";

export default FolderMinus;
