/* eslint-disable react/no-unescaped-entities */
import Box from "~/components/buildingBlocks/box";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import ParallaxImage from "~/components/specialty/parallaxImage";

export default function ParallaxShiftingImage() {
  return (
    <VStackFull className="h-full p-[2vh] bg-col-600 overflow-y-auto">
      <HStackFull>
        <Box className="animate-bounce">
          <ParallaxImage
            bgImage="https://picsum.photos/800/400"
            dimensions="w-[20vw] h-[75vh]"
          />
        </Box>
        <Box className="animate-bounce">
          <ParallaxImage
            bgImage="https://picsum.photos/800/400"
            dimensions="w-[20vw] h-[75vh]"
          />
        </Box>
        <Box className="animate-bounce">
          <ParallaxImage
            bgImage="https://picsum.photos/800/400"
            dimensions="w-[20vw] h-[75vh]"
          />
        </Box>
        <Box className="animate-bounce">
          <ParallaxImage
            bgImage="https://picsum.photos/800/400"
            dimensions="w-[20vw] h-[75vh]"
          />
        </Box>
      </HStackFull>
    </VStackFull>
  );
}
