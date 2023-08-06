import React from "react";
import Cards from "../Cards/Cards";
import "./Body.css";
import { useState, useEffect } from "react";
import Shimmer from "../ShimmerUI/Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../Data/useOnlinestatus";
import { withpromotedlabel } from "../Cards/Cards";

function Body() {
  const [Reastaurants, SetReastaurants] = useState([]);
  const [filterrestaurants, setfilterestaurats] = useState([]);
  const [searchtext, setsearchtext] = useState([]);

  const Newcards = withpromotedlabel(Cards);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("Cards1", json?.data?.cards);
    SetReastaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterestaurats(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      "Crads",
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const Searchfilter = () => {
    console.log(Searchdata);
    const Searchdata = Reastaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchtext.toLowerCase())
    );
    setfilterestaurats(Searchdata);
  };

  const filterfunction = () => {
    const filterdata = Reastaurants.filter((res) => res?.info?.avgRating > 4);
    setfilterestaurats(filterdata);
  };

  const onlinestatus = useOnlinestatus();
  if (onlinestatus === false) {
    return (
      <h1 className="font-bold text-2xl">Please Check your Internet...!</h1>
    );
  }

  return Reastaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between m-0">
        <div className="m-2 p-4 flex items-center ">
          <input
            placeholder="Search"
            value={searchtext}
            className="border boreder-solid border-black h-15 p-2 w-80 rounded-lg"
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <button
            className="bg-green-500 py-2  px-4 m-2 rounded-lg"
            onClick={() => Searchfilter()}
          >
            Search
          </button>
        </div>

        <div className="flex items-center">
          <button
            className="bg-blue-400 font-bold py-2 px-2 rounded-lg"
            onClick={() => filterfunction()}
          >
            GET TOP REASTAURANTS
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterrestaurants.map((item) => {
          return (
            <Link
              key={item?.info.id}
              to={"/Reasturants/" + item?.info.id}
              style={{ textDecoration: "none" }}
            >
              {item?.info?.promoted ? (
                <Newcards resData={item?.info} />
              ) : (
                <Cards resData={item?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
