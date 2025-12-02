import { useEffect, useState } from "react";

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fake API call
    const data = [
      { id: 1, name: "Laptop", price: 50000 },
      { id: 2, name: "Keyboard", price: 1500 },
      { id: 3, name: "Mouse", price: 700 },
    ];
    setProducts(data);
  }, []);

  return products;
}
