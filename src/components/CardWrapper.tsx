import { useEffect } from "react";
import axios from "axios";
import Card from "./Card";

interface products {
  title: string;
  price: number;
  delivery: string;
  start: number;
}

interface Props {
  setProducts: React.Dispatch<React.SetStateAction<never[]>>;
  products: any;
  setCopyProducts: React.Dispatch<React.SetStateAction<never[]>>;
}

const CardWrapper = ({
  products,
  setProducts,
  setCopyProducts,
  copyProducts,
  state,
}: Props) => {
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts([...res.data]);
      setCopyProducts([...res.data.filter((item) => item.inStock === true)]);
    });
  }, []);

  return (
    <div
      onClick={() => console.log(state)}
      className="grid grid-cols-3 gap-4 mt-8 mx-8 w-[80%]"
    >
      {copyProducts.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
};

export default CardWrapper;
