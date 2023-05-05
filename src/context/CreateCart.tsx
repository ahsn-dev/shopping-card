import { useReducer, createContext, Dispatch, ReactNode } from "react";

type cartContext = {
  state: any[];
  dispatch: Dispatch<actions>;
};
type actions = {
  type: "ADD_TO_CART";
  payload: object;
};

const CartContext = createContext<cartContext | []>([]);

function cartReducer(state: any[], action: actions) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];

    default:
      return state;
  }
}

function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
