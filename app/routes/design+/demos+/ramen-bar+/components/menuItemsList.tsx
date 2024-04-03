import { ParallaxContentLayer } from "../../components/structureComponents";
import MenuItem from "./menuItem";

export function MenuItemsList({
  offset,
  speed,
  sticky,
  sectionTitle,
  position,
  className,
  children,
  headingSide = "left",
}: {
  offset?: number;
  speed?: number;
  sticky?: { start: number; end: number };
  sectionTitle?: string;
  position?: string;
  className?: string;
  children?: React.ReactNode;
  headingSide?: "left" | "right";
}) {
  return (
    <ParallaxContentLayer
      offset={offset}
      speed={speed}
      sticky={sticky}
      heading={sectionTitle}
      position={position}
      className={className}
      headingSide={headingSide}
    >
      {children}
    </ParallaxContentLayer>
  );
}

export function MenuItemsOne({
  offset,
  speed,
  sectionTitle,
  position,
}: {
  offset: number;
  speed: number;
  sectionTitle: string;
  position?: string;
}) {
  return (
    <MenuItemsList
      offset={offset}
      speed={speed}
      sectionTitle={sectionTitle}
      position={position}
    >
      <MenuItem
        imageLink="/images/demo_images/mothRamen01.png"
        title="Ramen Bowl"
        description="A delicious bowl of ramen with all the fixings."
      />
      <MenuItem
        imageLink="/images/demo_images/mothRamen01.png"
        title="Ramen Bowl"
        description="A delicious bowl of ramen with all the fixings."
        imageSide="right"
      />
      <MenuItem
        imageLink="/images/demo_images/mothRamen01.png"
        title="Ramen Bowl"
        description="A delicious bowl of ramen with all the fixings."
      />
    </MenuItemsList>
  );
}

export function MenuItemsTwo({
  offset,
  speed,
  sectionTitle,
  position,
}: {
  offset: number;
  speed: number;
  sectionTitle: string;
  position?: string;
}) {
  return (
    <MenuItemsList
      headingSide="right"
      offset={offset}
      speed={speed}
      sectionTitle={sectionTitle}
      position={position}
    >
      <MenuItem
        imageLink="/images/demo_images/mothRamen01.png"
        title="Ramen Bowl"
        description="A delicious bowl of ramen with all the fixings."
      />
      <MenuItem
        imageLink="/images/demo_images/mothRamen01.png"
        title="Ramen Bowl"
        description="A delicious bowl of ramen with all the fixings."
        imageSide="right"
      />
      <MenuItem
        imageLink="/images/demo_images/mothRamen01.png"
        title="Ramen Bowl"
        description="A delicious bowl of ramen with all the fixings."
      />
    </MenuItemsList>
  );
}
