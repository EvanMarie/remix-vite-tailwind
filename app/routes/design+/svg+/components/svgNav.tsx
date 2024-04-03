import { HomeIcon, ReturnPathIcon } from "styles";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import NavContainer from "~/components/buildingBlocks/navContainer";
import NavLinkButton from "~/components/buildingBlocks/navLinkButton";
import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";

export default function SVGNav() {
  return (
    <NavContainer>
      <HStackFull className="px-[1vh] justify-between">
        <NavIconButton icon={HomeIcon} type="smallNormal" to="/" label="home" />
        <NavIconButton
          icon={ReturnPathIcon}
          type="smallNormal"
          to="/design/animation"
          label="animation"
        />
        <HStackFull className="h-full items-center justify-around ">
          <NavLinkButton
            to="/design/svg"
            buttonText="Intro"
            type="smallNormal"
          />
          <NavLinkButton
            to="/design/svg/framer-motion-intro"
            buttonText="Framer"
            type="smallNormal"
          />
          <NavLinkButton
            to="/design/svg/svg-paths-intro"
            buttonText="Paths"
            type="smallNormal"
          />
          <NavLinkButton
            to="/design/svg/svg-path-examples"
            buttonText="Playground"
            type="smallNormal"
          />
        </HStackFull>
      </HStackFull>
    </NavContainer>
  );
}
