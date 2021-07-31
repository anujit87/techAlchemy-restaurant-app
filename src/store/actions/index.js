import { apiFetchRestaurantDetails, apiFetchRestaurants } from "../api";
import { FETCH_RESTAURANTS_FAILURE, FETCH_RESTAURANTS_LOADING, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANT_DETAILS_FAILURE, FETCH_RESTAURANT_DETAILS_LOADING, FETCH_RESTAURANT_DETAILS_SUCCESS } from "../constants";

export default function fetchRestaurants() {
  return async function dispatchable(dispatch) {
    try {
        dispatch({ type: FETCH_RESTAURANTS_LOADING })
      const response = await apiFetchRestaurants();
      dispatch({ type: FETCH_RESTAURANTS_SUCCESS, payload: response.data.allRestaurants });
    } catch (e) {
        dispatch({ type: FETCH_RESTAURANTS_FAILURE })
      console.log(e);
    }
  };
}

export function fetchRestaurantDetails(restaurantId) {
  return async function dispatchable(dispatch) {
    try {
        dispatch({ type: FETCH_RESTAURANT_DETAILS_LOADING })
      const response = await apiFetchRestaurantDetails(restaurantId);
      dispatch({ type: FETCH_RESTAURANT_DETAILS_SUCCESS, payload: response.data.restaurantDetail });
    } catch (e) {
        dispatch({ type: FETCH_RESTAURANT_DETAILS_FAILURE })
      console.log(e);
    }
  };
}
