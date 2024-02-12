import React, { forwardRef, type MouseEventHandler } from "react";
import { Spinner } from "./spinner";
import Tooltip, { TooltipPlacement } from "./tooltip";
import {
  subtleShadow,
  subtleShadowHover,
  leading,
  lightTextShadowHover,
  normalButtonColors,
  negativeButtonColors,
  metallicEdgesHover,
  iconButtonDefaultRadius,
  DefaultIcon,
} from "styles";
import Text from "./text";
import HStack from "./hStack";
import Flex from "./flex";
import { NavLink } from "@remix-run/react";

interface IconButtonProps extends React.HTMLProps<HTMLButtonElement> {
  icon?: React.ComponentType<{ className?: string }>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  iconSize?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isLiked?: boolean;
  isMinimal?: boolean;
  isUnstyled?: boolean;
  noStyles?: boolean;
  isSmall?: boolean;
  isNegative?: boolean;
  isNegativeSmall?: boolean;
  isActive?: boolean;
  label?: string;
  to?: string;
  pos?: "absolute" | "relative" | "fixed" | "sticky" | "static" | "inherit";
  t?: string;
  l?: string;
  r?: string;
  b?: string;
  textLeft?: string;
  textRight?: string;
  textStyles?: string;
  type?: "button" | "submit" | "reset";
  textButtonPadding?: string;
  buttonWidth?: string;
  textButtonIconSize?: string;
  buttonHeight?: string;
  buttonRadius?: string;
  tooltipPlacement?: TooltipPlacement;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon: Icon = DefaultIcon,
      to,
      onClick,
      className = "",
      iconSize = "text-[2.5vh]",
      isLoading = false,
      isMinimal = false,
      isSmall = false,
      isDisabled = false,
      isUnstyled = false,
      isLiked = false,
      noStyles = false,
      textButtonIconSize = "text-[2vh]",
      label,
      isNegative = false,
      isNegativeSmall = false,
      buttonWidth = "w-[3.7vh]",
      buttonHeight = "h-[3.7vh]",
      buttonRadius = iconButtonDefaultRadius,
      pos,
      t,
      l,
      r,
      b,
      type = "button",
      tooltipPlacement = "bottomRight",
      textLeft,
      textRight,
      textButtonPadding = isMinimal ? "px-[0.8vh]" : "px-[1vh] py-[0.4vh]",
      textStyles = isSmall
        ? `${leading.xsTight} text-[1.7vh]`
        : isMinimal
        ? `${leading.xxsTight} text-[1.5vh]`
        : `${leading.xsTight} text-[1.9vh] md:text-[2.2vh]`,
      ...props
    },
    ref
  ) => {
    const useButtonHeight = textLeft || textRight ? "h-fit" : buttonHeight;
    const fullStyle = `${normalButtonColors} text-[1.5vh] md:text-[2vh] leading-[3.5vh] lg:text-[2.3vh] lg:leading-[3.5vh] ${
      textLeft || textRight ? "w-fit" : buttonWidth
    }  ${useButtonHeight} `;
    const isSmallStyles = `${normalButtonColors} text-[1.5vh] leading-[2.5vh] md:text-[2vh] md:leading-[3vh] ${
      textLeft || textRight ? "w-fit px-[0.2vh]" : "w-[2.8vh] md:w-[3.2vh]"
    } h-[2.8vh] md:h-[3.5vh]`;
    const negativeStyles = `text-[2vh] leading-[3.5vh] lg:text-[2.3vh] lg:leading-[3.5vh] fullHD:p-[1vh] ${
      textLeft || textRight ? "w-fit" : buttonWidth
    }  ${buttonHeight} ${negativeButtonColors} hover:metallicEdges`;
    const negativeSmallStyles = `text-[1.7vh] leading-[3vh] ${
      textLeft || textRight ? "w-fit px-[0.5vh]" : "w-[3.2vh]"
    } h-[3.2vh] ${negativeButtonColors} hover:metallicEdges`;
    const unstyledStyles = `text-[2.5vh] leading-[3.5vh] ${
      textLeft || textRight ? "w-fit" : "w-[2.8vh]"
    } h-[2.8vh] text-dt-100 hover:text-dt-300 transition duration-500 ease-in-out z-10`;
    const noStylesStyles = "";
    const isLikedStyle = `text-[1.7vh] leading-[3vh] ${
      textLeft || textRight ? "w-fit px-[0.5vh]" : "w-[3.2vh]"
    } h-[3.2vh] text-dt-700 bg-dt-400 border subtleShadow border-solid border-[0.2vh] border-dt-400 transition duration-500 ease-in-out hover:bg-dt-400 hover:text-dt-900 hover:border-dt-900 ${subtleShadowHover} ${lightTextShadowHover}`;

    const buttonStyles = isSmall
      ? isSmallStyles
      : isUnstyled
      ? unstyledStyles
      : isNegative
      ? negativeStyles
      : isLiked
      ? isLikedStyle
      : isNegativeSmall
      ? negativeSmallStyles
      : noStyles
      ? noStylesStyles
      : fullStyle;

    const useIconSize =
      isSmall || isLiked
        ? "text-[1.5vh] md:text-[2vh]"
        : isMinimal
        ? "text-[2.2vh]"
        : iconSize;

    function ButtonInsides() {
      return (
        <Flex
          className={`flex flex-shrink-0 font-semibold justify-center items-center disabled:opacity-40 disabled:read-only disabled:pointer-events-none ${buttonRadius} ${buttonStyles} ${className}`}
        >
          <Flex
            className={`w-full h-full justify-center items-center ${buttonRadius}`}
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                {textLeft ? (
                  <HStack
                    gap={isMinimal ? `gap-[0.1vh]` : `gap-[0.8vh]`}
                    className={`w-fit ${textButtonPadding} items-center ${buttonRadius} `}
                  >
                    {" "}
                    <Flex>
                      <Text className={`${textStyles}`}>{textLeft}</Text>
                    </Flex>
                    <div className={`${textButtonIconSize}`}>
                      <Icon className="rounded-none" />
                    </div>
                  </HStack>
                ) : textRight ? (
                  <HStack
                    gap={isMinimal ? `gap-[0.1vh]` : `gap-[0.3vh]`}
                    className={`w-fit ${textButtonPadding} items-center ${buttonRadius} `}
                  >
                    <div className={`${textButtonIconSize}`}>
                      <Icon className="rounded-none" />
                    </div>
                    <Flex>
                      <Text className={`${textStyles}`}>{textRight}</Text>
                    </Flex>
                  </HStack>
                ) : (
                  <div className={`${useIconSize} ${iconButtonDefaultRadius}`}>
                    <Icon className="rounded-none" />
                  </div>
                )}
              </>
            )}
          </Flex>
        </Flex>
      );
    }
    return (
      <div className={`${pos} ${t} ${r} ${l} ${b}`}>
        <Tooltip label={isDisabled ? null : label} placement={tooltipPlacement}>
          <button
            ref={ref}
            type={type}
            onClick={onClick}
            disabled={isDisabled || isLoading}
            {...props}
          >
            {to ? (
              <NavLink to={to} className="w-full h-full">
                <ButtonInsides />
              </NavLink>
            ) : (
              <ButtonInsides />
            )}
          </button>
        </Tooltip>
      </div>
    );
  }
);

IconButton.displayName = "IconButton"; // Set the display name

export default IconButton;
