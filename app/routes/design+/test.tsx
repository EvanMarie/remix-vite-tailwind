import { NavLink } from "@remix-run/react";
import { MouseEventHandler } from "react";
import { StarFilledIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStack from "~/components/buildingBlocks/hStack";
import Icon from "~/components/buildingBlocks/icon";
import { Spinner } from "~/components/buildingBlocks/spinner";
import Text from "~/components/buildingBlocks/textComponents";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import BouncingDots from "~/components/specialty/bouncingDots";

export default function TextRoute() {
  function Button({
    className,
    buttonText = "",
    onClick,
    iconLeft,
    iconRight,
    iconSize = "text-[1.8vh]",
    isLoading,
    isDisabled,
    type = "normal",
    width = "w-fit",
    to,
  }: {
    className?: string;
    buttonText?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    iconLeft?: React.ComponentType<{ className?: string }>;
    iconRight?: React.ComponentType<{ className?: string }>;
    iconSize?: string;
    iconButtonStyles?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
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

    function ButtonInsides() {
      return (
        <button onClick={onClick} disabled={isDisabled}>
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
            {iconLeft && <Icon icon={iconLeft} iconSize={iconSize} />}
            {buttonText}
            {iconRight && <Icon icon={iconRight} iconSize={iconSize} />}
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

  return (
    <VStackFull className="justify-center p-[2vh]">
      This
      <Button
        iconLeft={StarFilledIcon}
        buttonText="this"
        onClick={() => console.log("THIS!")}
      />
      <VStackFull className={`lightGlow`}>
        <Text>Blah blah blah</Text>
        <Text>Blah blah blah</Text>
        <div className="p-[2vh] bg-gray-400 textGlow text-[1.5vh">
          This text will have a light text shadow or an HD version on fullHD
          screens.
        </div>

        <div className="metallicEdges hover:metallicEdgesHover bg-black text-white">
          Content here
        </div>
        <Box className="border-300">This</Box>

        <Text className="text-xs-tight">text-xs-tight</Text>
        <Text className="text-xs-normal">text-xs-normal</Text>
        <Text className="text-xs-loose">text-xs-loose</Text>
        <Text className="text-sm-tight">text-sm-tight</Text>
        <Text className="text-md-tight">text-md-tight</Text>
        <Text className="text-lg-tight">text-lg-tight</Text>
        <Text className="text-xl-tight">text-xl-tight</Text>
        <Text className="text-xxl-tight">text-xxl-tight</Text>
        <Text className="text-xxxl-tight">text-xxxl-tight</Text>
        <Text className="text-mega-tight">text-mega-tight</Text>
        <Text className="text-too-big-tight">text-too-big-tight</Text>
        <Text className="text-insane-tight">text-insane-tight</Text>
      </VStackFull>
    </VStackFull>
  );
}
