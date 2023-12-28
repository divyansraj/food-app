export function filterData(searchTxt, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) => {
    return restaurant?.info?.name
      ?.toLowerCase()
      .includes(searchTxt.toLowerCase());
  });
  return filterData;
}
