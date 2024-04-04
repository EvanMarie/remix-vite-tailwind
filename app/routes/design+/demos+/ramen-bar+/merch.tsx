import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import SectionLabel from "./components/sectionLabel";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Icon from "~/components/buildingBlocks/icon";
import { ReturnPathIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import { NavLink } from "@remix-run/react";
import Wrap from "~/components/buildingBlocks/wrap";
import MerchItem, { MerchCollection } from "./components/merchItem";

export default function Merch() {
  return (
    <TransitionFull className="overflow-y-auto">
      <VStackFull className="py-[1vh] h-fit">
        {" "}
        <FlexFull className="relative justify-center">
          <NavLink to="/design/demos/ramen-bar">
            <Box className="absolute top-[1vh] left-[1vh] p-[0.3vh] bg-orange-500 border-970-md hover:bg-yellow-400 transition-400 text-gray-900">
              <Icon icon={ReturnPathIcon} iconClassName="text-[4vh]" />
            </Box>
          </NavLink>
          <SectionLabel text="MothRamen Merch" />
        </FlexFull>
        <Wrap className="w-full justify-evenly gap-y-[2vh] p-[2vh]">
          {MerchCollection.map((item, index) => (
            <MerchItem
              key={index}
              imageLink={item.imageLink}
              title={item.title}
              price={item.price}
              description={item.description}
              offset={item.offsetLarge}
              speed={item.speedLarge}
              position={item.positionLarge}
            />
          ))}
        </Wrap>
      </VStackFull>
    </TransitionFull>
  );
}
