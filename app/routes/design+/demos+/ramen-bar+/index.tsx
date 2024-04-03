import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import DemoNav from "../components/demoNav";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";

export default function RamenBarInded() {
  return (
    <TransitionFull className="relative">
      {" "}
      <DemoNav />
      <LayoutContainer>
        <h1>Ramen Bar</h1>
      </LayoutContainer>
    </TransitionFull>
  );
}
