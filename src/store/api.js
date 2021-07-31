import axios from "axios";

const authToken = process.env.REACT_APP_API_AUTH_KEY;

export const apiFetchRestaurants = () => {
    return axios.get('https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants', { headers: { Authorization: `Bearer ${authToken}`}})
}

export const apiFetchRestaurantDetails = (restaurantId) => {
    return axios.get(`https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails/${restaurantId}`, { headers: { Authorization: `Bearer ${authToken}`}})
}