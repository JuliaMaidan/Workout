import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getMovieDetails } from "../services/fetchMovies";
// import ReactPlayer from "react-player";

const AboutMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //   const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
        setIsLoading(true);
      } catch (error) {
        console.log("Помилка при отриманні інформації про фільм:", error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  console.log(movie);
  //   useEffect(() => {
  //     const fetchMovieVideos = async () => {
  //       try {
  //         const movieVideos = await getMovieVideos(id);
  //         // setVideos((prevMovie) => ({
  //         //   ...prevMovie,
  //         //   videos: movieVideos.results,
  //         // }));
  //         setVideos(movieVideos.results);
  //         console.log(movieVideos.results);
  //       } catch (error) {
  //         console.log("Помилка при отриманні відео для фільму:", error);
  //       }
  //     };

  //     fetchMovieVideos();
  //   }, []);

  //   const { key, name } = videos;
  const {
    backdrop_path,
    genres,
    overview,
    poster_path,
    production_countries,
    release_date,
    runtime,
    tagline,
    title,
    vote_average,
  } = movie;

  if (!isLoading) {
    return <div>Loading...</div>;
  }
  const url = `https://image.tmdb.org/t/p/w780/`;
  return (
    <div>
      <h1>About</h1>
      <div
        style={{
          backgroundImage: `url(${url}${backdrop_path})`,
        }}
      >
        <p>{title}</p>
        <p>{tagline}</p>
        <p>{release_date}</p>
        <p>{runtime}</p>
        <p>{overview}</p>
        <img src={`${url}${poster_path}`} alt="" width="200" />
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <p>{vote_average}</p>
        <ul>
          {production_countries.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>

      {/* <div>
        <ul>
          {videos.map(({ id, key, name }) => (
            <li key={id}>
              <p>{name}</p>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${key}`}
                controls
              />
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default AboutMovie;
