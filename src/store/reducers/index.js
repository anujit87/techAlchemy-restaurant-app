import { FETCH_RESTAURANTS_FAILURE, FETCH_RESTAURANTS_LOADING, FETCH_RESTAURANTS_SUCCESS } from "../constants";

const initialState = {
    restaurants: {
        data: [],
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
    default:
      return state;
  }
}
