// FramerMotionModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Portal from "./portal";
import IconButton from "./iconButton";
import ModalContent from "./modalContent";
import useEscapeKey from "~/utils/useEscapeKey";
import Button from "./button";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  modalSize?: string;
  icon?: React.ComponentType;
  label?: string;
  overlayBlur?: string;
  overlayColor?: string;
  showTopClose?: boolean;
  showBottomClose?: boolean;
  footerClassName?: string;
  buttonText?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
}

export default function ModalWithButton({
  className = "",
  style = {},
  icon: Icon,
  label,
  children,
  overlayBlur = "defaultOverlayBlur",
  overlayColor = "defaultOverlay",
  modalSize = "w-full h-full lg:w-94% lg:h-94%",
  showTopClose = true,
  showBottomClose = true,
  footerClassName,
  buttonText,
  iconLeft,
  iconRight,
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

  useEscapeKey(() => setModalOpen(false));

  return (
    <>
      {" "}
      {buttonText && iconLeft ? (
        <Button
          buttonText={buttonText}
          onClick={() => setModalOpen(true)}
          iconLeft={Icon}
        />
      ) : buttonText && iconRight ? (
        <Button
          buttonText={buttonText}
          onClick={() => setModalOpen(true)}
          iconRight={Icon}
        />
      ) : buttonText ? (
        <Button buttonText={buttonText} onClick={() => setModalOpen(true)} />
      ) : null}
      {Icon && (
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
                className={`fixed inset-0 w-screen h-screen ${overlayColor} ${overlayBlur}`}
                onClick={() => setModalOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ maxHeight: "100svh", zIndex: 60 }}
              />
              {/* Modal */}
              <motion.div
                className={`fixed inset-0 m-auto z-50 rounded-none ${modalSize} ${className}`}
                style={{ ...style, maxHeight: "100svh", zIndex: 100 }}
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <ModalContent
                  setModalOpen={setModalOpen}
                  showBottomClose={showBottomClose}
                  showTopClose={showTopClose}
                  footerClassName={footerClassName}
                >
                  {children}
                </ModalContent>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}
