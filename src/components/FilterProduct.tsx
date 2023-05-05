interface Props {
  products: [];
  setProducts: () => void;
  dispatch: any;
  copyProducts: never[];
  setCopyProducts: React.Dispatch<React.SetStateAction<never[]>>;
  state: any;
}

const FilterProduct = ({
  copyProducts,
  products,
  setCopyProducts,
  dispatch,
  state,
}: Props) => {
  return (
    <div className="w-[20%] h-[39rem] bg-[#343A40] text-white m-2 p-4 flex flex-col gap-y-12">
      <h2 className="text-3xl font-light">Filter Products</h2>
      <div
        className="text-white flex flex-col gap-y-4"
        onChange={(e) => {
          dispatch({ type: "sort", payload: e.target.value });
          if (state.sort === "Ascending") {
            console.log("asd");
            setCopyProducts(copyProducts.sort((a, b) => a.price - b.price));
          }
          if (state.sort === "Descending") {
            console.log("des");
            setCopyProducts(products.sort((a, b) => b.price - a.price));
          }
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
              dispatch({ type: "inStock" });
              state.inStock
                ? setCopyProducts(
                    copyProducts.filter((item) => item.inStock === true)
                  )
                : setCopyProducts(products);
            }}
            type="checkbox"
            checked={state.inStock}
            id="out-of-stock"
            value={"Include out of stock"}
          />
          <label htmlFor="out-of-stock">Include out of stock</label>
        </span>
        <span>
          <input
            onChange={() => {
              dispatch({ type: "fastDelivery" });
              state.fastDelivery
                ? setCopyProducts(products)
                : setCopyProducts(
                    copyProducts.filter((item) => item.fastDelivery === true)
                  );
            }}
            checked={state.fastDelivery}
            type="checkbox"
            id="fast-delivery"
            value={"Fast delivery only"}
          />
          <label htmlFor="fast-delivery">Fast delivery only</label>
        </span>
      </div>
      <div>Rating:</div>
      <button
        className="bg-gray-100 px-20 py-2 rounded text-slate-700 hover:bg-gray-200"
        onClick={() => {
          dispatch({ type: "removeFilter" });
          setCopyProducts(products);
        }}
      >
        Clear Filter
      </button>
    </div>
  );
};

export default FilterProduct;
