import type { ReactNode, MouseEventHandler } from "react";
import {
  buttonDefaultRadius,
  isUnstyledStyles,
  negativeSmallStyles,
  negativeStyles,
  normalButtonBase,
  normalButtonPadding,
  smallButtonBase,
  smallButtonPadding,
} from "styles";
import BouncingDots from "../specialty/bouncingDots";
import Flex from "./flex";
import { NavLink } from "@remix-run/react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  w?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  buttonClassName?: string;
  ref?: React.MutableRefObject<HTMLButtonElement | null>;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isSmall?: boolean;
  isUnstyled?: boolean;
  isNegative?: boolean;
  isNegativeSmall?: boolean;
  textWrap?: boolean;
  to?: string;
}

export default function Button({
  children,
  type = "button",
  onClick,
  buttonClassName = "",
  isLoading,
  isDisabled,
  w = "w-fit",
  isSmall = false,
  isUnstyled = false,
  isNegative = false,
  className = "",
  isNegativeSmall = false,
  ref,
  to,
  textWrap = false,
  ...props
}: ButtonProps) {
  const buttonClass = textWrap ? "" : "whitespace-nowrap";
  const padding =
    isNegativeSmall || isSmall ? smallButtonPadding : normalButtonPadding;

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {to ? (
        <NavLink to={to} className={`w-full h-full overflow-hidden`}>
          <Flex
            className={`${w} overflow-hidden ${buttonDefaultRadius} ${buttonClass} ${
              isSmall
                ? smallButtonBase
                : isUnstyled
                ? isUnstyledStyles
                : isNegative
                ? negativeStyles
                : isNegativeSmall
                ? negativeSmallStyles
                : normalButtonBase
            } ${buttonClassName}`}
          >
            {isLoading ? <BouncingDots /> : children}
          </Flex>
        </NavLink>
      ) : (
        <Flex className={`${padding} ${className} `}>
          {isLoading ? <BouncingDots /> : children}
        </Flex>
      )}
    </button>
  );
}
