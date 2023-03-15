import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Bookmark: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"></path>
    </svg>
  );
});

Bookmark.displayName = "Bookmark";

export default Bookmark;
