import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import ProductCard from "./ProductCard";

const getRandomeProducts = (products, count = 5) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const key = `userProducts_${user.email}`;
        const stored = localStorage.getItem(key);

        if (stored) {
          setProducts(JSON.parse(stored));
        } else {
          const res = await axios.get("https://dummyjson.com/products");
          const selected = getRandomeProducts(res.data.products, 5);
          setProducts(selected);
          setLoading(false);
          localStorage.setItem(key, JSON.stringify(selected));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="text-white p-8">
      <div className="flex items-center gap-4 text-white border p-4">
        <div className="border-2 size-32 rounded-full p-3 border-[#0abcf9]">
          <img src={user.image} alt={user.firstName} className="rounded-full" />
        </div>
        <div>
          <span>Hello,</span>
          <h1 className="text-3xl font-bold">
            {user.lastName} {user.firstName}
          </h1>
        </div>
      </div>

      <div className="mt-8 border p-4">
        <h1 className="text-3xl font-bold">Personal Information</h1>
        <div className="mt-4 flex gap-4">
          <input
            type="text"
            className=" text-[#0abcf9] p-2 border text-xl border-[#0abcf9] outline-none"
            readOnly
            value={user.lastName}
          />
          <input
            type="text"
            className=" text-[#0abcf9] p-2 border text-xl border-[#0abcf9] outline-none"
            readOnly
            value={user.firstName}
          />
        </div>
      </div>
      <div className="mt-8 border p-4">
        <h1 className="text-3xl font-bold">Your Gender</h1>
        <div className="mt-4 flex gap-4">
          <label className="text-xl">
            <input
              type="radio"
              name="gender"
              value="male"
              readOnly
              checked={user.gender === "male"}
            />{" "}
            Male
          </label>
          <label className="text-xl">
            <input
              type="radio"
              name="gender"
              value="female"
              readOnly
              checked={user.gender === "female"}
            />{" "}
            Female
          </label>
        </div>
      </div>
      <div className="mt-8 border p-4">
        <h1 className="text-3xl font-bold">Email Address</h1>
        <div className="mt-4 flex gap-4">
          <input
            type="email"
            className=" text-[#0abcf9] p-2 border text-xl border-[#0abcf9] outline-none w-[500px]"
            readOnly
            value={user.email}
          />
        </div>
      </div>
      <div className="mt-8 border p-4">
        <h1 className="text-3xl font-bold">Mobile Number</h1>
        <div className="mt-4 flex gap-4">
          <input
            type="tel"
            className=" text-[#0abcf9] p-2 border text-xl border-[#0abcf9] outline-none w-[200px]"
            readOnly
            value={user.phone}
          />
        </div>
      </div>
      <div className="mt-8 border p-4">
        <h1 className="text-3xl font-bold">Your Order</h1>
        <div className="mt-4">
          <ProductCard products={products} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
