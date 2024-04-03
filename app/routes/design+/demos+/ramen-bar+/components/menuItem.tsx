import FlexFull from "~/components/buildingBlocks/flexFull";
import HStack from "~/components/buildingBlocks/hStack";
import Image from "~/components/buildingBlocks/image";

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
        className={`w-[90vw] lg:w-[80vw] xl:w-[70vw] px-[1vh] bg-white ${
          imageSide === "left" ? "justify-start" : "justify-end"
        }`}
        gap="gap-[1.5vh]"
      >
        {imageSide === "left" && (
          <Image
            src={imageLink}
            alt={title}
            className="w-[35vw] h-[35vw] md:w-[20vh] md:h-[20vh] shadowBroadLoose border-900-md"
          />
        )}
        <div>
          <h3 className="text-xl">{title}</h3>
          <p>{description}</p>
        </div>
        {imageSide === "right" && (
          <Image
            src={imageLink}
            alt={title}
            className="w-[35vw] h-[35vw] md:w-[20vh] md:h-[20vh] shadowBroadLoose border-900-md"
          />
        )}
      </HStack>
    </FlexFull>
  );
}
