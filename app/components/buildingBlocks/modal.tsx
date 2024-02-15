// FramerMotionModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { CloseTextButton } from "./closeTextButton";
import Flex from "./flex";
import { CloseButton } from "./closeButton";
import Portal from "./portal";
import useEscapeKey from "~/utils/useEscapeKey";
import Box from "./box";
import { ButtonType } from "./button";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  modalContentClassName?: string;
  modalOverlayClassName?: string;
  style?: React.CSSProperties;
  isOpen: boolean;
  modalSize?: string;
  setModalOpen: (isOpen: boolean) => void;
  onClose: () => void;
  children?: React.ReactNode;
  maxWidth?: string;
  showTopClose?: boolean;
  showBottomClose?: boolean;
  overlayBlur?: string;
  overlayColor?: string;
  bottomPadding?: string;
  modalFooterClassName?: string;
  contentBg?: string;
  contentBgOverlay?: string;
  footerBorder?: string;
  overflow?: string;
  bottomCloseIsSmall?: boolean;
  topCloseButtonTop?: string;
  topCloseButtonRight?: string;
  topCloseButtonSize?: string;
  topCloseButtonType?: ButtonType;
  closeButtonType?: ButtonType;
}

export default function Modal({
  modalContentClassName = "",
  modalOverlayClassName = "",
  modalFooterClassName = "bg-darkGrayBack",
  style = {},
  isOpen,
  modalSize = "w-full h-full lg:w-94% lg:h-94%",
  onClose,
  children,
  // setModalOpen,
  showTopClose = true,
  topCloseButtonRight = "right-[1vh]",
  topCloseButtonTop = "top-[1vh]",
  topCloseButtonSize = "text-[3.5vh]",
  topCloseButtonType = "unstyled",
  contentBgOverlay = "",
  showBottomClose = true,
  maxWidth,
  overlayBlur = "defaultOverlayBlur",
  bottomPadding = "pb-[1vh]",
  overlayColor = "defaultOverlayColor",
  contentBg = "bg-cyanBack bg-darkVioletGrad`",
  closeButtonType = "smallNormal",
  footerBorder = "border-t-2 border-col-850",
  // overflow,
  ...props
}: ModalProps) {
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

  useEscapeKey(() => onClose());

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className={`fixed inset-0 w-screen h-screen ${overlayColor} ${overlayBlur} ${modalOverlayClassName}`}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                onClose();
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ zIndex: 100, maxHeight: "100svh" }}
            />
            {/* Modal */}
            <motion.div
              className={`${maxWidth} fixed inset-0 m-auto shadow3DMd ${modalSize} ${contentBg} ${modalContentClassName}`}
              style={{ ...style, zIndex: 101, maxHeight: "100svh" }}
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              {...(props as any)}
            >
              <Flex
                className={
                  showBottomClose
                    ? `w-full h-full relative pb-[4vh] ${contentBgOverlay}`
                    : `w-full h-full relative ${contentBgOverlay} `
                }
              >
                {showTopClose && (
                  <Box
                    className={`${topCloseButtonRight} ${topCloseButtonTop}`}
                  >
                    <CloseButton
                      onClose={onClose}
                      iconClassName={topCloseButtonSize}
                      type={topCloseButtonType}
                    />
                  </Box>
                )}

                {children}

                {showBottomClose && (
                  <Flex
                    className={`fixed bottom-0 left-0 w-full h-[4vh] items-center rounded-t-none ${footerBorder} justify-center flex-shrink-0 absolute bottom-0 left-0 ${bottomPadding} ${modalFooterClassName}`}
                  >
                    <CloseTextButton onClose={onClose} type={closeButtonType} />
                  </Flex>
                )}
              </Flex>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
}
