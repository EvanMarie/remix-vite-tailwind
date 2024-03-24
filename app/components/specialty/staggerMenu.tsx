/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Flex from "~/components/buildingBlocks/flex";
import Button from "~/components/buildingBlocks/button";
import IconButton from "~/components/buildingBlocks/iconButton";
import { CgSmile, CgClose } from "react-icons/cg";
import Portal from "~/components/buildingBlocks/portal";
import VStack from "~/components/buildingBlocks/vStack";
import useEscapeKey from "~/utils/useEscapeKey";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Box from "~/components/buildingBlocks/box";
import Transition from "~/components/buildingBlocks/transition";

const tempItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

export default function StaggerMenu({
  enterFrom = "right",
  menuItems = tempItems,
  menuDirection = "flex-row",
  menuGap = "gap-[1vh]",
  containerClassName = "w-screen justify-evenly p-[1vh]",
  itemPadding = "px-[1.5vh] py-[0.5vh]",
  itemStyle = "bg-col-300",
  itemHoverStyle = "hover:bg-col-200 transition-400",
  itemHoverAnimation = "hover:-translate-x-[1vh]",
  slideDistance = 100,
  damping = 10,
  stiffness = 100,
  buttonText,
  buttonIcon,
  staggerDuration = 0.2,
  overlayStyle = "fixed inset-0 bg-col-120 backdrop-blur-md",
  menuStyle = "fixed left-0 top-[5vh]",
  closeButtonDelay = 1,
}: {
  enterFrom?: string;
  menuItems?: string[];
  menuDirection?: string;
  menuGap?: string;
  containerClassName?: string;
  itemStyle?: string;
  itemHoverStyle?: string;
  itemHoverAnimation?: string;
  itemPadding?: string;
  slideDistance?: number | string;
  damping?: number;
  stiffness?: number;
  buttonText?: string;
  buttonIcon?: React.ComponentType<{ className?: string }>;
  staggerDuration?: number;
  overlayStyle?: string;
  menuStyle?: string;
  closeButtonDelay?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const itemVariants = {
    hidden: (enterFrom: string) => {
      switch (enterFrom) {
        case "left":
          return { x: -slideDistance, opacity: 0 };
        case "right":
          return { x: slideDistance, opacity: 0 };
        case "top":
          return { y: -slideDistance, opacity: 0 };
        case "bottom":
          return { y: slideDistance, opacity: 0 };
        default:
          return { x: 0, opacity: 0 };
      }
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping,
        stiffness,
      },
    },
    exit: (enterFrom: string) => {
      switch (enterFrom) {
        case "left":
          return { x: -slideDistance, opacity: 0 }; // Exit to the left
        case "right":
          return { x: slideDistance, opacity: 0 }; // Exit to the right
        case "top":
          return { y: -slideDistance, opacity: 0 }; // Exit to the top
        case "bottom":
          return { y: slideDistance, opacity: 0 }; // Exit to the bottom
        default:
          return { x: 0, opacity: 0 };
      }
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: staggerDuration,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: staggerDuration,
        staggerDirection: -1,
      },
    },
  };

  useEscapeKey(() => setIsOpen(false));

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setShowMenu(isOpen);
  }, [isOpen]);

  return (
    <>
      {
        <VStack>
          {buttonText ? (
            <Button
              onClick={toggleMenu}
              buttonText="Open Menu"
              iconLeft={buttonIcon ? buttonIcon : undefined}
            />
          ) : (
            <VStack>
              <IconButton onClick={toggleMenu} icon={CgSmile} />
            </VStack>
          )}
        </VStack>
      }

      <AnimatePresence>
        {isOpen && (
          <Portal>
            <motion.div
              className={`${overlayStyle}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                className={menuStyle}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                onClick={(e) => e.stopPropagation()}
              >
                <Flex
                  className={`${menuDirection} ${menuGap} ${containerClassName} `}
                >
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      custom={enterFrom}
                      exit={itemVariants.exit(enterFrom)}
                    >
                      <Flex
                        className={`hover:cursor-pointer ${itemPadding} ${itemStyle} ${itemHoverStyle} ${itemHoverAnimation}`}
                      >
                        {item}
                      </Flex>
                    </motion.div>
                  ))}
                  <Transition delay={closeButtonDelay}>
                    <FlexFull className="p-[0.5vh] justify-center">
                      <Box className="py-[0.2vh] px-[0.7vh] bg-col-950">
                        <IconButton
                          onClick={toggleMenu}
                          icon={CgClose}
                          type="smallUnstyled"
                          iconClassName="text-col-100"
                        />
                      </Box>
                    </FlexFull>
                  </Transition>
                </Flex>
              </motion.div>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
}
