import React from 'react';

const getCapsClass = (caps) => {
  if (caps === "upper") return "uppercase tracking-[0.20em]";
  if (caps === "capitalize") return "capitalize";
  return "";
};

const getColorClass = (color, link) => {
  // Si es enlace → siempre text-primary
  if (link) return "text-primary";
  // Si no es enlace → usa el color recibido o fallback
  return color ?? "text-contrast";
};

const wrapWithLink = (link, children) => {
  if (!link) return children;

  return (
    <a href={link} className="hover:underline cursor-pointer">
      {children}
    </a>
  );
};

// ---------------- COMPONENTES ----------------

export const PrimaryText = ({
  text, color, caps, link,
}) => {
  const content = (
    <h1
      className={`text-h1-mobile md:text-h1 ${getColorClass(color, link)} font-bold tracking-[0.0em] ${getCapsClass(
        caps
      )}`}
    >
      {text}
    </h1>
  );

  return wrapWithLink(link, content);
};

export const SecondaryText = ({
  text, color, caps, link,
}) => {
  const content = (
    <h2
      className={`text-h2-mobile md:text-h2 ${getColorClass(color, link)} font-semibold tracking-tight ${getCapsClass(
        caps
      )}`}
    >
      {text}
    </h2>
  );

  return wrapWithLink(link, content);
};

export const TertiaryText = ({
  text, color, weight, caps, link,
}) => {
  const content = (
    <h3
      className={`text-h3-mobile md:text-h3 ${getColorClass(color, link)} ${weight ?? "font-regular"
        } tracking-tight ${getCapsClass(caps)}`}
    >
      {text}
    </h3>
  );

  return wrapWithLink(link, content);
};

export const BodyText = ({
  text,
  color,
  weight,
  caps,
  link,
  className,
}) => {
  const content = (
    <span
      className={`text-body-md-mobile md:text-body-md ${getColorClass(color, link)} ${weight ?? "font-regular"
        } tracking-tight ${getCapsClass(caps)} ${className ?? ""}`}
    >
      {text}
    </span>
  );

  return wrapWithLink(link, content);
};

export const miniTextStyles = "text-body-sm-mobile md:text-body-sm tracking-tight";

export const MiniText = ({
  text,
  color,
  weight,
  caps,
  link,
  className,
}) => {
  const content = (
    <span
      className={`${miniTextStyles} ${getColorClass(color, link)} ${weight ?? "font-regular"
        } ${getCapsClass(caps)} ${className ?? ""}`}
    >
      {text}
    </span>
  );

  return wrapWithLink(link, content);
};
