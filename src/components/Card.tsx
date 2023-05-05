import { useState } from "react";
import { useCartStore } from "../context/CreateCart";

interface Props {
  product: any;
}

const Card = ({ product }: Props) => {
  const { state, dispatch } = useCartStore();
  const [inCart, setInCart] = useState(false);
  const handleAddToCart = () => {
    if (product.inStock) {
      if (!state.includes(product)) {
        dispatch({ type: "ADD_TO_CART", payload: product });
        setInCart(true);
      }
    }
  };

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
    setInCart(false);
  };

  return (
    <div className="text-black w-full h-full rounded border border-gray-300">
      <img src={product.src} alt="" className="rounded-t" />
      <div className="p-4 flex flex-col">
        <h3 className="text-xl font-medium">{product.title}</h3>
        <p>
          ₹<span>{product.price}</span>
        </p>
        <p>{product.delivery}</p>
        <div></div>
      </div>
      <div className="p-4">
        {inCart ? (
          <button
            className={`bg-red-500 text-white rounded py-2 px-3 font-light `}
            onClick={removeFromCart}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            className={`bg-blue-500 text-white rounded py-2 px-3 font-light ${
              product.inStock ? "" : "bg-blue-400"
            }`}
            onClick={handleAddToCart}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
