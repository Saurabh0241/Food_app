import Shimmer from "../ShimmerUI/Shimmer";
import { useParams } from "react-router-dom";
import "./Reasturantsinfo.css";
import useReasturantsmenu from "../Data/useReasturantsmenu";
import { useState } from "react";
import RestaurantCategory from "./Reasturantscatgories";
const Reastaurantsinfo = () => {
  const { resId } = useParams();

  const Resinfo = useReasturantsmenu(resId);

  console.log(Resinfo);

  const dummy = "Dummy Data";

  const resInfo = useReasturantsmenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (Resinfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    Resinfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    Resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log("resinfo", itemCards);
  console.log(Resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    Resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories.card?.card?.title);
  return (
    <div className="res_cardmenu">
      <div className=" text-center">
        <h1 className="font-bold my-4 text-2xl">{name}</h1>
        <h3 className="font-bold text-lg">
          {cuisines.join(", ")}-{costForTwoMessage}
        </h3>
        {categories.map((category, index) => (
          // controlled component
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
          />
        ))}
      </div>
    </div>
  );
};

export default Reastaurantsinfo;
