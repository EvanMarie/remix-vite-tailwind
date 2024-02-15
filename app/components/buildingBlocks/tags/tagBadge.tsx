import HStack from "../hStack";
import Text from "../text";
import {
  AltCloseIcon,
  cardColors,
  textShadow,
  shadowNarrowNormal,
} from "styles";
import IconButton from "../iconButton";
import Flex from "../flex";
interface TagBadgeProps {
  tag: string;
  onClick?: (index: number) => void;
  color?: string;
  textShadow?: string;
  index?: number;
  bgColor?: string;
  className?: string;
}

export default function TagBadge({
  tag,
  color = "text-col-100",
  textShadow = textShadow,
  onClick,
  index,
  bgColor = cardColors[4],
  className = "",
}: TagBadgeProps) {
  return (
    <Flex
      className={`pl-[0.3vh] w-fit h-fit ${bgColor} bg-darkVioletGrad shadowNarrowNormal ${className}`}
    >
      <HStack
        className={`w-full h-full justify-between items-center flex-1 gap-[0.1vh]`}
      >
        <Text
          className={`text-[1.6vh] leading-[2vh] lowercase ${color} textShadow`}
        >
          {tag}
        </Text>
        {onClick && (
          <IconButton
            isUnstyled
            icon={AltCloseIcon}
            pos="inherit"
            label="remove"
            tooltipPlacement="bottom"
            onClick={
              typeof index !== "undefined" ? () => onClick(index) : undefined
            }
          />
        )}
      </HStack>
    </Flex>
  );
}
