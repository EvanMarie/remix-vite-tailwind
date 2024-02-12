// FramerMotionModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { CloseTextButton } from "./closeTextButton";
import Flex from "./flex";
import { CloseButton } from "./closeButton";
import { defaultOverlayBlur, defaultOverlayColor, shadow3D } from "styles";
import Portal from "./portal";
import useEscapeKey from "~/utils/useEscapeKey";

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
  topCloseButtonIsSmall?: boolean;
  topCloseButtonIsUnstyled?: boolean;
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
  topCloseButtonIsSmall = false,
  topCloseButtonIsUnstyled = false,
  contentBgOverlay = "",
  showBottomClose = true,
  maxWidth,
  overlayBlur = defaultOverlayBlur,
  bottomPadding = "pb-[1vh]",
  overlayColor = defaultOverlayColor,
  contentBg = "bg-cyanBack bg-darkVioletGrad`",
  bottomCloseIsSmall = false,
  footerBorder = "border-t-2 border-dt-850",
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
              className={`${maxWidth} fixed inset-0 m-auto ${shadow3D} ${modalSize} ${contentBg} ${modalContentClassName}`}
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
                  <CloseButton
                    onClose={onClose}
                    t={topCloseButtonTop}
                    r={topCloseButtonRight}
                    iconSize={topCloseButtonSize}
                    buttonRadius="rounded-full"
                    isSmall={topCloseButtonIsSmall}
                    isUnstyled={topCloseButtonIsUnstyled}
                  />
                )}

                {children}

                {showBottomClose && (
                  <Flex
                    className={`fixed bottom-0 left-0 w-full h-[4vh] items-center rounded-t-none ${footerBorder} justify-center flex-shrink-0 absolute bottom-0 left-0 ${bottomPadding} ${modalFooterClassName}`}
                  >
                    <CloseTextButton
                      onClose={onClose}
                      isSmall={bottomCloseIsSmall}
                    />
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
