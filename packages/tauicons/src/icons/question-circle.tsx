import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const QuestionCircle: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"></path>
      <circle cx="12" cy="17" r=".5"></circle>
    </svg>
  );
});

QuestionCircle.displayName = "QuestionCircle";

export default QuestionCircle;
