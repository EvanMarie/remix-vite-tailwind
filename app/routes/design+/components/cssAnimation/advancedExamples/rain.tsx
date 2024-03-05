import Box from "~/components/buildingBlocks/box";

export default function Rain({
  rainColor = "bg-cyan-400",
  numDrops = 125,
}: {
  rainColor?: string;
  numDrops?: number;
}) {
  return (
    <Box className="relative w-full h-full overflow-hidden border-970-md">
      {Array.from({ length: numDrops }).map((_, index) => {
        // Generate random width and height within specified ranges
        const width = Math.max(0.13, Math.random() * 0.4); // Random width between 0.75rem and 2rem
        const height = 0.1 + Math.random() * 1.3; // Random height between 4rem and 8rem

        return (
          <div
            key={index}
            className={`absolute ${rainColor} animate-rain shadow-lg rounded-raindrop`}
            style={{
              width: `${width}vh`, // Apply random width
              height: `${height}vh`, // Apply random height
              animationDuration: `${0.5 + Math.random() * 3}s`, // Random duration between 0.5s and 2s
              animationDelay: `${Math.random() * 2}s`, // Random delay to start animation
              top: `-4rem`, // Start above the container to ensure a smooth entrance
              left: `${Math.random() * 100}%`, // Random horizontal position
            }}
          ></div>
        );
      })}
    </Box>
  );
}
