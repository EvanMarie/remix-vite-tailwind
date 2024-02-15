import { useState } from "react";
import { MdCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import Box from "~/components/buildingBlocks/box";
import HStack from "~/components/buildingBlocks/hStack";
import Text from "~/components/buildingBlocks/text";

interface CheckboxProps {
  label: string;
  isDisabled?: boolean;
  isChecked?: boolean;
  onChange?: () => void;
  checkboxSize?: string;
  textSize?: string;
  textColor?: string;
  bgColor?: string;
  checkedBg?: string;
  checkedColor?: string;
  hoveredBg?: string;
  hoveredColor?: string;
  disabledBg?: string;
  disabledColor?: string;
  p?: string;
  onDisabledClick?: () => void;
  className?: string;
  containerWidth?: string;
}

export default function Checkbox({
  label,
  isDisabled = false,
  isChecked = false,
  onChange,
  checkboxSize = "text-[3vh]",
  textSize = "text-[1.7vh]",
  textColor = "text-col-100",
  bgColor = "transparent",
  checkedBg = "bg-col-100",
  checkedColor = "text-col-900",
  hoveredBg = `hover:cursor-pointer ${
    isChecked ? "checkedBg" : "hover:bg-transparent"
  } transition duration-300 ease-in-out`,
  hoveredColor = "hover:text-col-400 transition duration-300 ease-in-out",
  disabledBg = "bg-col-825 hovered:bg-col-825",
  disabledColor = "text-col-125 hovered:text-col-125",
  p = "pl-[pr-[0.2vh] py-[0px]",
  className = "",
  containerWidth = "w-full",
  onDisabledClick,
}: CheckboxProps) {
  const [checked, setIsChecked] = useState(isChecked);
  const [isHovered, setIsHovered] = useState(false);

  const handleCheckboxChange = () => {
    if (!isDisabled) {
      setIsChecked(!checked);
      onChange && onChange();
    }
  };

  let backgroundColor = bgColor;
  let textColorClass = textColor;
  let boxShadowClass = "";

  if (isDisabled) {
    backgroundColor = disabledBg;
    textColorClass = disabledColor;
    boxShadowClass = "shadow-inset";
  } else if (checked) {
    backgroundColor = checkedBg;
    textColorClass = checkedColor;
    boxShadowClass = "shadowNarrowNormal";
  } else if (isHovered) {
    backgroundColor = hoveredBg;
    textColorClass = hoveredColor;
  }

  return (
    <HStack
      className={`items-center  gap-[0.5vh] ${p} ${backgroundColor} ${textColorClass} ${boxShadowClass} ${containerWidth} ${className}`}
      onMouseEnter={() => !isDisabled && setIsHovered(true)}
      onMouseLeave={() => !isDisabled && setIsHovered(false)}
      onClick={isDisabled ? onDisabledClick : handleCheckboxChange}
    >
      <Box className={checkboxSize}>
        {checked ? <MdCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
      </Box>
      <Text className={textSize}>{label}</Text>
    </HStack>
  );
}
