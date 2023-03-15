import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Home: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
      <path d="M9 22V12h6v10"></path>
    </svg>
  );
});

Home.displayName = "Home";

export default Home;
