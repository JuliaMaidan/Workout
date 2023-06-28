import axios from "axios";
// const API_KEY = "283cb5899202338d7400a870966214847ca732ad";
axios.defaults.baseURL = "https://wger.de/api/v2/muscle/";

export const getCategories = async () => {
  try {
    const response = await axios.get("");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// axios.defaults.baseURL = "https://api.api-ninjas.com/v1/exercises";

// export const getCategories = async () => {
//   try {
//     const apiKey = "JLOPLUDyYj58mahzU9R1IB2u0EewGg2ldmN46BC0";
//     const headers = {
//       "X-Api-Key": apiKey,
//     };

//     const response = await axios.get("?offset", { headers });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };

// export const getRecipesByCategory = async (category) => {
//   try {
//     const response = await axios.get(`/filter.php?c=${category}`);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };

// export const getMovieById = async (id) => {
//   const { data } = await axios.get(`/movie/${id}`);
//   return data;
// };

// export const getCast = async (id) => {
//   const { data } = await axios.get(`/movie/${id}/credits`);
//   return data;
// };

// export const getReviews = async (id) => {
//   const { data } = await axios.get(`/movie/${id}/reviews`);
//   return data;
// };

// export const getSearchedMovies = async (search) => {
//   const { data } = await axios.get("/search/movie", {
//     params: {
//       query: search,
//     },
//   });
//   return data;
// };
