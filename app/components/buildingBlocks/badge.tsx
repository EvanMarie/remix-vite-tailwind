// Badge.tsx
import React from "react";
import Text from "./textComponents";
import { subtleShadow, leading } from "styles";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "solid" | "subtle" | "outline";
  className?: string;
  style?: React.CSSProperties;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  label?: string;
  bgColor?: string;
  textColor?: string;
}

export default function Badge({
  className = "",
  style,
  rounded = "md",
  children,
  label,
  bgColor = "bg-dt-400",
  textColor = "text-dt-900",
  ...props
}: BadgeProps) {
  const baseClasses = `px-[1vh] py-[0.1vh] text-xs font-semibold ${leading.xxsTight}`;

  // Merge Tailwind classes with the provided className prop
  const badgeClasses = `subtleShadow ${baseClasses} ${rounded}  ${bgColor} ${textColor} ${className}`;

  return (
    <div className={badgeClasses} style={style} {...props}>
      <Text>{label?.toUpperCase()}</Text>
    </div>
  );
}
