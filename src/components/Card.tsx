interface Props {
  product: object;
}

const Card = ({ product }: Props) => {
  return (
    <div className="text-black w-full h-full rounded border border-black">
      <img src="https://picsum.photos/200/300" alt="" />
      <div>
        <p>{product.title}</p>
        <p>
          ₹<span>{product.price}</span>
        </p>
        <p>{product.delivery}</p>
        <div></div>
        <button className="bg-blue-500 px-4 py-2 text-white rounded">
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default Card;
