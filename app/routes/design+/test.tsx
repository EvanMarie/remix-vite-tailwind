/* eslint-disable react/no-unescaped-entities */
import Box from "~/components/buildingBlocks/box";
import CenterFull from "~/components/buildingBlocks/centerFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import ParallaxImage from "~/components/specialty/parallaxImage";

export default function ParallaxShiftingImage() {
  return (
    <CenterFull>
      <HStackFull className="justify-center">
        <ParallaxImage
          bgImage="https://picsum.photos/800/400"
          dimensions="w-[20vw] h-[75vh]"
        />

        <ParallaxImage
          bgImage="https://picsum.photos/800/400"
          dimensions="w-[20vw] h-[75vh]"
        />

        <ParallaxImage
          bgImage="https://picsum.photos/800/400"
          dimensions="w-[20vw] h-[75vh]"
        />

        <ParallaxImage
          bgImage="https://picsum.photos/800/400"
          dimensions="w-[20vw] h-[75vh]"
        />
      </HStackFull>
    </CenterFull>
  );
}
