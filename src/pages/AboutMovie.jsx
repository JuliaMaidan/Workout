import { useParams, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  getCast,
  getMovieDetails,
  getMovieVideos,
  getReviews,
  getSimilar,
} from "../services/fetchMovies";
import ReactPlayer from "react-player";
import styles from "../components/styled/aboutMovie.module.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BsPlusLg, BsFillPlayFill, BsInfo } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDelete,
} from "react-icons/ai";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { addToFavorites, addToWatchingList } from "../services/buttonsLogic";

const AboutMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const videoRef = useRef(null);
  const [similar, setSimilar] = useState([]);

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

  useEffect(() => {
    const fetchMovieVideos = async () => {
      try {
        const movieVideos = await getMovieVideos(id);
        setVideos(movieVideos.results);
      } catch (error) {
        console.log("Помилка при отриманні відео для фільму:", error);
      }
    };

    fetchMovieVideos();
  }, [id]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCast(id);
        setCast(cast.cast);
      } catch (error) {
        console.log("Помилка при отриманні cast:", error);
      }
    };
    fetchCast();
  }, [id]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews(id);
        setReviews(reviews.results);
        console.log(reviews);
      } catch (error) {
        console.log("Помилка при отриманні reviews:", error);
      }
    };
    fetchReviews();
  }, [id]);

  useEffect(() => {
    const fetchSimilar = async () => {
      try {
        const similar = await getSimilar(id);
        setSimilar(similar.results);
        console.log(similar.results);
      } catch (error) {
        console.logh(error);
      }
    };
    fetchSimilar();
  }, [id]);

  const handlePlayButtonClick = () => {
    videoRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const [visibleHeroes, setVisibleHeroes] = useState(9);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const showMoreHeroes = () => {
    const totalHeroes = cast.length;
    const remainingHeroes = totalHeroes - visibleHeroes;
    const nextVisibleHeroes = Math.min(visibleHeroes + 9, totalHeroes);

    setVisibleHeroes(nextVisibleHeroes);

    if (remainingHeroes <= 9) {
      setShowMoreButton(false);
    }
  };

  const hideHeroes = () => {
    setVisibleHeroes(9);
    setShowMoreButton(true);
  };

  const [expandedComments, setExpandedComments] = useState([]);

  const handleToggle = (id) => {
    if (expandedComments.includes(id)) {
      setExpandedComments((prevExpandedComments) =>
        prevExpandedComments.filter((commentId) => commentId !== id)
      );
    } else {
      setExpandedComments((prevExpandedComments) => [
        ...prevExpandedComments,
        id,
      ]);
    }
  };

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
    budget,
  } = movie;

  if (!isLoading) {
    return <div>Loading...</div>;
  }
  const url = `https://image.tmdb.org/t/p/w780/`;
  const date = release_date;
  const year = date.split("-")[0];

  const releaseDate = release_date;
  const parts = releaseDate.split("-");
  const formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;

  const minutes = runtime;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedTime = `${hours}h ${remainingMinutes}m`;

  const rating = (vote_average * 10).toFixed();

  return (
    <div>
      <div
        className={styles.container}
        style={{
          backgroundImage: [
            "radial-gradient(circle, rgba(144,135,152,0.61) 0%, rgba(144,135,152,0.5) 100%)",
            `url(${url}${backdrop_path})`,
          ],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.backdrop}>
          <div>
            <img
              className={styles.poster}
              src={`${url}${poster_path}`}
              alt=""
            />
            <p className={styles.budget}>Budget: {budget}$</p>
          </div>

          <div className={styles.info_wrapper}>
            <p className={styles.title}>
              {title} ({year})
            </p>
            <div className={styles.date_wrapper}>
              <p className={styles.date}>{formattedDate}</p>
              <p className={styles.runtime}>{formattedTime}</p>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.circle}>
                <CircularProgressbar
                  value={rating}
                  text={`${rating}%`}
                  styles={buildStyles({
                    pathColor: "#f24b88f8",
                    textColor: "#f24b88f8",
                  })}
                />
              </div>
              <p className={styles.rating}>Vote rating</p>
              <button className={styles.play} onClick={handlePlayButtonClick}>
                <BsFillPlayFill className={styles.play_svg} />
                Trailer
              </button>
              <div className={styles.btns_wrapper}>
                <button
                  className={styles.btn}
                  onClick={() => addToWatchingList(id)}
                >
                  <BsPlusLg className={styles.btn__svg} />
                </button>
                <button
                  className={styles.btn}
                  onClick={() => addToFavorites(id)}
                >
                  <AiOutlineHeart className={styles.btn__svg} />
                </button>
              </div>
            </div>
            <i className={styles.tagline}>{tagline}</i>

            <p className={styles.desc}>Overview:</p>
            <p className={styles.overview}>{overview}</p>
            <p className={styles.desc}>Genres:</p>
            <ul className={styles.genres}>
              {genres.map(({ id, name }) => (
                <li className={styles.genres__item} key={id}>
                  {name}
                </li>
              ))}
            </ul>
            <p className={styles.desc}>Production countries</p>
            <ul className={styles.genres}>
              {production_countries.map(({ name }) => (
                <li className={styles.genres__item} key={name}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className={styles.cast__title}>Starring</p>
        <ul className={styles.cast}>
          {cast
            .slice(0, visibleHeroes)
            .map(({ name, profile_path, character, id }) => (
              <li className={styles.cast__item} key={id}>
                <img
                  className={styles.cast__img}
                  src={`${url}${profile_path}`}
                  alt={name}
                  width="200"
                />
                <p className={styles.cast__name}>{name}</p>
                <p className={styles.cast__character}>Character:</p>
                <p className={styles.cast__hero}>{character}</p>
              </li>
            ))}
        </ul>
        <div className={styles.cast__btns}>
          {showMoreButton && (
            <button className={styles.cast__more} onClick={showMoreHeroes}>
              Show more
              <BiSolidDownArrow className={styles.cast__svg} size={11} />
            </button>
          )}
          {visibleHeroes > 9 && (
            <button className={styles.cast__hide} onClick={hideHeroes}>
              Hide
              <BiSolidUpArrow className={styles.cast__svg} size={11} />
            </button>
          )}
        </div>
      </div>

      <div className={styles.video__wrapper}>
        <p className={styles.video__title}>Trailers</p>
        <ul className={styles.video} ref={videoRef}>
          {videos.map(({ id, key, name }, index) => (
            <li
              key={id}
              // className={index === currentVideoIndex ? styles.active : ""}
              className={styles.video__item}
            >
              {index === currentVideoIndex && (
                <>
                  {/* <p className={styles.video__name}>{name}</p> */}
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${key}`}
                    controls
                    width="900px"
                    height="500px"
                    className={styles.video__player}
                  />
                </>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.video__btns}>
          <button
            className={styles.video__btn}
            onClick={() =>
              setCurrentVideoIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : videos.length - 1
              )
            }
          >
            <AiOutlineLeft size={36} className={styles.video__svg} />
          </button>
          <button
            className={styles.video__btn}
            onClick={() =>
              setCurrentVideoIndex(
                (prevIndex) => (prevIndex + 1) % videos.length
              )
            }
          >
            <AiOutlineRight size={36} className={styles.video__svg} />
          </button>
        </div>
      </div>
      <p className={styles.cast__title}>Reviews</p>
      <div className={styles.reviews__wrapper}>
        {/* <p className={styles.cast__title}>Reviews</p> */}
        <ul className={styles.reviews}>
          {reviews.length === 0 && (
            <p>We don't have any reviews for this movie.</p>
          )}
          {reviews.map(({ id, author, content, created_at }) => (
            <li className={styles.reviews__item} key={id}>
              <p className={styles.reviews__author}>Author: {author}</p>
              {content.length <= 470 ? (
                <p className={styles.reviews__text}>{content}</p>
              ) : (
                <>
                  <p className={styles.reviews__text}>
                    {expandedComments.includes(id)
                      ? content
                      : `${content.slice(0, 470)}...`}
                  </p>
                  <button
                    className={styles.reviews__btn}
                    onClick={() => handleToggle(id)}
                  >
                    {expandedComments.includes(id) ? "Hide" : "Read more"}
                  </button>
                </>
              )}
              <p className={styles.reviews__date}>{created_at}</p>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.cast__title}>Similar movies</p>
      <div>
        <ul>
          {similar.map(({ id, title, poster_path }) => (
            <li key={id}>
              <p>{title}</p>
              <img
                className={styles.mylist__img}
                src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
                alt={title}
                width="205"
              />
              <button className={styles.mylist__btn}>
                <Link to={`/movie/${id}`}>
                  <BsInfo size={30} className={styles.mylist__svg} />
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMovie;
