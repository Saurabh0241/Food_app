import React, { useState } from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LOGO_URL } from "../Data/Data";
import { Link } from "react-router-dom";
import useOnlinestatus from "../Data/useOnlinestatus";
import { useSelector } from "react-redux/es/hooks/useSelector";
function Header() {
  const [btn, setbtn] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);
  const onlinestatus = useOnlinestatus();

  return (
    <div className="flex justify-between top-0 shadow-lg h-24 m-2 mb-2">
      <div className="Logo-container">
        <img className="w-32 cursor-pointer" src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4  font-bold text-lg">
            Online Status:{onlinestatus ? "✔" : "🔴"}
          </li>
          <Link to="/" className="Link">
            <li className="px-4 font-bold text-lg">Home</li>
          </Link>
          <li className="px-4 font-bold text-lg">
            <Link to="/About" className="Link">
              About us
            </Link>
          </li>
          <Link to="/Contact" className="Link">
            <li className="px-4  font-bold text-lg "> Contact us </li>
          </Link>
          <Link to="/Cart" className="Link">
            <li className="px-4 font-bold text-lg cursor-pointer">
              <span className="flex">
                Cart <AiOutlineShoppingCart /> {cartItems.length}
              </span>
            </li>
          </Link>
          <button
            className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              btn === "Login" ? setbtn("Logout") : setbtn("Login")
            }
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
