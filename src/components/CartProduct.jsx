import React from "react";
import { Link } from "react-router-dom";

const CartProduct = ({ item }) => {
  const priceFormat = (price) => {
    const rupiahFormat = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
    return rupiahFormat;
  };

  return (
    <>
      <div key={item._id} className="card bg-base-300 shadow-xl">
        <figure>
          <img src={item.image} alt="product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">{item.name}</h2>
          <p>{priceFormat(item.price)}</p>
          <p className="font-bold text-accent">
            {item.description.substring(0, 50)}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/product/${item._id}`} className="btn btn-primary">
              TUKU
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
