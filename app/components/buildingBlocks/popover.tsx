import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Flex from "./flex";
import { CloseButton } from "./closeButton";
import Box from "./box";
import VStack from "./vStack";
import HStack from "./hStack";
import { HeadingSM } from "./textComponents";
import { subtleShadow, shadow3D } from "styles";

// Placement classes for different positions
const placementClasses: Record<string, string> = {
  top: "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
  topLeft: "bottom-full mb-2 left-0",
  topRight: "bottom-full mb-2 right-0",
  bottom: "top-full mt-2 left-1/2 transform -translate-x-1/2",
  bottomLeft: "top-full mt-2 left-0",
  bottomRight: "top-full mt-2 right-0",
  left: "right-full mr-2 top-1/2 transform -translate-y-1/2",
  right: "left-full ml-2 top-1/2 transform -translate-y-1/2",
  center: "fixed inset-0 flex justify-center items-center",
};

interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  w?: string;
  h?: string;
  heading?: React.ReactNode;
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "center"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";
}

export default function Popover({
  trigger,
  content,
  w = "w-fit max-w-[375px] sm:max-w-[500px]",
  h = "h-fit",
  placement = "topRight",
  heading,
}: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const isCenter = placement === "center";

  // Framer Motion animation variants
  const centerVariants = {
    hidden: { scale: 0, opacity: 0, transition: { duration: 0.5 } },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  // Function to close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverRef]);

  // Handle user pressing escape key to close popover
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div
      className={`relative inline-block ${isCenter ? "w-full h-full" : ""}`}
      ref={popoverRef}
    >
      <div onClick={togglePopover}>{trigger}</div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={centerVariants}
            className={`absolute z-30  ${shadow3D} ${w} ${h} min-w-[300px] ${placementClasses[placement]}`}
          >
            <Flex
              className={`w-full h-full  ${shadow3D} relative bg-dt-990 bg-darkenGrad`}
            >
              <VStack
                className={`w-full h-full justify-start items-center ${subtleShadow} gap-[0px]`}
              >
                <HStack className=" w-full justify-between rounded-b-none bg-dt-900 p-[0.7vh] pl-[1vh] border-b-[0.1vh] border-dt-125">
                  {" "}
                  <HeadingSM noOfLines={1}>{heading ? heading : ""} </HeadingSM>
                  <Box>
                    <CloseButton
                      onClose={() => setIsOpen(false)}
                      isMinimal
                      pos="inherit"
                    />
                  </Box>
                </HStack>
                <Flex className="w-full p-[1vh] max-h-[45vh] overflow-y-auto">
                  {content}
                </Flex>
              </VStack>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
