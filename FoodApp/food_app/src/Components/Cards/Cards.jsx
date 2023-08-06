import React from "react";
import "./Cards.css";
import { CDN_URL } from "../Data/Data";
import { useContext } from "react";
import UserContext from "../Data/UseContext";

function Cards(props) {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData;
  return (
    <div className="m-6 p-4 w-[300px] bg-gray-200 rounded-xl hover:bg-gray-300">
      <img className="rounded-lg" alt="" src={CDN_URL + cloudinaryImageId} />

      <h2 className="text-orange-400 font-bold py-2 text-lg ">{name}</h2>
      <h4 className="heading">{cuisines.join(", ")}</h4>
      <h4 className="heading">{avgRating}</h4>
      <h4 className="heading">₹ {costForTwo / 100} FOR TWO</h4>
      <h4 className="heading">{deliveryTime}min</h4>
    </div>
  );
}

export default Cards;

export const withpromotedlabel = (Cards) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <Cards {...props} />
      </div>
    );
  };
};
