import { useEffect, useState, useRef } from "react";
import Wrap from "~/components/buildingBlocks/wrap";
import Flex from "~/components/buildingBlocks/flex";
import { Item, LoadingBar, TestBox } from "./inifiniteScrollDemoComponents";
import Text from "~/components/buildingBlocks/text";
import HStack from "~/components/buildingBlocks/hStack";
import BouncingDots from "~/components/specialty/bouncingDots";

// Simulates fetching items from an API
const fetchItems = (startIndex: number, limit: number = 10): Item[] => {
  return Array.from({ length: limit }, (_, index) => ({
    id: startIndex + index,
    text: `Item ${startIndex + index}`,
  }));
};

export default function InfiniteScroll() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initially load some items
    setItems(fetchItems(0));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute("data-id"));

          setVisibleItems((prevVisibleItems) => {
            const updatedVisibleItems = new Set(prevVisibleItems);
            if (entry.isIntersecting) {
              updatedVisibleItems.add(id);
            } else {
              updatedVisibleItems.delete(id);
            }
            return updatedVisibleItems;
          });
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1, // Adjust based on when you consider the item to be visible
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [items]);

  // Log the array of currently visible items
  useEffect(() => {
    console.log(
      "Visible Items:",
      Array.from(visibleItems).map((id) => `${id}`)
    );
  }, [visibleItems]); // This useEffect is specifically for logging

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);
          setTimeout(() => {
            setItems((prevItems) => {
              const newItems = [...prevItems, ...fetchItems(prevItems.length)];
              itemRefs.current = itemRefs.current
                .slice(0, prevItems.length)
                .concat(
                  new Array(newItems.length - prevItems.length).fill(null)
                );
              return newItems;
            });
            setLoading(false);
          }, 2000); // Simulate network delay
        }
      },
      {
        rootMargin: "100px",
      }
    );

    // Target element for observing
    const target = document.querySelector("#scroll-down-trigger");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [loading]);

  return (
    <>
      <Flex className="fixed top-0 left-0 h-[6vh] bg-col-700 rounded-none text-col-100 w-full text-center shadowNarrowTight justify-center items-center gap-[2vh]">
        <Flex className="w-[50vw] justify-end">
          <h2>Intersection Observer - </h2>
        </Flex>
        <Flex className="w-[50vw] text-left">
          <h2>items: {Array.from(visibleItems).map((id) => `${id} | `)}</h2>
        </Flex>
      </Flex>
      <Wrap className="justify-center items-start gap-5vh p-3vh bg-400 pt-[7vh] gap-[2vh]">
        {items.map((item, index) => (
          <TestBox item={item} itemRefs={itemRefs} index={index} key={index} />
        ))}
        {!loading && (
          <div id="scroll-down-trigger" style={{ height: "20px" }} />
        )}
        <LoadingBar>
          {loading && (
            <HStack>
              <Text>Loading more items...</Text>
              <BouncingDots />
            </HStack>
          )}
        </LoadingBar>
      </Wrap>
    </>
  );
}
