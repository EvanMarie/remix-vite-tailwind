import { useEffect, useState } from "react";
import Flex from "./flex";
import { motion } from "framer-motion";

import VStack from "./vStack";
import Text from "./textComponents";
import Box from "./box";

export const useToast = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = () => {
    setIsToastVisible(true);
  };

  const hideToast = () => {
    setIsToastVisible(false);
  };

  return { isToastVisible, showToast, hideToast };
};

const toastVariants = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, transition: { duration: 0.5 } },
};

type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center-right"
  | "center-bottom"
  | "center-left"
  | "center-top"
  | "center-center";

interface ToastProps {
  message: string;
  isVisible: boolean;
  duration?: number;
  fontSize?: string;
  lineHeight?: string;
  noOfLines?: number;
  onClose: () => void;
  position?: ToastPosition; // Use the defined type here
}

export default function Toast({
  fontSize = "text-[2vh] leading-[2.5vh]",
  lineHeight = "leading-[30px]",
  noOfLines = 4,
  message,
  isVisible,
  duration = 4000,
  onClose,
  position = "center-center",
}: ToastProps) {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    let timer: number; // Explicitly typing the timer variable as a number
    if (isVisible) {
      timer = window.setTimeout(() => {
        // Using window.setTimeout for clarity
        setShow(false);
      }, duration);
    }
    return () => clearTimeout(timer);
  }, [isVisible, duration]);

  useEffect(() => {
    if (!show) {
      onClose();
    }
  }, [show, onClose]);

  // Position classes
  const positionClasses: { [key in ToastPosition]: string } = {
    "top-left": "top-10 left-10",
    "top-right": "top-10 right-10",
    "bottom-left": "bottom-10 left-10",
    "bottom-right": "bottom-10 right-10",
    "center-right": "top-1/2 right-10 transform -translate-y-1/2",
    "center-bottom": "bottom-10 left-1/2 transform -translate-x-1/2",
    "center-left": "top-1/2 left-10 transform -translate-y-1/2",
    "center-top": "top-20 left-1/2 transform -translate-x-1/2",
    "center-center":
      "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

  const positionClass = positionClasses[position] || "bottom-5 right-5";

  return (
    <motion.div
      className={`w-[20vw] h-[25vh] fixed ${positionClass} bg-darkVioletBack shadowBroadNormal text-col-100 textShadowrounded-lg z-50`}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={toastVariants}
    >
      <Flex className="w-full h-full relative pt-[70px] ">
        <VStack className="w-full  px-4" align="end">
          <Flex className="w-full h-full justify-end items-center">
            <Box className={`text-right w-7/12 ${fontSize} ${lineHeight}`}>
              <Text noOfLines={noOfLines}>{message}</Text>
            </Box>
          </Flex>
        </VStack>
      </Flex>
    </motion.div>
  );
}
