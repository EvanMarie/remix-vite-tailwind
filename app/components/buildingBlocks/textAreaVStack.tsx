import React from "react";
import { HeadingMD, HeadingSM } from "./textComponents";
import TextArea from "./textArea";
import VStack from "./vStack";

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
      gap="gap-[0.1vh]"
    >
      {labelSize === "small" ? (
        <HeadingSM
          shadow="textFog"
          cursive={labelIsCursive}
          color={labelColor}
          className={`${labelClassName}`}
        >
          {label}
        </HeadingSM>
      ) : (
        <>
          <HeadingMD
            shadow="textFog"
            color={labelColor}
            className={`hidden md:flex pb-[1vh] ${labelClassName}`}
            cursive={labelIsCursive}
          >
            {label}
          </HeadingMD>
          <HeadingSM
            shadow="textFog"
            color={labelColor}
            className={`flex md:hidden ${labelClassName}`}
            cursive={labelIsCursive}
          >
            {label}
          </HeadingSM>
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
