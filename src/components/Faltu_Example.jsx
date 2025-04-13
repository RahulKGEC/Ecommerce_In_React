import { useState } from "react";

const Cart = () => {
  const [showAll, setShowAll] = useState(false);

  const items = [
    { name: "Apple", price: 5 },
    { name: "Banana", price: 2 },
    { name: "Orange", price: 3 },
    { name: "Grapes", price: 4 },
    { name: "Pineapple", price: 6 },
  ];

  const visibleItems = showAll ? items : items.slice(0, 3); // Show only 3 initially

  return (
    <div className="p-4 border rounded-lg w-96 mx-auto">
      <h2 className="text-xl font-bold mb-3">Shopping Cart</h2>

      {visibleItems.map((item, index) => (
        <div key={index} className="p-2 border-b flex justify-between">
          <span>{item.name}</span>
          <span>${item.price}</span>
        </div>
      ))}

      {/* Show More / Show Less Button */}
      {items.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-3 w-full text-blue-600 font-semibold"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default Cart;
