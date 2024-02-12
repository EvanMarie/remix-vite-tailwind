import React from "react";

interface HStackProps {
  children?: React.ReactNode;
  gap?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

// Use React.forwardRef to forward the ref to the div element
const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  (
    {
      children,
      onClick = () => ({}),
      gap = "gap-2",
      className = "",
      style = {},
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
    },
    ref
  ) => {
    return (
      <div
        className={`flex flex-row ${gap} ${className}`}
        onClick={onClick}
        ref={ref}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {children}
      </div>
    );
  }
);

HStack.displayName = "HStack"; // Assigning a display name for debugging purposes

export default HStack;
