import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const VercelTriangleFilled: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2L2 19.7778H22L12 2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={iconProps.strokeWidth}
      ></path>
    </svg>
  );
});

VercelTriangleFilled.displayName = "VercelTriangleFilled";

export default VercelTriangleFilled;
