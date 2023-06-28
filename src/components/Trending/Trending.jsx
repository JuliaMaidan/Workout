import { useEffect, useState } from "react";
import { getMovies } from "../../services/fetchMovies";
import { AiFillStar } from "react-icons/ai";
import styles from "./trending.module.scss";
import Buttons from "../Buttons/Buttons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await getMovies();
      setMovies(data.results);
      console.log(data.results);
    }
    fetchMovies();
  }, []);

  const settings = {
    slidesToShow: 4, // Відображення 4 елементів в рядку
    slidesToScroll: 1,
    zIndex: 1,
    // Прокручування по 4 елементи за раз
    // Інші налаштування за необхідністю
  };

  return (
    <div className={styles.box}>
      <h2 className={styles.caption}>New & Popular</h2>
      <Slider styles={{ paddingBlock: "100px" }} {...settings}>
        {movies.map(
          ({ name, title, id, backdrop_path, vote_average, release_date }) => (
            <div className={styles.movies__item} key={id}>
              <div className={styles.movies__info}>
                <img
                  className={styles.movies__img}
                  src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
                  alt={title}
                />
                <p className={styles.movies__name}>{title || name}</p>
                <div className={styles.wrapper}>
                  <p className={styles.movies__date}>{release_date}</p>
                  <div className={styles.movies__rate}>
                    <AiFillStar className={styles.movies__svg} />
                    <p className={styles.movies__vote}>
                      {vote_average.toFixed(1)}
                    </p>
                  </div>
                </div>
                <Buttons />
              </div>

              <p className={styles.movies__name}>{title || name}</p>
              <img
                className={styles.movies__img}
                src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
                alt={title}
              />
            </div>
          )
        )}
      </Slider>
      {/* <ul className={styles.movies}>
        {movies.map(
          ({ name, title, id, backdrop_path, vote_average, release_date }) => (
            <li className={styles.movies__item} key={id}>
              <div className={styles.movies__info}>
                <img
                  className={styles.movies__img}
                  src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
                  alt={title}
                />
                <p className={styles.movies__name}>{title || name}</p>
                <div className={styles.wrapper}>
                  <p className={styles.movies__date}>{release_date}</p>
                  <div className={styles.movies__rate}>
                    <AiFillStar className={styles.movies__svg} />
                    <p className={styles.movies__vote}>
                      {vote_average.toFixed(1)}
                    </p>
                  </div>
                </div>
                <Buttons />
              </div>

              <p className={styles.movies__name}>{title || name}</p>
              <img
                className={styles.movies__img}
                src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
                alt={title}
              />
            </li>
          )
        )}
      </ul> */}
    </div>
  );
};

export default Trending;
