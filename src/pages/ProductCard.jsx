import React from "react";
import { Link } from "react-router-dom";
import SkeletonCard from "../skeleton/SkeletonCard";

const ProductCard = ({ products, loading }) => {
  if (!products || products.length === 0) return <p>No products found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
      {loading
        ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
        : products.map((product) => (
            <div
              key={product.id}
              className="border flex flex-col items-center p-3 bg-[#090909] border-[#181818]"
            >
              <img src={product.thumbnail} width={200} alt={product.title} />
              <h2 className="text-lg font-bold text-white">{product.title}</h2>
              <p className="text-gray-300">
                {product.description.slice(0, 100)}...
              </p>
              <Link
                to={`/products/${product.id}`}
                className="mt-4 border-2 px-1 rounded-md bg-[#0abcf9] border-transparent shadow-lg shadow-[#0abcf99e]  text-lg"
              >
                View Details
              </Link>
            </div>
          ))}
    </div>
  );
};

export default ProductCard;
