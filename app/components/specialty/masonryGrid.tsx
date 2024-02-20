import Box from "../buildingBlocks/box";
import { useEffect, useState, useRef } from "react";
import {
  MasonryBox,
  MasonryItem,
} from "./infiniteScroll/inifiniteScrollDemoComponents";
import Flex from "../buildingBlocks/flex";
import VStackFull from "../buildingBlocks/vStackFull";
import Text from "../buildingBlocks/text";
import IconButton from "../buildingBlocks/iconButton";
import { ReturnPathIcon } from "styles";
import HStackFull from "../buildingBlocks/hStackFull";

// Simulates fetching items from an API

const randomHeights = [
  "h-[20vh]",
  "h-[25vh]",
  "h-[30vh]",
  "h-[35vh]",
  "h-[40vh]",
  "h-[45vh]",
  "h-[50vh]",
  "h-[55vh]",
  "h-[60vh]",
];
const fetchItems = (startIndex: number, limit: number = 20): MasonryItem[] => {
  return Array.from({ length: limit }, (_, index) => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    return {
      id: startIndex + index,
      image: `https://picsum.photos/seed/${randomNum}/500/900`,
      height: randomHeights[Math.floor(Math.random() * randomHeights.length)],
    };
  });
};

export default function MasonryGrid() {
  const [items, setItems] = useState<MasonryItem[]>([]);
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
          }, 2500); // Simulate network delay
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
    <VStackFull className="items-center h-full pt-[6vh]">
      <Flex className="fixed top-0 left-0 h-[6vh] bg-100-radial1op75 rounded-none text-col-900 w-full text-center shadowNarrowTight justify-center items-center gap-[2vh]">
        <Flex className="w-[8vw] justify-center flex-shrink-0">
          <IconButton icon={ReturnPathIcon} to="/design" />
        </Flex>
        <HStackFull className="h-full justify-center items-center">
          <Flex className="w-35% justify-end boldTextGlow ">
            <Text className="text-md-tighter">Intersection Observer - </Text>
          </Flex>
          <Flex className="w-65% text-left items-end">
            <Text className="text-md-tight lightTextShadow font-semibold h-full">
              items: {Array.from(visibleItems).map((id) => `${id} | `)}
            </Text>
          </Flex>
        </HStackFull>
      </Flex>

      <VStackFull className="h-[94vh] overflow-y-auto p-[1vh]">
        <Box className="w-full h-fit columns-1 md:columns-2 xl:columns-3 fullHD:columns-4 gap-0">
          {items.map((item, index) => (
            <MasonryBox
              item={item as MasonryItem}
              itemRefs={itemRefs}
              index={index}
              key={index}
            />
          ))}
        </Box>
        {!loading && (
          <div id="scroll-down-trigger" style={{ height: "20px" }} />
        )}
      </VStackFull>
    </VStackFull>
  );
}
