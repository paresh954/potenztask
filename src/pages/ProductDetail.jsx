import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartArrowDown, FaStar } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="text-white relative flex  p-8  gap-8 mt-20 justify-center ">
      <div
        className="text-[#0abcf9] absolute top-0 left-20 underline cursor-pointer"
        onClick={() => window.history.back()}
      >
        Back
      </div>
      <div className="bg-[#090909] rounded-md border-[#181818]">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="font-mono">
        <h2 className="text-2xl font-normal mb-4">{product.title}</h2>
        <div className="mb-3 bg-black flex items-center gap-2">
          <div className="bg-[#0abcf9] py-[2px] pe-[4px] ps-[6px] flex gap-1 items-center rounded-[3px] ">
            {product.rating}
            <FaStar size={15} />
          </div>
          <span className="text-[#878787] font-normal">
            32,222 Ratings & 2,064 Reviews
          </span>
        </div>
        <div>
          <p className="text-[#0abcf9] font-bold mb-2">Special price</p>
          <h2 className="text-3xl font-bold">
            ${product.price}{" "}
            <span className="text-[#878787]  text-2xl font-normal line-through ml-3">
              ${product.price + 10}
            </span>{" "}
            <span className="text-[#0abcf9] text-lg ml-4 font-normal">
              {product.discountPercentage}% off
            </span>
          </h2>
          <p className="text-[#878787] mt-2">
            Secure {product.shippingInformation}
          </p>
        </div>
        <p className="mt-2 w-[700px]">{product.description}</p>
        <div className="flex gap-5">
          <button className="bg-[#0abcf9] hover:bg-[#0abcf9] text-white py-2 px-4 rounded-md mt-4 mb-4 uppercase flex items-center gap-3 w-[200px] justify-center">
            <FaCartArrowDown />
            Add TO Cart
          </button>
          <button className="bg-[#0abcf9] hover:bg-[rgb(0 135 182);] text-white py-2 px-4 rounded-md mt-4 mb-4 uppercase flex items-center gap-3 w-[200px] justify-center">
            <AiFillThunderbolt />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
