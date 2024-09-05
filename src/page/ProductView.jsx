import React from "react";
import customAPI from "../api";
import { useLoaderData } from "react-router-dom";
import Filter from "../components/Filter";
import CartProduct from "../components/CartProduct";
import Pagination from "../components/Pagination";

export const loader = async ({ request }) => {
  const params = Object.fromEntries(
    new URL(request.url).searchParams.entries()
  );

  const { data } = await customAPI.get("/product", { params: params });

  // console.log(params);
  const products = data.data;
  // console.log(products);
  const pagination = data.pagination;

  return { products, params, pagination };
};

const ProductView = () => {
  const { products, pagination } = useLoaderData();

  // console.log(products);

  return (
    <>
      <Filter />
      <h3 className="text-lg text-primary font-bold text-right my-3">
        Total {pagination.totalProduct} Product
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {products.length === 0 ? (
          <h1 className="text-3xl font-bold mt-5">
            Tidak ada produk yang dicari
          </h1>
        ) : (
          products.map((item) => <CartProduct item={item} key={item._id} />)
        )}
      </div>
      <div className="mt-5 flex justify-center">
        <Pagination />
      </div>
    </>
  );
};

export default ProductView;
