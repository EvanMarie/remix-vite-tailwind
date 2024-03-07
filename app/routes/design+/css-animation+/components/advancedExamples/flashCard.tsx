import Box from "~/components/buildingBlocks/box";
import Center from "~/components/buildingBlocks/center";

export default function FlashCard() {
  const cardDimensions = "h-[35vh] w-[40vh]";
  return (
    <Box className="perspective-100 group">
      <Box
        className={`${cardDimensions} transition-transform duration-1000 transform-style-3d group-hover:rotate-y-180`}
      >
        <Center className="h-full w-full absolute inset-0 bg-col-800 text-col-100 textShadow backface-hidden shadowBroadLoose text-xl-normal">
          Front Content
        </Center>
        <Center className="h-full w-full absolute inset-0 bg-col-500 text-col-100 textShadow backface-hidden rotate-y-180 shadowBroadLoose text-xl-normal">
          Back Content
        </Center>
      </Box>
    </Box>
  );
}
