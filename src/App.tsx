import { useReducer, useState } from "react";
import Navbar from "./components/Navbar";
import FilterProduct from "./components/FilterProduct";
import CardWrapper from "./components/CardWrapper";
import CartProvider from "./context/CreateCart";

function filterReducer(state, action) {
  switch (action.type) {
    case "sort":
      return {
        ...state,
        sort: action.payload,
      };

    case "inStock":
      return {
        ...state,
        inStock: !state.inStock,
      };

    case "fastDelivery":
      return {
        ...state,
        fastDelivery: !state.fastDelivery,
      };

    default:
      return state;
  }
}

export default function App() {
  const [products, setProducts] = useState([]);
  const [copyProducts, setCopyProducts] = useState([]);
  const [state, dispatch] = useReducer(filterReducer, {
    sort: "Ascending",
    inStock: false,
    faseDelivery: false,
    rating: 1,
  });
  return (
    <>
      <CartProvider>
        <Navbar />
        <div className="flex">
          <FilterProduct
            products={products}
            setProducts={setProducts}
            dispatch={dispatch}
          />
          <CardWrapper
            products={products}
            setProducts={setProducts}
            setCopyProducts={setCopyProducts}
          />
        </div>
      </CartProvider>
    </>
  );
}
