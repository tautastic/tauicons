import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CreditCard: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
      <path d="M1 10h22"></path>
    </svg>
  );
});

CreditCard.displayName = "CreditCard";

export default CreditCard;
