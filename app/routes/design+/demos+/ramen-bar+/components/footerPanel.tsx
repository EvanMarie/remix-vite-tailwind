import { ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";
import Box from "~/components/buildingBlocks/box";
import Button from "~/components/buildingBlocks/button";
import CenterFull from "~/components/buildingBlocks/centerFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function FooterPanel({
  sticky,
}: {
  sticky: { start: number; end: number };
}) {
  const [showStuff, setShowStuff] = useState(false);
  return (
    <ParallaxLayer sticky={sticky}>
      <CenterFull>
        <VStackFull className="h-full justify-around">
          <Box className="p-[2vh] bg-white">FOOTER</Box>
          <Button buttonText="this" onClick={() => setShowStuff(true)} />
          {showStuff && <Box className="p-[2vh] bg-white">STUFF</Box>}
        </VStackFull>
      </CenterFull>
    </ParallaxLayer>
  );
}
