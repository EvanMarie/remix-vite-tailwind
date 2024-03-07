/* eslint-disable react/no-unescaped-entities */
import VStackFull from "~/components/buildingBlocks/vStackFull";
import { TriggerAnimation } from "./svg+/components/triggerAnimation";

export default function TextRoute() {
  return (
    <VStackFull className="h-full p-[2vh] bg-col-600 overflow-y-auto">
      <TriggerAnimation
        path="M1.1 77.8c101.7-101.7 266.5-101.7 368.2 0 81.3 81.3 81.3 213.2 0 294.5-65.1 65.1-170.6 65.1-235.6 0-52.1-52.1-52.1-136.5 0-188.5 41.6-41.6 109.2-41.6 150.8 0 33.3 33.3 33.3 87.3 0 120.6-26.7 26.7-69.9 26.7-96.5 0-21.3-21.3-21.3-55.9 0-77.2 17.1-17.1 44.7-17.1 61.8 0 13.6 13.6 13.6 35.8 0 49.4-10.9 10.9-28.6 10.9-39.5 0-8.7-8.7-8.7-22.9 0-31.6 7-7 18.3-7 25.3 0"
        title="Spiral"
      />
    </VStackFull>
  );
}
