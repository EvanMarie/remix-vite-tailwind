// app/components/Slider.tsx
import React from "react";
import HStack from "./hStack";
import Text from "./text";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import IconButton from "./iconButton";
import FlexFull from "./flexFull";
import HStackFull from "./hStackFull";
import Input from "./input";

interface CounterInputProps {
  label?: string;
  direction?: "flex-col" | "flex-row";
  labelColor?: string;
  min?: number;
  max?: number;
  width?: string;
  value?: number;
  labelTextSizes?: string;
  onChange: (value: number) => void;
  iconTextColor?: string;
  showMaxMin?: boolean;
  showInput?: boolean;
  showButtons?: boolean;
  inputWidth?: string;
  className?: string;
}

const CounterInput: React.FC<CounterInputProps> = ({
  label,
  width,
  direction = "flex-col",
  min = 0,
  max = 100,
  value,
  labelColor = "text-cyan-200 textShadow",
  labelTextSizes = "text-sm-tight md:text-md-tight",
  onChange,
  iconTextColor = "text-col-100",
  showMaxMin = false,
  showInput = true,
  showButtons = false,
  inputWidth,
  className,
}) => {
  const sliderValue = value ?? min;

  const step = max - min <= 5 ? 0.1 : 1;

  // Increment and decrement now use sliderValue
  const incrementValue = () => {
    const newValue = Math.min(sliderValue + step, max); // Use sliderValue
    onChange(newValue);
  };

  const decrementValue = () => {
    const newValue = Math.max(sliderValue - step, min); // Use sliderValue
    onChange(newValue);
  };

  return (
    <FlexFull
      className={`${direction} ${width} gap-[0px] text-xs text-col-100 ${className}`}
    >
      <HStack
        className={` ${labelTextSizes} text-col-100 justify-center whitespace-nowrap items-center`}
      >
        <IconButton
          type="smallUnstyled"
          icon={FiMinusCircle}
          onClick={decrementValue}
          iconClassName={iconTextColor}
          containerClassName={!showButtons ? "hidden" : ""}
        />
        <Text className={`${labelColor}`}>{label}: </Text>
        {showInput ? (
          <Input
            defaultValue={value}
            onChange={(e) => onChange(+e.target.value)}
            maxLength={3}
            className={inputWidth}
          />
        ) : (
          <Text>{value}</Text>
        )}

        <IconButton
          type="smallUnstyled"
          icon={FiPlusCircle}
          onClick={incrementValue}
          iconClassName={iconTextColor}
          containerClassName={!showButtons ? "hidden" : ""}
        />
      </HStack>
      {showMaxMin && (
        <HStackFull>
          <HStackFull className="items-center">
            <Text>max:</Text>
            <span>{min}</span>
          </HStackFull>{" "}
          <HStackFull className="items-center" gap="gap-[0.4vh]">
            <Text>min:</Text>
            <span>{max}</span>
          </HStackFull>
        </HStackFull>
      )}
    </FlexFull>
  );
};

export default CounterInput;
