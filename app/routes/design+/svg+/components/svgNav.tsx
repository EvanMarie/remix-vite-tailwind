import { HomeIcon } from "styles";
import Button from "~/components/buildingBlocks/button";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import IconButton from "~/components/buildingBlocks/iconButton";
import NavContainer from "~/components/buildingBlocks/navContainer";

export default function SVGNav() {
  return (
    <NavContainer>
      <HStackFull className="px-[1vh] justify-between">
        <IconButton icon={HomeIcon} type="smallNormal" to="/" />
        <HStackFull className="h-full items-center justify-around">
          <Button to="/design/svg" buttonText="Intro" type="smallNormal" />
          <Button
            to="/design/svg/framer-motion-intro"
            buttonText="Framer"
            type="smallNormal"
          />
          <Button
            to="/design/svg/svg-paths-intro"
            buttonText="Paths"
            type="smallNormal"
          />
          <Button
            to="/design/svg/svg-path-examples"
            buttonText="Playground"
            type="smallNormal"
          />
        </HStackFull>
      </HStackFull>
    </NavContainer>
  );
}
