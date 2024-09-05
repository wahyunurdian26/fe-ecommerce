import React from "react";
import customAPI from "../api";
import { useLoaderData } from "react-router-dom";
import Filter from "../components/Filter";

export const loader = async ({ Request }) => {
  const { data } = await customAPI.get("/product");

  console.log(Request);
  const products = data.data;

  return { products };
};

const ProductView = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <>
      <Filter />
    </>
  );
};

export default ProductView;
