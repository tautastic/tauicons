import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Search: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
      <path d="M16 16l4.5 4.5"></path>
    </svg>
  );
});

Search.displayName = "Search";

export default Search;
