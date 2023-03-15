import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const File: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"></path>
      <path d="M13 2v7h7"></path>
    </svg>
  );
});

File.displayName = "File";

export default File;
