import { useRef, useState, useEffect } from "react";

const Reveal = ({ children, direction = "up", delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden = {
    up: "translate-y-10 opacity-0",
    down: "-translate-y-10 opacity-0",
    left: "translate-x-10 opacity-0",
    right: "-translate-x-10 opacity-0",
    fade: "opacity-0",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "translate-x-0 translate-y-0 opacity-100" : hidden[direction]
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;