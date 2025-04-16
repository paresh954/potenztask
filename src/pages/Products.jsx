import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(false);
      // const res = axios.get(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(page-1)*itemsPerPage}`);
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const start = (page - 1) * itemsPerPage;
  const currentItems = products.slice(start, start + itemsPerPage);

  return (
    <div className="text-white mt-7">
      <h2 className="text-3xl mb-4 text-center">All Products</h2>
      <ProductCard products={currentItems} loading={loading} />

      <div className="flex justify-center items-center gap-4 py-7">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-4 py-1 rounded-md text-white ${
            page === 1
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Prev
        </button>
        <span className="text-white font-medium">Page {page}</span>
        <button
          disabled={start + itemsPerPage >= products.length}
          onClick={() => setPage(page + 1)}
          className={`px-4 py-1 rounded-md text-white ${
            start + itemsPerPage >= products.length
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
