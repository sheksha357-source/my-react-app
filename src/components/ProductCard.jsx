import { useMemo, useCallback, useState } from "react";
import Counter from "./Counter";

export default function ProductCard({ product }) {
  const [qty, setQty] = useState(1);

  // Use useCallback to prevent re-renders
  const updateQuantity = useCallback((val) => {
    if (val >= 1) setQty(val);
  }, []);

  // UseMemo: compute total only when qty or price changes
  const total = useMemo(() => {
    console.log("Recalculating total...");
    return qty * product.price;
  }, [qty, product.price]);

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>

      <Counter value={qty} onChange={updateQuantity} />

      <p><strong>Total: ₹{total}</strong></p>
    </div>
  );
}
    