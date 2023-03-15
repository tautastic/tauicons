import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const RefreshCcw: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M1 4v6h6"></path>
      <path d="M23 20v-6h-6"></path>
      <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"></path>
    </svg>
  );
});

RefreshCcw.displayName = "RefreshCcw";

export default RefreshCcw;
