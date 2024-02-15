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
    return (
      <button onClick={onClick} disabled={isDisabled} type={htmlType} ref={ref}>
        <HStack
          className={`${buttonClass} ${width} ${className} ${padding} relative`}
        >
          {isLoading &&
            buttonText !== "" &&
            type !== "unstyled" &&
            type !== "smallUnstyled" && (
              <FlexFull className="absolute top-0 left-0 h-full justify-center items-center z-10 bg-col-980">
                <BouncingDots
                  dotCount={3}
                  color="white"
                  dotSize={7}
                  speed="3s"
                />
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
      </button>
    );
  }

  return (
    <>
      {to ? (
        <NavLink to={to}>
          <ButtonInsides />
        </NavLink>
      ) : (
        <ButtonInsides />
      )}
    </>
  );
}
