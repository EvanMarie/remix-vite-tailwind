import Center from "~/components/buildingBlocks/center";

export default function FlowerOfLife() {
  const radius = 23; // Determines circle size
  const centerX = 55; // Central X position within SVG coordinate system (must be half of viewbox width)
  const centerY = 55; //
  const encompassingRadius = 2 * radius; // Radius for the encompassing circle

  // Convert numerical values for SVG attributes, keeping the SVG scalable
  const smallCircleColor = "deeppink";
  const largerCircleColor = "cyan";
  return (
    <Center className="w-fit h-fit">
      <svg
        viewBox="0 0 110 110" // Adjusted for a scalable drawing area
        width="40vw"
        height="40vw"
        className="border-970-md bg-900-linear6op75 shadowBroadNormal"
      >
        {/* Large Encompassing Circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={encompassingRadius}
          fill="none"
          stroke={largerCircleColor}
          strokeWidth="0.6"
          className="text-col-600 shadowBroadNormal animate-[pulse_3s_ease-in-out_infinite]"
        />
        {/* Central Circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke={smallCircleColor}
          strokeWidth="0.5" // Adjust stroke width for visibility
          className="text-col-600 shadowBroadNormal animate-[pulse_2.5s_ease-in-out_infinite]"
        />
        {/* Surrounding Circles */}
        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <circle
            key={index}
            cx={centerX + Math.cos((angle * Math.PI) / 180) * radius}
            cy={centerY + Math.sin((angle * Math.PI) / 180) * radius}
            r={radius}
            fill="none"
            stroke={smallCircleColor}
            strokeWidth="0.6"
            className="text-col-600 shadowBroadNormal animate-[pulse_3.5s_ease-in-out_infinite]"
          />
        ))}
      </svg>
    </Center>
  );
}
