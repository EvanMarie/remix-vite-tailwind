import React, {
  ReactNode,
  CSSProperties,
  MouseEvent,
  KeyboardEvent,
} from "react";

interface FlexProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
  id?: string;
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ children, style, onClick, onKeyDown, className = "", id }, ref) => {
    return (
      <div
        ref={ref}
        id={id}
        role="button"
        tabIndex={0}
        className={`flex ${className}`}
        style={style}
        onClick={() => onClick}
        onKeyDown={onKeyDown}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = "Flex";

export default Flex;
