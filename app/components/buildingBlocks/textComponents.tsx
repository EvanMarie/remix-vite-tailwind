import type { ReactNode } from "react";

interface TextProps {
  children?: ReactNode;
  className?: string;
  noOfLines?: number;
  shadow?: string;
  leading?: string;
}

export default function Text({
  children,
  className = "",
  noOfLines,
  shadow,
}: TextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical"; // Deprecated but necessary for line clamping in WebKit browsers
  }

  return (
    <p className={`${shadow} ${className}`} style={style}>
      {children}
    </p>
  );
}

export function TextXS({
  children,
  className = "",
  noOfLines,
  shadow = "textShadow",
}: TextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  return (
    <p
      className={`${shadow} text-[1.4vh] leading-[2.2vh] ${className}`}
      style={style}
    >
      {children}
    </p>
  );
}

export function TextSM({
  children,
  className = "",
  noOfLines,
  shadow = "textShadow",
}: TextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  return (
    <p
      className={`${shadow} text-[1.6vh] leading-[2.4vh] ${className}`}
      style={style}
    >
      {children}
    </p>
  );
}

export function TextMD({
  children,
  className = "",
  noOfLines,
  shadow = "textShadow",
}: TextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  return (
    <p
      className={`${shadow} text-[2.1vh] leading-[2.9vh] quadHD:text-[2.4vh] quadHD:leading-[3.2vh] ultraHD:text-[2.6vh] ultraHD:leading-[3.4vh] ${className}`}
      style={style}
    >
      {children}
    </p>
  );
}

export function TextLG({
  children,
  className = "",
  noOfLines,
  shadow = "textShadow",
}: TextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  return (
    <p
      className={`${shadow} text-[2.3vh] leading-[3.1vh] quadHD:text-[2.5vh] quadHD:leading-[3.3vh] ultraHD:text-[2.7vh] ultraHD:leading-[3.5vh] ${className}`}
      style={style}
    >
      {children}
    </p>
  );
}

export function TextXL({
  children,
  className = "",
  noOfLines,
  shadow = "textShadow",
}: TextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  return (
    <p
      className={`${shadow} text-[3vh] leading-[3.8vh] ${className}`}
      style={style}
    >
      {children}
    </p>
  );
}

export function Text2XL({
  children,
  className = "",
  noOfLines,
  shadow = "textShadow",
}: TextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  return (
    <p
      className={`${shadow} text-[3.5vh] leading-[4.3vh] ${className}`}
      style={style}
    >
      {children}
    </p>
  );
}

export function Text3XL({
  children,
  className = "",
  noOfLines,
  shadow = "textShadow",
}: TextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  return (
    <p
      className={`${shadow} text-[4vh] leading-[4.8vh] ${className}`}
      style={style}
    >
      {children}
    </p>
  );
}

export function Text4XL({
  children,
  className = "",
  noOfLines,
  shadow = "textShadow",
}: TextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  return (
    <p
      className={`${shadow} text-[4.2vh] leading-[5vh] ${className}`}
      style={style}
    >
      {children}
    </p>
  );
}

export function Text5XL({
  children,
  className = "",
  noOfLines,
  shadow = "textShadow",
}: TextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  return (
    <p
      className={`${shadow} text-[4.5vh] leading-[5.3vh] ${className}`}
      style={style}
    >
      {children}
    </p>
  );
}

export function Text6XL({
  children,
  className = "",
  noOfLines,
  shadow = "textShadow",
}: TextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  return (
    <p
      className={`${shadow} text-[5vh] leading-[5.8vh] ${className}`}
      style={style}
    >
      {children}
    </p>
  );
}

interface ExtendedTextProps extends TextProps {
  color?: string;
  cursive?: boolean;
  shadow?: string;
}

export function Heading3XL({
  children,
  className = "",
  noOfLines,
  cursive = true,
  color = "text-dt-500",
  shadow = "textShadow",
}: ExtendedTextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  const textClassName = cursive
    ? `font-cursive text-[6.5vh] leading-[7.5vh] ${color} ${shadow} ${className}`
    : `text-[6.5vh] leading-[7.5vh] ${color} ${shadow} ${className}`;

  return (
    <h1 className={textClassName} style={style}>
      {children}
    </h1>
  );
}

export function Heading2XL({
  children,
  className = "",
  noOfLines,
  cursive = true,
  color = "text-dt-500",
  shadow = "textShadow",
}: ExtendedTextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  const textClassName = cursive
    ? `font-cursive text-[5.5vh] leading-[6.3vh] ${color} ${shadow} ${className}`
    : `text-[5.5vh] leading-[6.3vh] ${color} ${shadow} ${className}`;

  return (
    <h1 className={textClassName} style={style}>
      {children}
    </h1>
  );
}

export function HeadingXL({
  children,
  className = "",
  noOfLines,
  cursive = true,
  color = "text-dt-500",
  shadow = "textShadow",
}: ExtendedTextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  const textClassName = cursive
    ? `font-cursive text-[5vh] leading-[5.8vh] ${color} ${shadow} ${className}`
    : `text-[5vh] leading-[5.8vh] ${color} ${shadow} ${className}`;

  return (
    <h1 className={textClassName} style={style}>
      {children}
    </h1>
  );
}

export function HeadingLG({
  children,
  className = "",
  noOfLines,
  cursive = true,
  color = "text-dt-500",
  shadow = "textShadow",
}: ExtendedTextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  const textClassName = cursive
    ? `font-cursive text-[4vh] leading-[4.8vh] ${color} ${shadow} ${className}`
    : `text-[4vh] leading-[4.8vh] ${color} ${shadow} ${className}`;

  return (
    <h1 className={textClassName} style={style}>
      {children}
    </h1>
  );
}

export function HeadingMD({
  children,
  className = "",
  noOfLines,
  cursive = true,
  color = "text-dt-500",
  shadow = "textShadow",
  leading = "leading-[4.3vh]",
}: ExtendedTextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  const textClassName = cursive
    ? `font-cursive text-[3.5vh] ${leading} ${color} ${shadow} ${className}`
    : `text-[3.5vh] leading-[4.3vh] ${color} ${shadow} ${className}`;

  return (
    <h1 className={textClassName} style={style}>
      {children}
    </h1>
  );
}

export function HeadingSM({
  children,
  className = "",
  noOfLines,
  cursive = true,
  color = "text-dt-500",
  shadow = "textShadow",
}: ExtendedTextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  const textClassName = cursive
    ? `font-cursive text-[2.5vh] leading-[3.5vh] ${color} ${shadow} ${className}`
    : `text-[3vh] leading-[3.8vh] ${color} ${shadow} ${className}`;

  return (
    <h1 className={textClassName} style={style}>
      {children}
    </h1>
  );
}

export function HeadingXS({
  children,
  className = "",
  noOfLines,
  cursive = true,
  color = "text-dt-500",
  shadow = "textShadow",
}: ExtendedTextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }

  const textClassName = cursive
    ? `font-cursive text-[1.4vh] leading-[2.2vh] ${color} ${shadow} ${className}`
    : `text-[1.4vh] leading-[2.2vh] ${color} ${shadow} ${className}`;

  return (
    <h1 className={textClassName} style={style}>
      {children}
    </h1>
  );
}
