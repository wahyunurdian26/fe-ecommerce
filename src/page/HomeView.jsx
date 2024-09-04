import { useState, useEffect } from "react";
import customAPI from "../api";
import CartProduct from "../components/CartProduct";

const HomeView = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await customAPI.get("/product?limit=3");
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="border-b border-primary pb-5">
        <h2 className="text-2xl font-bold capitalize">product list</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {products.map((item) => (
          <CartProduct item={item} />
        ))}
      </div>
    </>
  );
};

export default HomeView;
