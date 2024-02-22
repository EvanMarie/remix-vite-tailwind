import Flex from "../buildingBlocks/flex";

export default function SnapScrollPage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Flex
      className={`justify-center items-center snap-start snap-always overflow-x-hidden ${className}`}
    >
      {children}
    </Flex>
  );
}
