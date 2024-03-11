export default function TransitionFullScreen({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full h-full justify-center ${className}`}>
      {children}
    </div>
  );
}
