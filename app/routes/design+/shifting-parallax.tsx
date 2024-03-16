import CenterFull from "~/components/buildingBlocks/centerFull";
import ParallaxShiftingImageDemo from "./components/parallaxShiftingImageDemo";
import IconButton from "~/components/buildingBlocks/iconButton";
import { ReturnPathIcon } from "styles";
import Box from "~/components/buildingBlocks/box";

export default function ShiftingParallax() {
  return (
    <CenterFull className="h-screen relative">
      <Box className="w-[6vw] absolute top-[0.7vh] left-[1vh]">
        <IconButton icon={ReturnPathIcon} to="/design#components" />
      </Box>
      <ParallaxShiftingImageDemo />
    </CenterFull>
  );
}
