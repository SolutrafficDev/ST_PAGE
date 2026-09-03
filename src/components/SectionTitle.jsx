const SectionTitle = ({ children, light = false, className = "", stripeColor = "var(--primary)" }) => {
  const stripe = {
    height: 14,
    backgroundImage: `repeating-linear-gradient(-60deg, ${stripeColor} 0, ${stripeColor} 14px, transparent 14px, transparent 38px)`,
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="w-12 sm:w-16 lg:w-24 pl-4 sm:pl-6 lg:pl-8" style={{ height: 14 }}>
        <div className="w-full h-full" style={stripe} />
      </div>
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