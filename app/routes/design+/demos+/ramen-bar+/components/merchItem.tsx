import Box from "~/components/buildingBlocks/box";
import Image from "~/components/buildingBlocks/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "~/components/buildingBlocks/modal";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Icon from "~/components/buildingBlocks/icon";
import { CloseIcon } from "styles";

const imageSize =
  "w-[85vw] h-[85vw] sm:w-[75vw] sm:h-[75vw] md:w-[60vh] md:h-[60vh] lg:w-[50vh] lg:h-[50vh]";

export const MerchCollection = [
  // sake set
  {
    imageLink: "/images/demo_images/merch_sake_set.png",
    title: "MothRamen Sake Whisper Set",
    price: "$59.95",
    description:
      "Indulge in tradition with a twist with the MothRamen Sake Whisper Set. Adorned with the majestic MothRamen motif, this sake set blends traditional craftsmanship with modern design. Perfect for a sophisticated evening or as a collector's piece.",
    offsetMobile: 7.2,
    speedMobile: 1,
    offsetLarge: 6.8,
    speedLarge: 1,
    positionMobile: "left-[10vw]",
    positionLarge: "left-[10vw]",
  },
  // tea set
  {
    imageLink: "/images/demo_images/merch_tea_set.png",
    title: "MothRamen Tea Set",
    price: "$42.95",
    description:
      "Savor a moment of tranquility with our MothRamen Serenity Tea Set. This elegant set includes a moth-adorned teapot and cups, inviting you to partake in a timeless ritual with a contemporary flair. It's where heritage meets the MothRamen culture.",
    offsetMobile: 7.2,
    speedMobile: 1,
    offsetLarge: 6.5,
    speedLarge: 1,
    positionMobile: "left-[10vw]",
    positionLarge: "left-[10vw]",
  },
  // bowl
  {
    imageLink: "/images/demo_images/merch_noodle_bowl.png",
    title: "MothRamen Harmony Bowl",
    price: "$24.95",
    description:
      "Elevate your ramen experience with the MothRamen Harmony Bowl. Designed with vibrant colors and the auspicious moth, this bowl is a feast for the eyes and soul. Ideal for those who appreciate the art of ramen.",
    offsetMobile: 7.2,
    speedMobile: 1,
    offsetLarge: 6.5,
    speedLarge: 1,
    positionMobile: "left-[10vw]",
    positionLarge: "left-[10vw]",
  },
  // mug
  {
    imageLink: "/images/demo_images/merch_coffee_mug.png",
    title: "MothRamen Dawn Mug",
    price: "$19.95",
    description:
      "Begin your day with the MothRamen Dawn Mug. Insulated to keep your beverage at the perfect temperature, this mug features the graceful MothRamen design. It's the companion you need for those early mornings or late-night musings.",
    offsetMobile: 7.2,
    speedMobile: 1,
    offsetLarge: 6.5,
    speedLarge: 1,
    positionMobile: "left-[10vw]",
    positionLarge: "left-[10vw]",
  },
  // hobo tote
  {
    imageLink: "/images/demo_images/merch_womens_bag.png",
    title: "MothRamen Urban Hobo",
    price: "$89.95",
    description:
      "Stride through the city with our MothRamen Urban Hobo. This chic, spacious bag with our radiant moth emblem offers both style and utility for the on-the-go individual.",
    offsetMobile: 7.2,
    speedMobile: 1,
    offsetLarge: 6.5,
    speedLarge: 1,
    positionMobile: "left-[10vw]",
    positionLarge: "left-[10vw]",
  },
  // messenger bag
  {
    imageLink: "/images/demo_images/merch_mens_bag.png",
    title: "MothRamen City Sling",
    price: "$94.95",
    description:
      "Carry the essence of MothRamen wherever you go with the City Sling Messenger Bag. Functional, rugged, with a touch of urban sophistication, it's the perfect companion for your daily ventures.",
    offsetMobile: 7.2,
    speedMobile: 1,
    offsetLarge: 6.5,
    speedLarge: 1,
    positionMobile: "left-[10vw]",
    positionLarge: "left-[10vw]",
  },
  // women's hat
  {
    imageLink: "/images/demo_images/merch_womens_hat.png",
    title: "MothRamen Trendsetter Cap",
    price: "$29.95",
    description:
      "Make a statement with our Trendsetter Cap, blending vintage charm with modern flair, topped off with our iconic moth for that extra pop of MothRamen style.",
    offsetMobile: 7.2,
    speedMobile: 1,
    offsetLarge: 6.5,
    speedLarge: 1,
    positionMobile: "left-[10vw]",
    positionLarge: "left-[10vw]",
  },
  // men's cap
  {
    imageLink: "/images/demo_images/merch_mens_hat.png",
    title: "MothRamen Skyline Cap",
    price: "$34.95",
    description:
      "Shade yourself in style under our Skyline Cap, featuring a bold moth design. Ideal for sunny days and city explorations, this cap is a true urbanite's staple.",
    offsetMobile: 7.2,
    speedMobile: 1,
    offsetLarge: 6.5,
    speedLarge: 1,
    positionMobile: "left-[10vw]",
    positionLarge: "left-[10vw]",
  },
  // men's t-shirt
  {
    imageLink: "/images/demo_images/merch_mens_tshirt.png",
    title: "MothRamen Iconic Tee",
    price: "$29.95",
    description:
      "Pull on our Iconic Tee and wear the MothRamen legend. Crafted for comfort, its eye-catching moth design pairs with anything for an easy, everyday look.",
    offsetMobile: 7.2,
    speedMobile: 1,
    offsetLarge: 6.5,
    speedLarge: 1,
    positionMobile: "left-[10vw]",
    positionLarge: "left-[10vw]",
  },
  // women's tank
  {
    imageLink: "/images/demo_images/merch_womens_tank.png",
    title: "MothRamen Whisper Tank",
    price: "$24.95",
    description:
      "Our Whisper Tank merges comfort with the MothRamen spirit. Soft, breathable, with a moth that flutters as you move, it's perfect for sunny days or as a layering piece.",
    offsetMobile: 7.2,
    speedMobile: 1,
    offsetLarge: 6.5,
    speedLarge: 1,
    positionMobile: "left-[10vw]",
    positionLarge: "left-[10vw]",
  },
  // women's hoodie
  {
    imageLink: "/images/demo_images/merch_womens_hoodie.png",
    title: "Moth Eclipse Women's Hoodie",
    price: "$49.95",
    description:
      "Wrap yourself in the Moth Eclipse Hoodie, where comfort meets iconic style. This women's hoodie features a shortened hem for a modern twist, an oversized fit for maximum coziness, and a striking MothRamen emblem for that bold urban edge. It's the perfect chill-out gear for those cool evenings or laid-back days in the park.",
    offsetMobile: 7.2,
    speedMobile: 1,
    offsetLarge: 6.5,
    speedLarge: 1,
    positionMobile: "left-[10vw]",
    positionLarge: "left-[10vw]",
  },
  // men's hoodie
  {
    imageLink: "/images/demo_images/merch_mens_hoodie.png",
    title: "Moth Haven Men's Hoodie",
    price: "$54.95",
    description:
      "Embrace the urban spirit with our Moth Haven Hoodie, designed for the modern man. Crafted for comfort and style, this hoodie sports a relaxed fit and our signature MothRamen logo. Whether you're navigating the city streets or lounging at home, this is the ultimate comfort piece for any wardrobe.",
    offsetMobile: 7.2,
    speedMobile: 1,
    offsetLarge: 6.5,
    speedLarge: 1,
    positionMobile: "left-[10vw]",
    positionLarge: "left-[10vw]",
  },
];

type MerchItemProps = {
  imageLink: string;
  title: string;
  price: string;
  description: string;
  offset?: number;
  speed?: number;
  position?: string;
};

export default function MerchItem({
  imageLink,
  title,
  price,
  description,
}: MerchItemProps) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.03,
          rotate: -1,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          rotate: 5,
          scale: 0.85,
          transition: { duration: 0.3 },
        }}
        className={`rounded-[2vh] hover:cursor-pointer z-10 ${imageSize} shadowBroadLooser border-970-md`}
        onClick={() => setModalOpen(true)}
      >
        <Image
          src={imageLink}
          alt={title}
          className="w-full h-full rounded-[1.8vh]"
        />
      </motion.div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        setModalOpen={setModalOpen}
        modalSize="h-[98vh] w-[95vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]"
        showBottomClose={false}
        showTopClose={false}
        overlayColor="bg-gradient-to-br from-zinc-500/50 via-yellow-600/50 to-orange-500/50"
        overlayBlur="backdrop-blur-[0.8vh]"
      >
        <VStackFull
          className="bg-gradient-to-br from-orange-500 via-red-500 to-orange-500 p-[1vh] h-full justify-between border-970-md shadowBroadLooser rounded-[2vh]"
          gap="gap-[1.5vh]"
        >
          <HStackFull className="justify-between p-[0.5vh] bg-gradient-to-br from-zinc-500 via-red-500 to-zinc-500 border-[0.2vh] border-zinc-600 shadowBroadLooser items-center">
            {" "}
            <Box className="text-2xl font-semibold text-zinc-100 textShadow">
              {title}
            </Box>
            <Box
              onClick={() => setModalOpen(false)}
              className="hover:cursor-pointer"
            >
              <Icon
                icon={CloseIcon}
                iconClassName="text-[3vh] text-zinc-100 hover:cursor-pointer"
              />
            </Box>
          </HStackFull>
          <Box className={`rounded-[2vh] z-10 ${imageSize} shadowBroadLooser`}>
            <Image
              src={imageLink}
              alt={title}
              className="w-full h-full  shadowBroadLooser border-970-md rounded-[2vh]"
            />
          </Box>
          <VStackFull className="p-[2vh] xl:p-[4vh]" gap="gap-[3vh]">
            <Box>
              <Box className="text-lg">{description}</Box>
            </Box>
            <Box className="flex justify-between">
              <Box className="text-2xl font-bold">{price}</Box>
            </Box>
          </VStackFull>
          <FlexFull className="justify-center">
            <motion.button
              className="bg-yellow-300 px-[1vh] shadowBroadLooser border-970-md text-[2vh] hover:bg-red-500 hover:text-zinc-100 hover:textShadow transition-400"
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
              onClick={() => setModalOpen(false)}
            >
              close
            </motion.button>
          </FlexFull>
        </VStackFull>
      </Modal>
    </>
  );
}
