import { FETCH_RESTAURANTS_FAILURE, FETCH_RESTAURANTS_LOADING, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANT_DETAILS_FAILURE, FETCH_RESTAURANT_DETAILS_LOADING, FETCH_RESTAURANT_DETAILS_SUCCESS } from "../constants";

const initialState = {
    restaurants: {
        data: [],
        status: 'LOADING'
    },
    restaurantDetails: {
        data: undefined,
        status: 'LOADING'
    }
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS_LOADING: {
        const newState = { ...state };
        newState.restaurants.data = [];
        newState.restaurants.status = 'LOADING';
        return newState;
    }
    case FETCH_RESTAURANTS_FAILURE: {
        const newState = { ...state };
        newState.restaurants.data = [];
        newState.restaurants.status = 'ERROR';
        return newState;
    }
    case FETCH_RESTAURANTS_SUCCESS: {
        const newState = { ...state };
        newState.restaurants.data = action.payload;
        newState.restaurants.status = 'SUCCESS';
        return newState;
    }
    case FETCH_RESTAURANT_DETAILS_LOADING: {
        const newState = { ...state };
        newState.restaurantDetails.data = undefined;
        newState.restaurantDetails.status = 'LOADING';
        return newState;
    }
    case FETCH_RESTAURANT_DETAILS_FAILURE: {
        const newState = { ...state };
        newState.restaurantDetails.data = undefined;
        newState.restaurantDetails.status = 'ERROR';
        return newState;
    }
    case FETCH_RESTAURANT_DETAILS_SUCCESS: {
        const newState = { ...state };
        newState.restaurantDetails.data = action.payload;
        newState.restaurantDetails.status = 'SUCCESS';
        return newState;
    }
    default:
      return state;
  }
}
