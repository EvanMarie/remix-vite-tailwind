// FramerMotionModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { CloseTextButton } from "./closeTextButton";
import Flex from "./flex";
import { CloseButton } from "./closeButton";
import Box from "./box";
import Portal from "./portal";
import IconButton from "./iconButton";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  maxWidth?: string;
  icon: React.ComponentType;
  label?: string;
  overlayBlur?: string;
  overlayColor?: string;
}

export default function ModalWithButton({
  className = "",
  style = {},
  icon: Icon,
  label,
  children,
  overlayBlur = "defaultOverlayBlur",
  overlayColor = "defaultOverlayColor",
  maxWidth = "max-w-[1300px]",
}: ModalProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  // Animation variants for scaling in and out
  const variants = {
    open: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      scale: 0,
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  // Handle escape key press
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [setModalOpen]);

  return (
    <>
      {" "}
      {Icon && label && (
        <IconButton
          icon={Icon}
          label={label}
          onClick={() => setModalOpen(true)}
        />
      )}
      <Portal>
        <AnimatePresence>
          {isModalOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className={`fixed inset-0 w-screen h-screen ${overlayColor} ${overlayBlur} z-60`}
                onClick={() => setModalOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ maxHeight: "100svh" }}
              />
              {/* Modal */}
              <motion.div
                className={`w-full h-full ${maxWidth} fixed inset-0 m-auto shadow3DMd  z-50 lg:w-94% lg:h-94% ${className}`}
                style={{ ...style, maxHeight: "100svh" }}
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <Flex className="w-full h-full relative ">
                  <CloseButton onClose={() => setModalOpen(false)} />

                  <Flex className="w-full h-full justify-between bg-cyanBack border-l-3 border-col-900">
                    <Flex className="h-full w-full flex-1 bg-cyanBack border-l-3 border-col-900 ">
                      <Box className="w-full h-full pb-[50px] rounded-b-none">
                        <Box
                          className={`w-full h-full shadow3DMd textShadowrounded-b-none bg-darkVioletGrad border-b-970-md overflow-y-auto`}
                        >
                          <Flex className="w-full h-full flex-col items-center rounded-b-none gap-5">
                            {children}
                          </Flex>
                        </Box>
                      </Box>
                    </Flex>
                    <Flex className="w-full h-[50px] bg-darkGrayBack rounded-t-none border-t-2 border-col-850 justify-center flex-shrink-0 absolute bottom-0 left-0">
                      <CloseTextButton onClose={() => setModalOpen(false)} />
                    </Flex>
                  </Flex>
                </Flex>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}
