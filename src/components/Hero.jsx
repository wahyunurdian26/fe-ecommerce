import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Hero = () => {
  const { products } = useLoaderData();
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            Selamat datang di Toko Serba 35
          </h1>
          <p className="mt-8 mx-w-xl text-lg leading-8">
            Dimana kalian bisa mencari baju, sepatu, kemeja, dll
          </p>
          <div className="mt-10">
            <Link to="/products" className="btn btn-primary">
              Produk kami
            </Link>
          </div>
        </div>
        <div className="hidden lg:carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
          {products.map((item) => (
            <div
              className="carousel-item"
              key={item._id}
              style={{ maxWidth: "300px" }}
            >
              {" "}
              {/* Adjust max-width as needed */}
              <img
                src={item.image}
                alt={item.name}
                className="rounded-box w-full h-auto"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />{" "}
              {/* Adjust max-height as needed */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
