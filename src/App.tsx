import Navbar from "./components/Navbar";
import FilterProduct from "./components/FilterProduct";
import CardWrapper from "./components/CardWrapper";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <FilterProduct />
        <CardWrapper />
      </div>
    </>
  );
}
