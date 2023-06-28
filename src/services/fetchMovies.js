import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = {
  api_key: "e46f406ff40897ad9456c1375654d5d9",
};

export const getMovies = async () => {
  try {
    const response = await axios.get("trending/all/day");
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Не вдалося отримати список фільмів.");
  } catch (error) {
    console.log("Виникла помилка при отриманні списку фільмів:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get("genre/movie/list");
    return response.data.genres;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// export const getMoviesByGenre = async (genreId) => {
//   try {
//     const response = await axios.get("discover/movie", {
//       params: {
//         with_genres: genreId,
//       },
//     });
//     if (response.status === 200) {
//       return response.data.results;
//     }
//     throw new Error("Не вдалося знайти фільми за жанром.");
//   } catch (error) {
//     console.log("Виникла помилка при пошуку фільмів за жанром:", error);
//     throw error;
//   }
// };

export const getMoviesByGenre = async (genreName) => {
  try {
    // Отримати ID жанру на основі назви
    const genreResponse = await axios.get("genre/movie/list");
    const genreId = genreResponse.data.genres.find(
      (genre) => genre.name === genreName
    )?.id;

    if (!genreId) {
      throw new Error("Жанр не знайдено.");
    }

    // Виконати запит для отримання фільмів за ID жанру
    const response = await axios.get("discover/movie", {
      params: {
        with_genres: genreId,
      },
    });

    if (response.status === 200) {
      return response.data.results;
    }
    throw new Error("Не вдалося знайти фільми за жанром.");
  } catch (error) {
    console.log("Виникла помилка при пошуку фільмів за жанром:", error);
    throw error;
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}`);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Не вдалося отримати деталі фільму.");
  } catch (error) {
    console.log("Виникла помилка при отриманні деталей фільму:", error);
    throw error;
  }
};

export const getMovieVideos = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}/videos`);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Не вдалося отримати трейлери фільму.");
  } catch (error) {
    console.log("Виникла помилка при отриманні трейлерів фільму:", error);
    throw error;
  }
};
