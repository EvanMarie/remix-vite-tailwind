import VStackFull from "~/components/buildingBlocks/vStackFull";
import MerchItem, { MerchCollection } from "./merchItem";
import SectionLabel from "./sectionLabel";

export default function MerchSectionLarge() {
  return (
    <VStackFull className="h-full p-[1vh] absolute bottom-0 left-0">
      <SectionLabel text="Merch" />

      {MerchCollection.map((item, index) => (
        <MerchItem
          key={index}
          imageLink={item.imageLink}
          title={item.title}
          price={item.price}
          description={item.description}
          offset={item.offsetLarge}
          speed={item.speedLarge}
          position={item.positionLarge}
        />
      ))}
    </VStackFull>
  );
}
