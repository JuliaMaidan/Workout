import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesByGenre } from "../services/fetchMovies";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const MoviesByGenre = () => {
  const { category } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        const moviesData = await getMoviesByGenre(category);
        setMovies(moviesData);
        console.log(moviesData);
      } catch (error) {
        console.log("Помилка при отриманні фільмів за жанром:", error);
      }
    };
    fetchMoviesByGenre();
  }, [category]);

  return (
    <div>
      <h2>Genre: {category}</h2>
      <ul>
        {movies.map(({ id, title, poster_path, vote_average }) => (
          <li key={id}>
            <Link to={`/movie/${id}`}>
              <p>{title}</p>
              <p>{vote_average}</p>
              <img
                src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
                alt={title}
                height="300"
              />
            </Link>
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
};

export default MoviesByGenre;
