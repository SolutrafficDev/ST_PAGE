import { SecondaryText } from "../components/Typography";
import ProductCard from "../components/ProductCard";
import productos from "../data/productos";

const Productos = () => {
  return (
    <section id="productos" className="section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SecondaryText text="Productos" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {productos.map((producto, index) => (
            <ProductCard key={producto.id} producto={producto} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productos;
