import axios from "axios";

axios.defaults.baseURL = "http://www.themealdb.com/api/json/v1/1/";

export const getCategories = async () => {
  try {
    const response = await axios.get("/categories.php");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getRecipesByCategory = async (category) => {
  try {
    const response = await axios.get(`/filter.php?c=${category}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

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
