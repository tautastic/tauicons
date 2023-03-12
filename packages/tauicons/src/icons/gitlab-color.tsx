import { forwardRef } from "react";
import { type Icon, type IconProps, DefaultIconProps } from "../index";

const GitlabColor: Icon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => {
  const iconProps = { ...DefaultIconProps, ...props };
  return (
    <svg
      ref={ref}
      width={iconProps.size}
      height={iconProps.size}
      viewBox="0 0 24 22"
      stroke="none"
      fill={iconProps.color}
      strokeWidth={iconProps.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path
        fill="#FCA326"
        d="M1.279 8.29.044 12.294c-.117.367 0 .78.325 1.014l11.323 8.23-.009-.012-.03-.039L1.279 8.29zm21.713 5.018a.905.905 0 0 0 .325-1.014L22.085 8.29 11.693 21.52l11.299-8.212z"
      />
      <path fill="#E24329" d="m1.279 8.29 10.374 13.197.03.039.01-.006L22.085 8.29H1.28z" />
      <path
        fill="#FC6D26"
        d="m15.982 8.29-4.299 13.236-.004.011.014-.017L22.085 8.29h-6.103zm-8.606 0H1.279l10.374 13.197L7.376 8.29z"
      />
      <path
        fill="#E24329"
        d="m18.582.308-2.6 7.982h6.103L19.48.308c-.133-.41-.764-.41-.897 0zM1.279 8.29 3.88.308c.133-.41.764-.41.897 0l2.6 7.982H1.279z"
      />
    </svg>
  );
});

GitlabColor.displayName = "GitlabColor";

export default GitlabColor;
