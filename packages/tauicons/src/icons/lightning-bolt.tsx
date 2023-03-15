import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const LightningBolt: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path
        d="M11.0001 1.66663L2.66675 11.6666H10.1667L9.33341 18.3333L17.6667 8.33329H10.1667L11.0001 1.66663Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
});

LightningBolt.displayName = "LightningBolt";

export default LightningBolt;
