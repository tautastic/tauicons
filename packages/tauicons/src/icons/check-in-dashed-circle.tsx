import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const CheckInDashedCircle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg
      ref={ref}
      width={iconProps.size}
      height={iconProps.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={iconProps.color}
      strokeWidth={iconProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path
        d="m8 11.857 2.5 2.5L15.857 9"
        stroke="#888"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M21.77 14.18c.16-.7.24-1.43.24-2.17s-.09-1.47-.24-2.17M3.58 17.37c.79 1.23 1.83 2.28 3.07 3.07M9.84 21.77c.7.16 1.43.24 2.17.24s1.47-.09 2.17-.24M17.37 20.44c1.23-.79 2.28-1.83 3.07-3.07M6.65 3.58c-1.23.79-2.28 1.83-3.07 3.07M2.25 9.84c-.16.7-.24 1.43-.24 2.17s.09 1.47.24 2.17M14.18 2.25c-.7-.16-1.43-.24-2.17-.24s-1.47.09-2.17.24M20.44 6.65c-.79-1.23-1.83-2.28-3.07-3.07"
        stroke="#888"
        strokeWidth="1.52"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
});

CheckInDashedCircle.displayName = "CheckInDashedCircle";

export default CheckInDashedCircle;
