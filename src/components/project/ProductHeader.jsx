import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: "$999" },
  { id: 2, name: "Watch", price: "$999" },
  { id: 3, name: "Headphone", price: "$999" },
];

export function EcommerceUI() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">E-Commerce UI</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button
              className="mt-2 p-2 bg-green-500 text-white rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold mt-6">Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EcommerceUI;
