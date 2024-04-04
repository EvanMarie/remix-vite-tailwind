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
        title="Emperor's Noodle Nest"
        description="'Emperor's Noodle Nest' - twirl into a regal blend of noodles, sushi, and egg, adorned with the noble touch of tender sashimi."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_ramenBowl02.png"
        title="Shogun's Sushi Ramen"
        description="The 'Shogun's Sushi Ramen' harmonizes sushi delights with hearty noodles, creating a symphony of flavors fit for a warrior's palate."
        imageSide="right"
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_ramenBowl03.png"
        title="Ninja's Stealth Bowl"
        description="'Ninja's Stealth Bowl' - dive into the secret world of flavors with this covert mix of noodles, sashimi, and sushi, cleverly hidden under a soft egg."
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
        title="Samurai's Sashimi Bowl"
        description="'Samurai's Sashimi Bowl' is a testament to the warrior's way with slices of sashimi, sushi rolls, and a burst of broccolini – a fierce feast."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_pokeBowl02.png"
        title="Garden of the Sea Bowl"
        description="The 'Garden of the Sea Bowl' blooms with fresh sashimi, veggies, and a sprinkle of roe, like a colorful underwater garden on your plate."
        imageSide="right"
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_pokeBowl03.png"
        title="Crimson Wave Poke Bowl"
        description="The 'Crimson Wave Poke Bowl' washes over you with tides of tuna, the tang of mango, and fresh greens – a bold, refreshing oceanic journey."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_pokeBowl04.png"
        title="Azure Tidal Delight"
        imageSide="right"
        description="'Azure Tidal Delight' offers an array of sea's gems, with iridescent fish and velvety uni, in a bowl as deep and mysterious as the ocean."
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
        title="Moth Wing Gyoza"
        description="Delight in 'Moth Wing Gyoza' - tender dumplings crafted with a savory meat and vegetable blend, steamed in a bamboo nest. Their translucent wrappers are like the delicate wings of our mascot, perfect for dipping into soy sauce."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_edamame.png"
        title="Emerald Moth Pods"
        description="Our 'Emerald Moth Pods' are bright green edamame steamed to perfection, sprinkled with salt, and accompanied by a fiery chili flower for a spicy kick, embodying MothRamen's vitality."
        imageSide="right"
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_scallops.png"
        title="Lantern Lagoon Scallops"
        description="Taste the 'Lantern Lagoon Scallops' - succulent morsels poached gently, nestled in sea-inspired shells with a zest of citrus-soy to enhance their natural sweetness."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_seaweedSalad1.png"
        title="Neon Nautical Nest"
        imageSide="right"
        description="Explore the 'Neon Nautical Nest' - a salad of lustrous seaweed spirals with sushi and sashimi treasures, adorned with roe, invoking the ocean's allure in every bite."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_sushi.png"
        title="The Great Moth's Delight"
        description="Feast on 'The Great Moth's Delight' - a vibrant selection of sushi and sashimi, featuring fresh fish and artistic touches, paying tribute to the intricate beauty of a moth's wings."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_tempura.png"
        title="Crispy Kraken Rings"
        imageSide="right"
        description="Enjoy 'Crispy Kraken Rings' - golden-fried squid rings with a spice-infused batter, served with a soft-boiled egg and special sauce for a taste of the sea's depths."
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
        title="Pearl Elixir"
        description="Indulge in the enchanting 'Pearl Elixir' - a creamy boba tea with a cascade of tapioca pearls. Topped with a whimsical jelly sphere, it's a magical sip of MothRamen lore."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_boba2.png"
        title="Luminous Lantern Latte"
        description="Sip on the 'Luminous Lantern Latte' - a layered boba treat with a spectrum of colors, crowned with glowing jelly orbs for a playful touch of MothRamen magic."
        imageSide="right"
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_blackTea1.png"
        title="Shadow Whisper Brew"
        description="'Shadow Whisper Brew' offers a mysterious black tea blend, featuring notes of smoky richness and a garnish of pale, delicate fruit for a subtle, sweet contrast."
      />

      <MenuItem
        imageLink="/images/demo_images/ramenMenu_greenTea1.png"
        title="Blossom Zen Brew"
        imageSide="right"
        description="Experience tranquility with 'Blossom Zen Brew,' an elegant green tea graced by a floating blossom, offering floral whispers to the soothing warmth."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_greenTea2.png"
        title="Verdant Leaf Elixir"
        description="Rejuvenate with our 'Verdant Leaf Elixir,' a serene brew of green tea, its leaves unfurling to release earthy essences and subtle, invigorating notes."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_redBeanMochi.png"
        title="Midnight Blossom Mochi"
        imageSide="right"
        description="A glossy, red bean delight wrapped in a soft mochi shell, garnished with beans like petals under the moon's glow."
      />
      <MenuItem
        imageLink="/images/demo_images/ramenMenu_greenTeaIceCream.png"
        title="Zen Scoop Harmony"
        description="Delve into 'Zen Scoop Harmony' - velvety green tea ice cream that melds tradition with a touch of sweet cherry on top, symbolizing the balance of nature."
      />
    </MenuItemsList>
  );
}
