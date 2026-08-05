type FloatingCursorProps = {
  position: {
    x: number;
    y: number;
  };
  visible: boolean;
};

export function FloatingCursor({ position, visible }: FloatingCursorProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[60] hidden size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/10 backdrop-blur-sm transition-opacity duration-150 md:block ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    />
  );
}
