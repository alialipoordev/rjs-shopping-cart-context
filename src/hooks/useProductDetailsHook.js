import { useContext } from "react";

import { ProductsContext } from "../context/ProductsContext";

const useProductDetails = (id) => {
  const products = useContext(ProductsContext);
  const result = products.find((product) => product.id === id);
  return result;
};

export { useProductDetails };
