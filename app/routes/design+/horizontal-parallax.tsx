import TransitionFullScreen from "~/components/buildingBlocks/transitionFullScreen";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Heading from "~/components/buildingBlocks/headingText";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HorizontalParallaxCarousel from "~/components/specialty/horizontalParallaxCarousel";
import NavContainer from "~/components/buildingBlocks/navContainer";
import IconButton from "~/components/buildingBlocks/iconButton";
import { ReturnPathIcon } from "styles";
import Flex from "~/components/buildingBlocks/flex";

export default function HorizontalParallaxCarouselPage() {
  const images = [
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
  ];
  return (
    <TransitionFullScreen>
      <NavContainer bg="bg-col-990" className="h-[8vh]">
        <Flex className="w-[6vw] absolute top-[0.7vh] left-[1vh]">
          <IconButton icon={ReturnPathIcon} to="/design#components" />
        </Flex>
        <FlexFull className="justify-center pl-[6vh]">
          <Heading
            text="Horizontal Parallax Carousel 😍"
            layout="text-xl-loose sm:text-xxl-loose md:text-xxxl-loose "
            color="text-col-100"
          />
        </FlexFull>
      </NavContainer>
      <FlexFull>
        <VStackFull className="pt-[10vh]">
          <FlexFull className="overflow-x-auto">
            <HorizontalParallaxCarousel
              images={images}
              height="h-[70vh] md:h-[80vh]"
              includeModal
            />
          </FlexFull>
        </VStackFull>
      </FlexFull>
    </TransitionFullScreen>
  );
}
