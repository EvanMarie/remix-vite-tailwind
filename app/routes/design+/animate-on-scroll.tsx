import AnimatedComponent from "~/components/animate-on-scroll/animateOnScroll";
import { AnimationTypes } from "./components/data";
import SnapScrollContainer from "~/components/specialty/snapScrollContainer";
import SnapScrollPage from "~/components/specialty/snapScrollPage";
import NavContainer from "~/components/buildingBlocks/navContainer";
import Text from "~/components/buildingBlocks/text";
import IconButton from "~/components/buildingBlocks/iconButton";
import { ReturnPathIcon } from "styles";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Box from "~/components/buildingBlocks/box";
import VStack from "~/components/buildingBlocks/vStack";
import Button from "~/components/buildingBlocks/button";

export default function AnimateOnScroll() {
  return (
    <SnapScrollContainer>
      <NavContainer bg="bg-col-990">
        <Box className="w-[6vw] absolute top-[0.7vh] left-[1vh]">
          <IconButton icon={ReturnPathIcon} to="/design" />
        </Box>
        <FlexFull className="justify-center pl-[6vh]">
          <Text className="font-semibold text-xl-tight text-col-200">
            Snap Scroll Animate-On-Scroll
          </Text>
        </FlexFull>
      </NavContainer>

      <VStack
        className="fixed top-[6vh] left-0 h-[94vh] justify-around py-[1vh]"
        align="items-start"
      >
        {" "}
        {AnimationTypes.map((animation, index) => (
          <Button
            to={`#${animation}`}
            key={index}
            type="smallUnstyled"
            className="bg-col-990 text-col-100"
            buttonText={animation}
          />
        ))}
      </VStack>
      {AnimationTypes.map((animation, index) => (
        <SnapScrollPage
          key={index}
          className="w-screen h-screen bg-col-300 pl-[10vh]"
        >
          <AnimatedComponent
            animation={animation}
            className="bg-col-970 p-[1.5vh] text-col-100 shadowWideLoose"
          >
            <h1
              className="text-lg-tight md:text-xl-tight font-bold textShadow"
              id={animation}
            >
              animationName=&quot;{animation}&quot;
            </h1>
          </AnimatedComponent>
        </SnapScrollPage>
      ))}
    </SnapScrollContainer>
  );
}
