import { FaShoppingCart } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex bg-[#343A40] justify-around items-center text-white h-20">
      <h1 className="text-xl">Shopping Cart</h1>
      <input
        type="text"
        placeholder="Search a product..."
        className="pl-2 rounded py-2 w-96 text-black focus:outline-none"
      />
      <button className="flex items-center gap-2 bg-green-600 p-2 rounded focus:border-green-800">
        <FaShoppingCart className="text-xl" />
        <span className="text-xs">0</span>
        <AiFillCaretDown />
      </button>
    </div>
  );
};

export default Navbar;
