import { MouseEventHandler } from "react";
import HStack from "./hStack";
import FlexFull from "./flexFull";
import BouncingDots from "../specialty/bouncingDots";
import Icon from "./icon";
import { NavLink } from "@remix-run/react";

export type ButtonType =
  | "normal"
  | "smallNormal"
  | "negative"
  | "smallNegative"
  | "unstyled"
  | "smallUnstyled";

export default function Button({
  className,
  buttonText = "",
  padding = "px-[1vh] py-[0px]",
  onClick,
  iconLeft,
  iconRight,
  ref,
  htmlType = "button",
  iconStyle,
  isLoading,
  isDisabled,
  type = "normal",
  width = "w-fit",
  height,
  target,
  to,
}: {
  className?: string;
  buttonText?: string;
  padding?: string;
  ref?: React.MutableRefObject<HTMLButtonElement | null>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconLeft?: React.ComponentType<{ className?: string }>;
  iconRight?: React.ComponentType<{ className?: string }>;
  iconStyle?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  htmlType?: "button" | "submit" | "reset";
  to?: string;
  width?: string;
  height?: string;
  target?: string;
  type?:
    | "normal"
    | "smallNormal"
    | "negative"
    | "smallNegative"
    | "unstyled"
    | "smallUnstyled";
}) {
  const buttonClass =
    type === "normal"
      ? "normalButtonStyles"
      : type === "smallNormal"
      ? "smallButtonStyles"
      : type === "negative"
      ? "negativeButtonStyles"
      : type === "smallNegative"
      ? "smallNegativeButtonStyles"
      : type === "unstyled"
      ? "unstyledButtonStyles"
      : "smallUnstyledButtonStyles";

  const buttonHeight = height
    ? height
    : type === "normal"
    ? "h-[3.5vh]"
    : type === "smallNormal"
    ? "h-[2.6vh]"
    : type === "negative"
    ? "h-[3.5vh]"
    : type === "smallNegative"
    ? "h-[2.6vh]"
    : type === "unstyled"
    ? "h-[3.5vh]"
    : "h-[2.6vh]";

  const displayIconSize =
    type === "normal"
      ? "text-[2.3vh]"
      : type === "smallNormal"
      ? "text-[1.7vh]"
      : type === "negative"
      ? "text-[2.3vh]"
      : type === "smallNegative"
      ? "text-[1.7vh]"
      : type === "unstyled"
      ? "text-[2.3vh]"
      : "text-[1.7vh]";

  function ButtonInsides() {
    // Combine all classes and include conditional classes for disabled state
    const combinedClasses = `${buttonClass} ${width} ${buttonHeight} ${className} ${padding} relative ${
      isDisabled ? "opacity-40 cursor-not-allowed" : ""
    }`;

    return (
      <HStack className={combinedClasses}>
        {isLoading &&
          buttonText !== "" &&
          type !== "unstyled" &&
          type !== "smallUnstyled" && (
            <FlexFull className="absolute top-0 left-0 h-full justify-center items-center z-10">
              <BouncingDots dotCount={3} color="white" dotSize={7} speed="3s" />
            </FlexFull>
          )}

        {iconLeft && (
          <Icon
            icon={iconLeft}
            iconClassName={`${displayIconSize} ${iconStyle}`}
          />
        )}
        {buttonText}
        {iconRight && (
          <Icon
            icon={iconRight}
            iconClassName={`${displayIconSize} ${iconStyle}`}
          />
        )}
      </HStack>
    );
  }

  return (
    <>
      {to ? (
        <button
          onClick={!isDisabled ? onClick : undefined}
          disabled={isDisabled}
          type={htmlType}
          ref={ref}
        >
          <NavLink to={to} target={target ? target : undefined}>
            <ButtonInsides />
          </NavLink>
        </button>
      ) : (
        <button
          onClick={!isDisabled ? onClick : undefined}
          disabled={isDisabled}
          type={htmlType}
          ref={ref}
        >
          <ButtonInsides />
        </button>
      )}
    </>
  );
}
