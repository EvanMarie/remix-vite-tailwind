import React from "react";
import Text from "./text";
import HStack from "./hStack";
import Flex from "./flex";

interface IconProps {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  iconSize?: string;
  pos?: "absolute" | "relative" | "fixed" | "sticky" | "static" | "inherit";
  t?: string;
  l?: string;
  r?: string;
  b?: string;
  textLeft?: string;
  textRight?: string;
  textStyles?: string;
  textButtonPadding?: string;
  iconClassName?: string;
  textGap?: string;
  textPadding?: string;
  w?: string;
  h?: string;
  rounded?: string;
  onClick?: () => void;
}

export default function Icon({
  icon: IconComponent,
  className = "",
  iconClassName = "",
  iconSize = "text-[2vh] md:text-[2.5vh]",
  w = "w-fit",
  h = "h-fit",
  pos,
  t,
  l,
  r,
  b,
  textStyles = "text-[1.6vh] md:text-[2vh] text-dt-400",
  textLeft,
  textRight,
  textGap = "gap-[0.8vh]",
  textPadding,
  rounded = "rounded-[0.5vh]",
  onClick,
}: IconProps) {
  return (
    <Flex
      className={`${w} ${h} justify-center items-center ${pos} ${t} ${r} ${l} ${b} ${className} ${rounded}`}
      onClick={onClick}
    >
      {textLeft ? (
        <HStack gap={textGap} className={`w-fit items-center ${rounded}`}>
          {" "}
          <Flex className={`${rounded}`}>
            <Text className={`${textStyles}`}>{textLeft}</Text>
          </Flex>
          <div className={`${iconSize} ${rounded}`}>
            <IconComponent />
          </div>
        </HStack>
      ) : textRight ? (
        <HStack
          gap={textGap}
          className={`w-fit ${textPadding} items-center ${rounded}`}
        >
          <div className={`${iconSize} ${rounded}`}>
            <IconComponent className={iconClassName} />
          </div>
          <Flex className={`${rounded}`}>
            <Text className={`${textStyles}`}>{textRight}</Text>
          </Flex>
        </HStack>
      ) : (
        <div className={`${iconSize} ${rounded}`}>
          <IconComponent className={`${rounded}`} />
        </div>
      )}
    </Flex>
  );
}
