import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const MessageSquare: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg ref={ref} width={iconProps.size} height={iconProps.size} {...iconProps}>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
    </svg>
  );
});

MessageSquare.displayName = "MessageSquare";

export default MessageSquare;
