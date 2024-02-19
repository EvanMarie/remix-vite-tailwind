import Flex from "~/components/buildingBlocks/flex";

export type Item = {
  id: number;
  text: string;
};

export function TestBox({
  item,
  index,
  itemRefs,
}: {
  item: Item;
  index: number;
  itemRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}) {
  return (
    <div
      key={item.id}
      data-id={item.id}
      ref={(el) => (itemRefs.current[index] = el)}
      className="h-[40vh] w-[40vh] border-500-md font-cursive bg-col-200 flex justify-center items-center text-xxl-tight text-stroke-5-900 font-semibold shadowNarrowTight"
    >
      {item.text}
    </div>
  );
}

export function LoadingBar({ children }: { children: React.ReactNode }) {
  return (
    <Flex className="h-[6vh] w-[75vw] border-500-md bg-col-700 rounded-3vh justify-center items-center text-xl-tight text-col-100 font-semibold shadowNarrowTight">
      {children}
    </Flex>
  );
}
