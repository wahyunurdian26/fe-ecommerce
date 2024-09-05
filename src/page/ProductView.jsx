import React from "react";
import customAPI from "../api";
import { useLoaderData } from "react-router-dom";
import Filter from "../components/Filter";
import CartProduct from "../components/CartProduct";

export const loader = async ({ request }) => {
  const params = Object.fromEntries(
    new URL(request.url).searchParams.entries()
  );

  const { data } = await customAPI.get("/product", { params: params });

  console.log(params);
  const products = data.data;
  console.log(products);
  return { products, params };
};

const ProductView = () => {
  const { products } = useLoaderData();

  console.log(products);
  return (
    <>
      <Filter />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {products.map((item) => (
          <CartProduct item={item} key={item._id} />
        ))}
      </div>
    </>
  );
};

export default ProductView;
