const SectionTitle = ({ children, light = false, className = "" }) => {
  const stripe = {
    height: 14,
    backgroundImage:
      "repeating-linear-gradient(-60deg, var(--primary) 0, var(--primary) 14px, transparent 14px, transparent 38px)",
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1" style={stripe} />
      <h1
        className={`text-h1-mobile md:text-h1 font-bold tracking-tight whitespace-nowrap ${
          light ? "text-contrast-light" : "text-contrast"
        }`}
      >
        {children}
      </h1>
      <div className="flex-1" style={stripe} />
    </div>
  );
};

export default SectionTitle;
