import MerchItem, { MerchCollection } from "./merchItem";

export default function MerchSectionLarge() {
  return (
    <>
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
    </>
  );
}
