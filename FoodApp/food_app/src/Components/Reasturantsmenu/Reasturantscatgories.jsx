import ItemList from "./ItemList";
import { AiOutlineCaretDown } from "react-icons/ai";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  console.log(data);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 border-black bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>

          <AiOutlineCaretDown />
        </div>

        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
