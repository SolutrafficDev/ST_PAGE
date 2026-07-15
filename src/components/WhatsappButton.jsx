import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phone = "+573205537525";
  const message = encodeURIComponent("Hola, quisiera más información sobre sus productos.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer"
      aria-label="Chat por WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsappButton;
