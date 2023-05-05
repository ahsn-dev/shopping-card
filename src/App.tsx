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
      console.log(state.inStock);
      return {
        ...state,
        inStock: !state.inStock,
      };

    case "fastDelivery":
      return {
        ...state,
        fastDelivery: !state.fastDelivery,
      };
    case "removeFilter":
      return {
        sort: "Ascending",
        inStock: false,
        faseDelivery: false,
        rating: 1,
      };

    default:
      return state;
  }
}

export default function App() {
  const [products, setProducts] = useState([]);
  const [copyProducts, setCopyProducts] = useState(
    products.filter((item) => item.inStock === true)
  );
  const [state, dispatch] = useReducer(filterReducer, {
    sort: "Ascending",
    inStock: false,
    faseDelivery: false,
    rating: 1,
  });
  console.log(copyProducts);
  return (
    <>
      <CartProvider>
        <Navbar />
        <div className="flex">
          <FilterProduct
            copyProducts={copyProducts}
            setCopyProducts={setCopyProducts}
            dispatch={dispatch}
            state={state}
            products={products}
          />
          <CardWrapper
            state={state}
            copyProducts={copyProducts}
            products={products}
            setProducts={setProducts}
            setCopyProducts={setCopyProducts}
          />
        </div>
      </CartProvider>
    </>
  );
}
