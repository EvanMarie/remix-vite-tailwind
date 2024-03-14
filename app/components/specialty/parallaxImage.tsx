import Box from "../buildingBlocks/box";
import Flex from "../buildingBlocks/flex";

export default function ParallaxImage({
  dimensions = "w-[50vh] h-[50vh]",
  bgImage = "/images/rain.jpg",
  bgPosition = "bg-center",
  bgFit = "bg-cover",
  bgAttachment = "bg-fixed",
  className,
}: {
  dimensions?: string;
  bgImage?: string;
  bgPosition?: string;
  bgAttachment?: string;
  bgFit?: string;
  className?: string;
}) {
  return (
    <>
      <Flex className={`relative `}>
        <Box
          className={`${dimensions} border-970-md overflow-y-scroll ${bgAttachment} ${bgImage} ${bgFit} ${bgPosition} bg-no-repeat shadowWideLoose 
          ${className}
        `}
          style={{ backgroundImage: `url(${bgImage})` }}
        ></Box>
      </Flex>
    </>
  );
}
