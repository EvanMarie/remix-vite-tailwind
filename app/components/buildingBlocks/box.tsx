import React, { type ReactNode, type RefObject } from "react";

interface BoxProps {
  children?: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  ref?: RefObject<HTMLDivElement>;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      children,
      onClick,
      style = {},
      className = "",
      onMouseEnter,
      onMouseLeave,
    },
    ref
  ) => {
    return (
      <div
        className={` ${className}`}
        style={{ ...style }}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref} // Add this line
      >
        {children}
      </div>
    );
  }
);

Box.displayName = "Box";

export default Box;
