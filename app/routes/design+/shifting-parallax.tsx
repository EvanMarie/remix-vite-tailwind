import ParallaxShiftingImageDemo from "./components/parallaxShiftingImageDemo";
import { ReturnPathIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import FlexFull from "~/components/buildingBlocks/flexFull";
import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";

export default function ShiftingParallax() {
  return (
    <FlexFull className="h-full relative">
      <Box className="w-[6vw] absolute bottom-[1vh]  left-[1vh]">
        <NavIconButton icon={ReturnPathIcon} to="/design#components" />
      </Box>
      <ParallaxShiftingImageDemo />
    </FlexFull>
  );
}
