import { FaShoppingCart } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex bg-slate-900">
      <h1>Shopping Cart</h1>
      <input type="text" placeholder="Search a product..." />
      <button>
        <FaShoppingCart />
        <span>0</span>
        <AiFillCaretDown />
      </button>
    </div>
  );
};

export default Navbar;
