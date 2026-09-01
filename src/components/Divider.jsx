const Divider = ({
  width = "100%",
  height = 14,
  color = "var(--primary)",
  align = "left",
  gap = 24,
  stripe = 14,
  angle = -60,
  className = "",
  style,
}) => {
  const alignClass =
    align === "center"
      ? "mx-auto"
      : align === "right"
        ? "ml-auto"
        : "mr-auto";

  const direction = `${angle}deg`;
  const gradient = `repeating-linear-gradient(
    ${direction},
    ${color} 0,
    ${color} ${stripe}px,
    transparent ${stripe}px,
    transparent ${stripe + gap}px
  )`;

  return (
    <div className={`w-full mt-4 ${className}`}>
      <div
        style={{
          width,
          height,
          backgroundImage: gradient,
          ...style,
        }}
        className={alignClass}
      />
    </div>
  );
};

export default Divider;
