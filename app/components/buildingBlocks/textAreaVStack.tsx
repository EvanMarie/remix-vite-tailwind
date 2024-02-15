import React from "react";
import TextArea from "./textArea";
import VStack from "./vStack";
import Heading from "./newTextComponents";
import Box from "./box";

// Update the onChange type to be more generic
interface TextAreaVStackProps {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  type?: string;
  textAreaWidth?: string;
  textAreaHeight?: string;
  textAreaClassName?: string;
  isEditable?: boolean;
  autoFocus?: boolean;
  labelSize?: "normal" | "small";
  labelColor?: string;
  labelClassName?: string;
  labelIsCursive?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export default function TextAreaVStack({
  label,
  className,
  style,
  name,
  placeholder,
  value,
  defaultValue,
  textAreaWidth,
  textAreaHeight,
  textAreaClassName,
  labelClassName,
  autoFocus,
  labelColor,
  labelSize = "normal",
  labelIsCursive = true,
  onChange,
}: TextAreaVStackProps) {
  return (
    <VStack
      className={`w-full ${className}`}
      align="start"
      style={style}
      gap="gap-[0px]"
    >
      {labelSize === "small" ? (
        <Heading
          isCursive={labelIsCursive}
          color={labelColor}
          className={`${labelClassName}`}
          layout="text-md-normal"
          text={label}
        />
      ) : (
        <>
          <Box className="hidden md:flex w-full">
            <Heading
              isCursive={labelIsCursive}
              color={labelColor}
              className={`${labelClassName}`}
              layout="text-lg-tight"
              text={label}
            />
          </Box>
          <Box className="flex md:hidden w-full">
            <Heading
              isCursive={labelIsCursive}
              color={labelColor}
              className={` ${labelClassName}`}
              layout="text-md-tight"
              text={label}
            />
          </Box>
        </>
      )}

      <TextArea
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
        textAreaHeight={textAreaHeight}
        name={name}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={`${textAreaWidth} ${textAreaHeight} ${textAreaClassName}`}
      />
    </VStack>
  );
}
