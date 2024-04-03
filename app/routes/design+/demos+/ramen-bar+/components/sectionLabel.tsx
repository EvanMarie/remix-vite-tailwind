import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";

export default function SectionLabel({ text }: { text: string }) {
  return (
    <Flex className="px-[3vh] rounded-[2vh] border-[0.3vh] border-red-500 shadowBroadLoose bg-gradient-to-br from-yellow-400 to-orange-300">
      <Text className="butterflyFont text-[5vh] md:text-[6vh] tracking-wider text-stroke-5-900">
        {text}
      </Text>
    </Flex>
  );
}
