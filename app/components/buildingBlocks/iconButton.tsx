import { MouseEventHandler } from "react";
import HStack from "./hStack";
import FlexFull from "./flexFull";
import BouncingDots from "../specialty/bouncingDots";
import { Spinner } from "./spinner";
import Icon from "./icon";
import { NavLink } from "@remix-run/react";

export default function IconButton({
  className,
  buttonText = "",
  onClick,
  iconLeft,
  iconRight,
  ref,
  htmlType = "button",
  iconSize,
  isLoading,
  isDisabled,
  type = "normal",
  width = "w-fit",
  to,
}: {
  className?: string;
  buttonText?: string;
  ref?: React.MutableRefObject<HTMLButtonElement | null>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconLeft?: React.ComponentType<{ className?: string }>;
  iconRight?: React.ComponentType<{ className?: string }>;
  iconSize?: string;
  iconButtonStyles?: string;
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
    | "smallUnstyled"
    | "icon"
    | "smallIcon";
}) {
  const buttonClass =
    type === "normal"
      ? "normalButtonStyles"
      : type === "smallNormal"
      ? "smallNormalButtonStyles"
      : type === "negative"
      ? "negativeButtonStyles"
      : type === "smallNegative"
      ? "smallNegativeButtonStyles"
      : type === "unstyled"
      ? "unstyledButtonStyles"
      : "smallUnstyledButtonStyles";

  const displayIconSize = iconSize
    ? iconSize
    : type === "normal"
    ? "text-[1.7vh]"
    : type === "smallNormal"
    ? "text-[1.3vh]"
    : type === "negative"
    ? "text-[1.7vh]"
    : type === "smallNegative"
    ? "text-[1.7vh]"
    : type === "unstyled"
    ? "text-[1.7vh]"
    : "text-[1.3vh]";

  function ButtonInsides() {
    return (
      <button onClick={onClick} disabled={isDisabled} type={htmlType} ref={ref}>
        <HStack className={`${buttonClass} ${width} ${className} relative`}>
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
          {isLoading && (type === "icon" || type === "smallIcon") && (
            <Spinner />
          )}
          {iconLeft && <Icon icon={iconLeft} iconSize={displayIconSize} />}
          {buttonText}
          {iconRight && <Icon icon={iconRight} iconSize={displayIconSize} />}
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
