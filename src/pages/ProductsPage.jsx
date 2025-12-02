import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const products = useFetchProducts();

  return (
    <div>
      <h1>Product Dashboard</h1>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
