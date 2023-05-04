import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

interface products {
  title: string;
  price: number;
  delivery: string;
  start: number;
}

const CardWrapper = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts([...res.data]);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 mt-8 mx-8 w-[80%]">
      {products.map((product) => {
        // console.log(product);

        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
};

export default CardWrapper;
