import Box from "~/components/buildingBlocks/box";
import Text from "~/components/buildingBlocks/textComponents";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function TextRoute() {
  function Button() {
    const normalButton = `w-fit h-[3.5vh] px-[1.5vh] py-[0.5vh] bg-col-700 text-col-100 hover:bg-col-300 hover:text-col-900 border-500 hover:border-970 subtleShadow hover:metallicEdges hover:textGlow transition-400`;
    return (
      <button>
        <Box className={normalButton}>Test Button</Box>
      </button>
    );
  }

  return (
    <VStackFull className="justify-center p-[2vh]">
      This
      <Button />
      <VStackFull className={`lightGlow`}>
        <Text>Blah blah blah</Text>
        <Text>Blah blah blah</Text>
        <div className="p-[2vh] bg-gray-400 textGlow text-[1.5vh">
          This text will have a light text shadow or an HD version on fullHD
          screens.
        </div>

        <div className="metallicEdges hover:metallicEdgesHover bg-black text-white">
          Content here
        </div>
        <Box className="border-300">This</Box>

        <Text className="text-xs-tight">text-xs-tight</Text>
        <Text className="text-xs-normal">text-xs-normal</Text>
        <Text className="text-xs-loose">text-xs-loose</Text>
        <Text className="text-sm-tight">text-sm-tight</Text>
        <Text className="text-md-tight">text-md-tight</Text>
        <Text className="text-lg-tight">text-lg-tight</Text>
        <Text className="text-xl-tight">text-xl-tight</Text>
        <Text className="text-xxl-tight">text-xxl-tight</Text>
        <Text className="text-xxxl-tight">text-xxxl-tight</Text>
        <Text className="text-mega-tight">text-mega-tight</Text>
        <Text className="text-too-big-tight">text-too-big-tight</Text>
        <Text className="text-insane-tight">text-insane-tight</Text>
      </VStackFull>
    </VStackFull>
  );
}
