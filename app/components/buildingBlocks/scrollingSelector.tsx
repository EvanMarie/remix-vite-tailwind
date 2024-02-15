import Button from "./button";
import FlexFull from "./flexFull";
import VStackFull from "./vStackFull";
import { useState } from "react";
import Box from "./box";
import { GetFromLink } from "~/utils/pathUtils";
import Heading from "./headingText";
import Text from "./text";

export default function ScrollingSelector({
  options,
  heading,
  selectedOption,
  selectedOnTop = true,
  bg = "bg-col-800",
  border,
}: {
  options: string[];
  heading: string;
  selectedOption?: string;
  selectedOnTop?: boolean;
  bg?: string;
  border?: string;
}) {
  const [selected, setSelected] = useState(selectedOption || undefined);
  function handleStatusSelect(option: string) {
    setSelected(option);
  }

  const selectedOnTopOptions = selected
    ? [selected, ...options.filter((option) => option !== selected)]
    : options;
  const mapSelections = selectedOnTop ? selectedOnTopOptions : options;

  const handButtonStyle = ({ option }: { option: string }) => {
    if (option === selected) {
      return `py-[0.5vh] bg-col-200 text-col-900 hover:bg-col-400 hover:text-col-900`;
    } else {
      return `py-[0.5vh] bg-col-640 font-[400] hover:bg-col-600 hover:text-col-900 transition-500`;
    }
  };

  return (
    <FlexFull className={`${bg} ${border}`}>
      <VStackFull className={`p-[2vh] pb-[1vh]`}>
        <Heading text={heading} />
        <FlexFull
          className={`h-full max-h-full overflow-y-auto justify-center insetOverlay ${border}`}
        >
          <VStackFull className={`h-fit px-[2vh] py-[1vh]`} gap="gap-[0.5vh]">
            {mapSelections.map((option) => (
              <FlexFull
                key={option}
                className={
                  (handButtonStyle({ option }), "justify-between shadow3DMd")
                }
                onClick={() => handleStatusSelect(option)}
              >
                <Text>{option} </Text>
                {option === selected && (
                  <Box className={`px-[1vh] bg-col-770 metallicEdgesMd`}>
                    <Text className="text-[2vh] leading-[2vh]">current</Text>
                  </Box>
                )}
              </FlexFull>
            ))}
          </VStackFull>
        </FlexFull>
        <FlexFull className="justify-center items-center">
          <Button to={String(GetFromLink())} buttonText="Save & Close" />
        </FlexFull>
      </VStackFull>
    </FlexFull>
  );
}
