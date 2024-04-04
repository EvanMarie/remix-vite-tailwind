import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Icon from "~/components/buildingBlocks/icon";
import { ReturnPathIcon } from "styles";
import { NavLink } from "@remix-run/react";
import Wrap from "~/components/buildingBlocks/wrap";
import MerchItem, { MerchCollection } from "./components/merchItem";
import Text from "~/components/buildingBlocks/text";
import { motion } from "framer-motion";

export default function Merch() {
  return (
    <TransitionFull className="overflow-y-auto">
      <FlexFull className="fixed items-center h-[7vh] top-0 right-0 left-0 justify-center border-red-500 shadowBroadLoose bg-gradient-to-br from-red-400 via-yellow-300 to-red-400 z-20 rounded-none">
        <NavLink to="/design/demos/ramen-bar">
          <motion.div
            className="absolute top-[1vh] left-[1vh] p-[0.3vh] bg-orange-500 border-970-md hover:bg-yellow-400 transition-400 text-gray-900 shadowBroadLooser"
            whileHover={{
              scale: 1.05,
              rotate: -3,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              rotate: 5,
              scale: 0.85,
              transition: { duration: 0.3 },
            }}
          >
            <Icon icon={ReturnPathIcon} iconClassName="text-[4vh]" />
          </motion.div>
        </NavLink>
        <Text className="butterflyFont text-[5vh] md:text-[6vh] text-stroke-10-900 ">
          MothRamen Merch
        </Text>
      </FlexFull>
      <FlexFull className="pt-[7vh] h-fit">
        {" "}
        <Wrap className="w-full justify-evenly gap-y-[3vh] p-[2vh]">
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
      </FlexFull>
    </TransitionFull>
  );
}
