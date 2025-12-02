import React from "react";

function Counter({ value, onChange }) {
  return (
    <div>
      <button onClick={() => onChange(value - 1)}>-</button>
      <span style={{ margin: "0 10px" }}>{value}</span>
      <button onClick={() => onChange(value + 1)}>+</button>
    </div>
  );
}

export default React.memo(Counter);
