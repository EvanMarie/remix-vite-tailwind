import { ReactNode } from "react";

interface CenterProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  id?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function Center({
  children,
  style,
  onClick,
  onKeyDown,
  className = "",
  id,
  onMouseEnter,
  onMouseLeave,
}: CenterProps) {
  const interactiveProps = onClick
    ? {
        role: "presentation",
        tabIndex: 0,
        onClick,
        onKeyDown,
      }
    : {};

  return (
    <div
      id={id}
      className={`flex justify-center items-center ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      {...interactiveProps}
    >
      {children}
    </div>
  );
}
