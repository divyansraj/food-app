import { restaurantList, swiggyData } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useGetRestaurants from "../utils/useGetRestaurants";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState([]);
  const { filteredRestaurants, allRestaurants, setFilteredRestaurants } =
    useGetRestaurants();

  const isonline = useOnline();
  if (!isonline) {
    return <h1>📴You're offline now</h1>;
  }

  //not render component (early return)
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" max-w-[1280px] mx-auto my-0 pt-5 ">
      <h1 className="mb-5 font-semibold text-2xl">
        Restaurants with online food delivery
      </h1>

      <div className=" w-full">
        <input
          type="text"
          className=" w-[600px] text-black p-4 rounded-l-2xl border-2 border-solid border-[rgb(103, 98, 98)] outline-none mb-5"
          placeholder="Search for restaurant and food"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="rounded-r-2xl p-4 text-black border-2 border-solid outline-none bg-transparent "
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex justify-center flex-wrap gap-12">
        {filteredRestaurants?.length == 0 ? (
          <h1>No Restaurants Found...</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
