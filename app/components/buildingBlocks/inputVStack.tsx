/* eslint-disable jsx-a11y/no-autofocus */
import Input from "./input";
import { HeadingMD, HeadingSM } from "./textComponents";
import VStack from "./vStack";
import ValidatedInput from "./validatedInput";

interface InputVStackProps {
  labelSize?: "normal" | "small";
  labelColor?: string;
  labelClassName?: string;
  labelIsCursive?: boolean;
  isValidated?: boolean;
  validationMin?: number;
  validationMax?: number;
  autoFocus?: boolean;
  isRequired?: boolean;
  style?: React.CSSProperties;
  label: string;
  isEditable?: boolean;
  className?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputVStack({
  labelColor,
  labelSize = "normal",
  labelIsCursive = true,
  labelClassName,
  autoFocus = false,
  validationMin,
  validationMax,
  isRequired,
  label,
  style,
  className,
  isValidated,
  name,
  placeholder,
  value,
  defaultValue,
  type,
  onChange,
}: InputVStackProps) {
  return (
    <VStack
      className={` leading-1rem w-full ${className}`}
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

      {isValidated && validationMax ? (
        <ValidatedInput
          autoFocus={autoFocus}
          isRequired={isRequired}
          min={validationMin}
          max={validationMax}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      ) : (
        <Input
          autoFocus={autoFocus}
          required={isRequired}
          name={name}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          type={type}
          onChange={onChange}
        />
      )}
    </VStack>
  );
}
