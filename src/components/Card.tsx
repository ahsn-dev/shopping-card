interface Props {
  product: object;
}

const Card = ({ product }: Props) => {
  return (
    <div className="text-black w-full h-full rounded border border-gray-300">
      <img src="https://picsum.photos/350/200" alt="" className="rounded-t" />
      <div className="p-4 flex flex-col">
        <h3 className="text-xl font-medium">{product.title}</h3>
        <p>
          ₹<span>{product.price}</span>
        </p>
        <p>{product.delivery}</p>
        <div></div>
      </div>
      <div className="p-4">
        <button className="bg-blue-500 text-white rounded py-2 px-3 font-light">
          {product.outof ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default Card;
