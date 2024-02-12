import { containerBackgroundImage1, subtleShadow } from "styles";
import Box from "./box";
import Image from "./image";
import Flex from "./flex";

interface BackgroundImageProps {
  image?: string;
  style?: React.CSSProperties;
  alt?: string;
  containerClassName?: string;
  imageClassName?: string;
  w?: string;
  h?: string;
  objectFit?: string;
  objectPosition?: string;
  bgOverlayColor?: string;
  bgOverlayGradient?: string;
  shadow?: string;
  children?: React.ReactNode;
  overlayStyles?: string;
  innerContainerStyles?: string;
  overlayBlur?: string;
  showOverlay?: boolean;
  rounded?: string;
  p?: string;
}

export default function BackgroundImage({
  image = containerBackgroundImage1,
  containerClassName = "",
  imageClassName = "",
  alt = "",
  style = {},
  w = "w-full",
  h = "h-full",
  objectFit = "cover",
  objectPosition = "object-center",
  innerContainerStyles = "",
  shadow = subtleShadow,
  showOverlay = true,
  bgOverlayColor = "bg-dt-990",
  bgOverlayGradient = "bg-darkenPurpleGrad",
  overlayBlur = "backdrop-blur-[6px]",
  overlayStyles,
  children,
  rounded,
  p = "p-[1vh]",
}: BackgroundImageProps) {
  return (
    <Box
      className={`relative ${w} ${h} ${shadow} ${containerClassName} ${rounded}`}
      style={style}
    >
      <Image
        src={image}
        alt={alt}
        className={`${objectFit} ${objectPosition} w-full h-full ${rounded} ${imageClassName}`}
      />
      {showOverlay && (
        <Flex
          className={`absolute top-0 left-0 w-full h-full ${overlayBlur} ${rounded} ${bgOverlayColor} ${bgOverlayGradient} ${p} ${overlayStyles} `}
        >
          <Flex className={`w-full h-full ${innerContainerStyles}`}>
            {children}
          </Flex>
        </Flex>
      )}
    </Box>
  );
}
