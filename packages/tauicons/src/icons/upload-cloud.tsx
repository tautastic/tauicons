import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const UploadCloud: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M16 16l-4-4-4 4"></path>
      <path d="M12 12v9"></path>
      <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"></path>
      <path d="M16 16l-4-4-4 4"></path>
    </svg>
  );
});

UploadCloud.displayName = "UploadCloud";

export default UploadCloud;
