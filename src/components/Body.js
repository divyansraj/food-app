import { restaurantList, swiggyData } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useGetRestaurants from "../utils/useGetRestaurants";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState([]);

  const { filteredRestaurants, allRestaurants, setFilteredRestaurants } = useGetRestaurants();

  console.log("render()");

  //not render component (early return)
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Restraurant">
      <h1 className="head">Restaurants with online food delivery</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurant and food"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="btn2"
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="Restraurant-card">
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
