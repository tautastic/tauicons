import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Upload: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
      <path d="M17 8l-5-5-5 5"></path>
      <path d="M12 3v12"></path>
    </svg>
  );
});

Upload.displayName = "Upload";

export default Upload;
