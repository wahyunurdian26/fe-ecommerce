import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import customAPI from "../api";
import { FaPlus } from "react-icons/fa";

const DetailProduct = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const priceFormat = (price) => {
    const rupiahFormat = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
    return rupiahFormat;
  };

  const productData = async () => {
    try {
      const { data } = await customAPI.get(`/product/${id}`);
      setProduct(data.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    productData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="card lg:card-side bg-base-300 shadow-xl">
        <figure>
          <img
            src={product.image}
            alt={product.name}
            className="w-screen h-[500px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <span className="text-3xl mt-2 text-accent font-bold">
            {priceFormat(product.price)}
          </span>
          <span className="badge badge-primary">{product.category}</span>
          <span className="mt-3 font-bold">Stok : {product.stock}</span>
          <p className="mt-3">{product.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-lg">
              <FaPlus /> Keranjang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
