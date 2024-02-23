import Flex from "../buildingBlocks/flex";

export default function SnapScrollPage({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id: string;
}) {
  return (
    <Flex
      className={`justify-center items-center snap-start snap-always overflow-x-hidden ${className}`}
      id={id}
    >
      {children}
    </Flex>
  );
}
