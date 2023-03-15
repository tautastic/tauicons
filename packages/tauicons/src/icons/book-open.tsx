import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const BookOpen: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path>
    </svg>
  );
});

BookOpen.displayName = "BookOpen";

export default BookOpen;
