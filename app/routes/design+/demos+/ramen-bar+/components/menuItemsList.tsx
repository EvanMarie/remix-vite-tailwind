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
  position,
}: {
  offset: number;
  speed: number;
  position?: string;
}) {
  return (
    <MenuItemsList
      offset={offset}
      speed={speed}
      sectionTitle="Ramen Bowls"
      position={position}
    >
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_ramenBowl01.png"
        title="Ramen Bowl"
        description="A delicious bowl of ramen with all the fixings."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_ramenBowl02.png"
        title="Ramen Bowl"
        description="A delicious bowl of ramen with all the fixings."
        imageSide="right"
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_ramenBowl03.png"
        title="Ramen Bowl"
        description="A delicious bowl of ramen with all the fixings."
      />
    </MenuItemsList>
  );
}

export function MenuItemsTwo({
  offset,
  speed,
  position,
}: {
  offset: number;
  speed: number;
  position?: string;
}) {
  return (
    <MenuItemsList
      headingSide="right"
      offset={offset}
      speed={speed}
      position={position}
      sectionTitle="Poké Bowls"
    >
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_pokeBowl01.png"
        title="Poké Bowl"
        description="A delicious bowl of ramen with all the fixings."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_pokeBowl02.png"
        title="Poké Bowl"
        description="A delicious bowl of ramen with all the fixings."
        imageSide="right"
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_pokeBowl03.png"
        title="Poké Bowl"
        description="A delicious bowl of ramen with all the fixings."
      />
      <MenuItem
        imageLink="/images/demo_images/mothRamen04.png"
        title="Ramen Bowl"
        imageSide="right"
        description="A delicious bowl of ramen with all the fixings."
      />
    </MenuItemsList>
  );
}

export function MenuItemsThree({
  offset,
  speed,
  position,
}: {
  offset: number;
  speed: number;
  position?: string;
}) {
  return (
    <MenuItemsList
      offset={offset}
      speed={speed}
      position={position}
      sectionTitle="Appetizers & Sides"
    >
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_dumplings.png"
        title="Dumplings"
        description="A delicious bowl of ramen with all the fixings."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_edamame.png"
        title="Edamame"
        description="A delicious bowl of ramen with all the fixings."
        imageSide="right"
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_scallops.png"
        title="Scallops"
        description="A delicious bowl of ramen with all the fixings."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_seaweedSalad1.png"
        title="Seaweed Salad"
        imageSide="right"
        description="A delicious bowl of ramen with all the fixings."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_sushi.png"
        title="Sushi & Sashimi"
        description="A delicious bowl of ramen with all the fixings."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_tempura.png"
        title="Tempura"
        imageSide="right"
        description="A delicious bowl of ramen with all the fixings."
      />
    </MenuItemsList>
  );
}

export function MenuItemsFour({
  offset,
  speed,
  position,
}: {
  offset: number;
  speed: number;
  position?: string;
}) {
  return (
    <MenuItemsList
      headingSide="right"
      offset={offset}
      speed={speed}
      position={position}
      sectionTitle="Drinks & Desserts"
    >
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_boba1.png"
        title="Boba"
        description="A delicious bowl of ramen with all the fixings."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_boba2.png"
        title="Boba"
        description="A delicious bowl of ramen with all the fixings."
        imageSide="right"
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_blackTea1.png"
        title="Black Tea"
        description="A delicious bowl of ramen with all the fixings."
      />

      <MenuItem
        imageLink="/images/demo_images/ramenMenu_greenTea1.png"
        title="Green Tea"
        imageSide="right"
        description="A delicious bowl of ramen with all the fixings."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_greenTea2.png"
        title="Green Tea"
        description="A delicious bowl of ramen with all the fixings."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_redBeanMochi.png"
        title="Red Bean Mochi"
        imageSide="right"
        description="A delicious bowl of ramen with all the fixings."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_greenTeaIceCream.png"
        title="Green Tea Ice Cream"
        description="A delicious bowl of ramen with all the fixings."
      />
    </MenuItemsList>
  );
}
