import { highlightedText } from "styles";
import Text from "./textComponents";
import VStack from "./vStack";
import Flex from "./flex";

interface LabelValueProps {
  label?: string;
  value?: string;
  direction?: "flex-row" | "flex-column";
  containerClassName?: string;
  labelClassName?: string;
  valueClassName?: string;
}

export default function LabelValue({
  label,
  value,
  direction = "flex-row",
  containerClassName = "",
  labelClassName = "",
  valueClassName = "",
}: LabelValueProps) {
  return (
    <>
      {" "}
      {direction === "flex-row" ? (
        <Flex className={`${containerClassName} quadHD:text-lg`}>
          <Text>
            <span className={`${highlightedText} ${labelClassName}`}>
              {label}:{" "}
            </span>
            <span className={`${valueClassName}`}>{value}</span>
          </Text>
        </Flex>
      ) : (
        <VStack
          className={`w-full ${containerClassName}`}
          align="start"
          gap="gap-0"
        >
          <Text className={`${highlightedText} ${labelClassName}`}>
            {label}
          </Text>
          {value && (
            <Text className={`text-col-100 ${valueClassName}`}>{value}</Text>
          )}
        </VStack>
      )}
    </>
  );
}
