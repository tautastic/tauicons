import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const Serverless: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...props} viewBox="0 0 20 20">
      <defs>
        <mask id=":R5lb0tumol8m:">
          <path
            d="M9.97057 2.28339L2.94116 6.50103V15.4853L6.8107 13.2091L9.34061 13.6481L4 16.5L10.4392 18.2167L17 14.4677V5.92525L12.3137 8.20145L9.18767 7.74902L16.5 4L9.97057 2.28339Z"
            fill="white"
          ></path>
        </mask>
      </defs>
      <path
        d="M5.61475 15.0264L9.31978 16.264C9.80366 16.4256 10.3332 16.3768 10.7794 16.1296L15.1719 13.6953C15.7509 13.3744 16.1102 12.7646 16.1102 12.1026V7.38195L4.0481 13.1753V8.00905C4.0481 7.34706 4.40736 6.73721 4.98638 6.41632L9.2517 4.05254C9.77041 3.76508 10.3966 3.74822 10.93 4.00734L13.8437 5.42274"
        mask="url(#:R5lb0tumol8m:)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
});

Serverless.displayName = "Serverless";

export default Serverless;
