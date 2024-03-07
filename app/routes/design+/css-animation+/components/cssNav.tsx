import { HomeIcon } from "styles";
import Button from "~/components/buildingBlocks/button";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import IconButton from "~/components/buildingBlocks/iconButton";
import NavContainer from "~/components/buildingBlocks/navContainer";

export default function CSSNav() {
  return (
    <NavContainer>
      <HStackFull className="px-[1vh] justify-between">
        <IconButton icon={HomeIcon} type="smallNormal" to="/" />
        <HStackFull className="h-full items-center justify-around">
          <Button
            to="/design/css-animation"
            buttonText="Timing Functions"
            type="smallNormal"
          />
          <Button
            to="/design/css-animation/element-animations"
            buttonText="Keyframes"
            type="smallNormal"
          />
          <Button
            to="/design/css-animation/advanced-animations"
            buttonText="Components"
            type="smallNormal"
          />
          <Button
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
