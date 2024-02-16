// FramerMotionModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import useEscapeKey from "~/utils/useEscapeKey";
import Transition, {
  TransitionType,
} from "~/components/buildingBlocks/transition";
import Portal from "~/components/buildingBlocks/portal";
import Flex from "~/components/buildingBlocks/flex";

export default function TransitionExample({
  transitionType,
  isTransitionOpen,
  setTransitionOpen,
}: {
  transitionType: TransitionType;
  isOpen: boolean;
}) {
  useEscapeKey(() => setTransitionOpen(false));

  return (
    <Portal>
      <AnimatePresence>
        {isTransitionOpen && (
          <Transition
            type={transitionType}
            className="w-full h-full justify-center items-center defaultOverlay"
          >
            <Flex className="p-[3vh] bg-500-radial3op50 text-col-100">
              This
            </Flex>
          </Transition>
        )}
      </AnimatePresence>
    </Portal>
  );
}
