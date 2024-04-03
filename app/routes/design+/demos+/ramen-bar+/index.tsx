import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import DemoNav from "../components/demoNav";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import ParallaxShiftingImage from "~/components/specialty/parallaxShiftingImage";
import CenterFull from "~/components/buildingBlocks/centerFull";

export default function RamenBarInded() {
  return (
    <LayoutContainer className="bg-[url('/images/ramenBack.png')]">
      <TransitionFull className="relative">
        <DemoNav />
        <CenterFull>
          <ParallaxShiftingImage bgImageLink="/images/moth.png" />
        </CenterFull>
      </TransitionFull>
    </LayoutContainer>
  );
}
