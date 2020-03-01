import API_ENDPOINTS from "../../constants/API_ENPOINTS";
import dummyData from "../../constants/dummyData";

export const  fetchResturantData = () => {
    // fetch(API_ENDPOINTS.GET_RESTURANT_DATA.url)   have to comment it as getting cors error 
    // .then(response => response.json())            to solve this we have to allow origin at your end 
    // .then(data => console.log(data))                using constant mock data to solve solution
    // .catch(err=> console.error(err));
    return dummyData;
}
