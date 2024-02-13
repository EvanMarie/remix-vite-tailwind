import { MouseEventHandler } from "react";
import { Spinner } from "./spinner";
import Icon from "./icon";
import { NavLink } from "@remix-run/react";
import Flex from "./flex";

export default function IconButton({
  icon,
  containerClassName,
  iconClassName,
  onClick,
  ref,
  htmlType = "button",
  isLoading,
  isDisabled,
  type = "normal",
  to,
}: {
  containerClassName?: string;
  iconClassName?: string;
  icon: React.ComponentType<{ className?: string }>;
  ref?: React.MutableRefObject<HTMLButtonElement | null>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  isDisabled?: boolean;
  htmlType?: "button" | "submit" | "reset";
  to?: string;

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
      ? "text-[2.5vh]"
      : type === "smallNormal"
      ? "text-[1.6vh]"
      : type === "negative"
      ? "text-[2.5vh] "
      : type === "smallNegative"
      ? "text-[1.6vh]"
      : type === "unstyled"
      ? "text-[2.5vh]"
      : "text-[1.6vh]";

  const iconButtonSize =
    type === "normal"
      ? "w-[3.5vh] h-[3.5vh]"
      : type === "smallNormal"
      ? "w-[3vh] h-[3vh]"
      : type === "negative"
      ? " w-[3.5vh] h-[3.5vh]"
      : type === "smallNegative"
      ? "w-[3vh] h-[3vh]"
      : type === "unstyled"
      ? "w-[3.5vh] h-[3.5vh]"
      : "text-[2vh] w-[3vh] h-[3vh]";

  function ButtonInsides() {
    return (
      <button onClick={onClick} disabled={isDisabled} type={htmlType} ref={ref}>
        <Flex
          className={`${iconButtonSize} ${containerClassName} ${buttonClass}`}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <Icon
              icon={icon}
              iconClassName={`${displayIconSize} ${iconClassName}`}
              containerClassName={`flex w-full h-full justify-center items-center`}
            />
          )}
        </Flex>
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
