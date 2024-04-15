import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../hooks/useProductDetailsHook";

import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import styles from "./styles/DetailsPage.module.css";

import { useEffect, useState } from "react";
import api from "../services/config";

function DetailsPage() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  const productDetails = useProductDetails(+id);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (productDetails) {
          setProducts(productDetails);
        } else {
          setProducts(await api.get(`/products/${id}`));
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <img src={products.image} alt={products.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{products.title}</h3>
        <p className={styles.description}>{products.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {products.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {products.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back To Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
