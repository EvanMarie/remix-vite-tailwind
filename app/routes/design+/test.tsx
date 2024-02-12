import {
  metallicEdgesHover,
  subtleShadow,
  textShadow,
  transition500,
  border400,
  leading,
} from "styles";
import Box from "~/components/buildingBlocks/box";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/textComponents";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function TextRoute() {
  function Button() {
    const normalButton = `w-fit h-[3.5vh] px-[1.5vh] py-[0.5vh] bg-col-700 text-col-100 ${border400} hover:bg-col-300 hover:text-col-900 hover:border-[0.2vh] hover:border-solid hover:border-col-970 ${transition500} ${subtleShadow} ${metallicEdgesHover} ${textShadow} hover:textGlow hover:textGlowHD`;
    return (
      <button>
        <Box className={normalButton}>Test Button</Box>
      </button>
    );
  }

  return (
    <VStackFull className="justify-center p-[2vh]">
      <Button />

      <VStack className={`${leading.smTight}`}>
        <Text>Blah blah blah</Text>
        <Text>Blah blah blah</Text>
      </VStack>
    </VStackFull>
  );
}
