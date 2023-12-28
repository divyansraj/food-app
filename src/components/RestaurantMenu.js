import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuShimmer } from "./Shimmer";
import { IMG_URL } from "../config";
import About from "./About";
import useRestaurantMenu from "../utils/useRestaurantMenu";

// function filterfood(searchfood,resTempMenu ){
//   const filterdata = resTempMenu.filter((food)=>{
//     return food
//   })
// }

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const [searchfood, setSearchfood] = useState("");

  const { restaurant, resTempMenu, setResTempMenu } = useRestaurantMenu(id);

  if (!restaurant || !resTempMenu) return null;

  return restaurant.length === 0 ? (
    <MenuShimmer />
  ) : (
    <div className="res-menu">
      <div className="res-head">
        <img
          className="res-img"
          src={IMG_URL + restaurant?.cloudinaryImageId}
        ></img>
        <div>
          <h1>{restaurant?.name}</h1>
          <h3>{restaurant?.cuisines && restaurant?.cuisines.join(", ")}</h3>
          <p>
            {restaurant?.city},{restaurant?.areaName}
          </p>
          <p>{restaurant?.locality}</p>
          <h4> {restaurant?.feeDetails?.message}</h4>
          <h2> {restaurant?.avgRating} ★</h2>
          <h4>{restaurant?.totalRatingsString}</h4>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search for food..."
          value={searchfood}
          onChange={(e) => {
            setSearchfood(e.target.value);
          }}
        ></input>
        <button
          className="btn2"
          onClick={() => {
            const data = filterfood(searchfood, resTempMenu);
            setResTempMenu(data);
          }}
        >
          Search
        </button>
      </div>
      <h1>Menu</h1>
      {Object.values(resTempMenu).map((res) =>
        res?.card?.card?.itemCards?.map((item) => (
          <div key={item?.card?.info?.id} className="menu-items">
            <div className="menu-food-card">
              <div className="food-details">
                <h3>{item?.card?.info?.name}</h3>
                {item?.card?.info?.price ? (
                  <h4>Price :₹{item?.card?.info?.price / 100}</h4>
                ) : item?.card?.info?.defaultPrice ? (
                  <h4>Price :₹{item?.card?.info?.defaultPrice / 100}</h4>
                ) : (
                  <h4>Price information not available</h4>
                )}
                <p>{item?.card?.info?.description}</p>
              </div>
              <div className="menu-food-container">
                {item?.card?.info?.imageId ? (
                  <img src={IMG_URL + item?.card?.info?.imageId}></img>
                ) : null}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default RestaurantMenu;
