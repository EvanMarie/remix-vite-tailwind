import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStack from "~/components/buildingBlocks/hStack";
import Image from "~/components/buildingBlocks/image";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function MenuItem({
  imageLink,
  title,
  description,
  imageSide = "left",
}: {
  imageLink: string;
  title: string;
  description: string;
  imageSide?: "left" | "right";
}) {
  return (
    <FlexFull className={`justify-center `}>
      <HStack
        className={`w-[90vw] lg:w-[80vw] xl:w-[70vw] px-[1vh] ${
          imageSide === "left" ? "justify-start" : "justify-end"
        }`}
        gap="gap-[1.5vh]"
      >
        {imageSide === "left" && (
          <Flex className="flex-shrink-0 w-[35vw] h-[35vw] md:w-[20vh] md:h-[20vh] shadowBroadLoose border-900-md">
            <Image src={imageLink} alt={title} className="w-full h-full" />
          </Flex>
        )}
        <VStackFull
          className="bg-gray-300 p-[1.5vh]"
          align={imageSide === "left" ? "items-start" : "items-end"}
        >
          <h3 className="text-xl">{title}</h3>
          <p>{description}</p>
        </VStackFull>
        {imageSide === "right" && (
          <Flex className="flex-shrink-0 w-[35vw] h-[35vw] md:w-[20vh] md:h-[20vh] shadowBroadLoose border-900-md">
            <Image src={imageLink} alt={title} className="w-full h-full" />
          </Flex>
        )}
      </HStack>
    </FlexFull>
  );
}
