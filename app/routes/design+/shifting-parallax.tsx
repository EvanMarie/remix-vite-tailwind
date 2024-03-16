import ParallaxShiftingImageDemo from "./components/parallaxShiftingImageDemo";
import IconButton from "~/components/buildingBlocks/iconButton";
import { ReturnPathIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import FlexFull from "~/components/buildingBlocks/flexFull";

export default function ShiftingParallax() {
  return (
    <FlexFull className="h-full relative">
      <Box className="w-[6vw] absolute bottom-[1vh]  left-[1vh]">
        <IconButton icon={ReturnPathIcon} to="/design#components" />
      </Box>
      <ParallaxShiftingImageDemo />
    </FlexFull>
  );
}
