import "./ProductCard.css";
import { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsCollection = collection(db, "products");
      const getData = await getDocs(productsCollection);
      const dataList = getData.docs.map((doc) => doc.data());
      setProducts(dataList);
      console.log(dataList);
    };

    getProducts();
  }, []);

  return (
    <>
      {products.map((product) => {
        return (
          <section className="productCard__container">
            <div className="productCard__grid">
              <div className="productCard__Image-container">
                <img className="productCard__image" src={product.Image} />
              </div>
              <p> {product.Name}</p>
              <p> ${product.PPU}</p>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ProductCard;
