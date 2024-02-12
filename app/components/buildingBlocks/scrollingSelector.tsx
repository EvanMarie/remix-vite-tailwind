import {
  insetOverlay,
  metallicEdges,
  scaleItem,
  shadow3D,
  tealBorder,
  transition500,
  verticalAlign,
} from "styles";
import Button from "./button";
import FlexFull from "./flexFull";
import Text, { HeadingMD } from "./textComponents";
import VStackFull from "./vStackFull";
import { useState } from "react";
import HStackFull from "./hStackFull";
import Box from "./box";
import { GetFromLink } from "~/utils/thingUtils";

export default function ScrollingSelector({
  options,
  heading,
  selectedOption,
  selectedOnTop = true,
  bg = "bg-dt-800",
  border = tealBorder,
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
      return `py-[0.5vh] bg-dt-200 text-dt-900 hover:bg-dt-400 hover:text-dt-900`;
    } else {
      return `py-[0.5vh] bg-dt-640 font-[400] hover:bg-dt-600 hover:text-dt-900 transition-500`;
    }
  };

  return (
    <FlexFull className={`${bg} ${border}`}>
      <VStackFull className={`p-[2vh] pb-[1vh]`}>
        <HeadingMD>{heading}</HeadingMD>
        <FlexFull
          className={`h-full max-h-full overflow-y-auto justify-center ${insetOverlay} ${border}`}
        >
          <VStackFull className={`h-fit px-[2vh] py-[1vh]`} gap="gap-[0.5vh]">
            {mapSelections.map((option) => (
              <Button
                isUnstyled
                key={option}
                buttonClassName={`w-full shadow3D ${scaleItem}`}
                className={handButtonStyle({ option })}
                onClick={() => handleStatusSelect(option)}
              >
                <HStackFull className={`justify-between ${verticalAlign}`}>
                  <Text>{option} </Text>
                  {option === selected && (
                    <Box className={`px-[1vh] bg-dt-770 ${metallicEdges}`}>
                      <Text className="text-[2vh] leading-[2vh]">current</Text>
                    </Box>
                  )}
                </HStackFull>
              </Button>
            ))}
          </VStackFull>
        </FlexFull>
        <FlexFull className="justify-center items-center">
          <Button isSmall to={String(GetFromLink())}>
            Save & Close
          </Button>
        </FlexFull>
      </VStackFull>
    </FlexFull>
  );
}
