/* eslint-disable react/no-unescaped-entities */
import VStackFull from "~/components/buildingBlocks/vStackFull";
import InfiniteScroll from "./components/infiniteScroll/infiniteScroll";

export default function TextRoute() {
  return (
    <VStackFull className="h-full p-[2vh] bg-col-600 overflow-y-auto">
      <InfiniteScroll />
    </VStackFull>
  );
}
