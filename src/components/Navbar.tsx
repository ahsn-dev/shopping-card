import { FaShoppingCart } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { useCartStore } from "../context/CreateCart";
import { useState } from "react";

const Navbar = () => {
  const { state, dispatch } = useCartStore();
  const [cards, setCards] = useState({ status: "close", context: [] });

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
  };

  const handleShowMiniCart = function () {
    if (cards.status === "close") {
      setCards({ ...cards, status: "open" });
      state.map((item) => {
        const miniCard = (
          <div key={item.id} className="flex px-3 gap-2">
            <img src={item.src} className="w-14 aspect-square rounded-full" />
            <div>
              <div className="whitespace-nowrap">{item.title}</div>
              <div>₹{item.price}</div>
            </div>
            <div>
              <button onClick={() => removeFromCart(item)}>Delete</button>
            </div>
          </div>
        );
        return cards.context.push(miniCard);
      });
    }
    if (cards.status === "open") {
      setCards({ ...cards, status: "close" });
    }
  };
  return (
    <div className="flex bg-[#343A40] justify-around items-center text-white h-20">
      <h1 className="text-xl">Shopping Cart</h1>
      <input
        type="text"
        placeholder="Search a product..."
        className="pl-2 rounded py-2 w-96 text-black focus:outline-none"
      />
      <button
        onClick={handleShowMiniCart}
        className="flex relative items-center gap-2 bg-green-600 p-2 rounded focus:border-green-800"
      >
        <FaShoppingCart className="text-xl" />
        <span className="text-xs">{state.length}</span>
        <AiFillCaretDown />
      </button>
      <div
        className={`absolute bg-white text-black ${
          cards.status === "close" ? "hidden" : "whitespace-nowrap py-2 px-3"
        }`}
      >
        {cards.context.length === 0 ? "Cart is Empty..." : cards.context}
      </div>
    </div>
  );
};

export default Navbar;
