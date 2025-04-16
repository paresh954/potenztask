import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className=" flex justify-between px-9 py-4 font-mono">
      <h2 className="text-white text-3xl uppercase">
        <Link to="/products">Taskpotenz</Link>
      </h2>
      <ul className=" flex justify-between gap-8 text-white text-xl">
        <li>
          <Link to="/products">Product</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        {!user ? (
          <li>
            <Link
              className="border-2 py-1 px-4 rounded-md bg-[#0abcf9] border-transparent shadow-lg shadow-[#0abcf99e]"
              to="/login"
            >
              Login
            </Link>
          </li>
        ) : (
          <li>
            <Link
              className="border-2 py-1 px-4 rounded-md bg-[#0abcf9] border-transparent shadow-lg shadow-[#0abcf99e]"
              onClick={logout}
              to="/logout"
            >
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
