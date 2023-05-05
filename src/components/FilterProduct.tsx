interface Props {
  products: [];
  setProducts: () => void;
  dispatch: any;
}

const FilterProduct = ({ product, setProducts, dispatch }: Props) => {
  return (
    <div className="w-[20%] h-[39rem] bg-[#343A40] text-white m-2 p-4 flex flex-col gap-y-12">
      <h2 className="text-3xl font-light">Filter Products</h2>
      <div
        className="text-white flex flex-col gap-y-4"
        onChange={(e) => {
          dispatch({ action: "sort", payload: e.target.value });
        }}
      >
        <span>
          <input type="radio" id="ascending" name="order" value={"Ascending"} />
          <label htmlFor="ascending">Ascending</label>
        </span>
        <span>
          <input
            type="radio"
            id="descending"
            name="order"
            value={"Descending"}
          />
          <label htmlFor="descending">Descending</label>
        </span>
      </div>
      <div className="flex flex-col text-white gap-y-6">
        <span>
          <input
            onChange={() => {
              dispatch({ action: "inStock" });
            }}
            type="checkbox"
            id="out-of-stock"
            value={"Include out of stock"}
          />
          <label htmlFor="out-of-stock">Include out of stock</label>
        </span>
        <span>
          <input
            onChange={() => {
              dispatch({ action: "fastDelivery" });
            }}
            type="checkbox"
            id="fast-delivery"
            value={"Fast delivery only"}
          />
          <label htmlFor="fast-delivery">Fast delivery only</label>
        </span>
      </div>
      <div>Rating:</div>
      <button className="bg-gray-100 px-20 py-2 rounded text-slate-700 hover:bg-gray-200">
        Clear Filter
      </button>
    </div>
  );
};

export default FilterProduct;
