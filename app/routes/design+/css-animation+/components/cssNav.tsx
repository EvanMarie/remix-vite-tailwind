import { HomeIcon, ReturnPathIcon } from "styles";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import NavContainer from "~/components/buildingBlocks/navContainer";
import NavLinkButton from "~/components/buildingBlocks/navLinkButton";
import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";

export default function CSSNav() {
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
            to="/design/css-animation"
            buttonText="Timing Functions"
            type="smallNormal"
          />
          <NavLinkButton
            to="/design/css-animation/element-animations"
            buttonText="Keyframes"
            type="smallNormal"
          />
          <NavLinkButton
            to="/design/css-animation/advanced-animations"
            buttonText="Components"
            type="smallNormal"
          />
          <NavLinkButton
            to="https://developer.mozilla.org/en-US/docs/Web/CSS/animation"
            target="_blank"
            buttonText="MDN Docs"
            type="smallNormal"
          />
        </HStackFull>
      </HStackFull>
    </NavContainer>
  );
}
