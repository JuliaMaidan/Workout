import React, { useState, useEffect } from "react";
import { getMovieDetails } from "../services/fetchMovies";
import { Link } from "react-router-dom";
import { BsInfo } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "../components/styled/myList.module.scss";

const Favorite = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [favoritesUpdated, setFavoritesUpdated] = useState(false);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    const favoriteIds = favorites ? JSON.parse(favorites) : [];

    // setFavoriteMovies(favoriteIds);
    const fetchFavoriteMovies = async () => {
      try {
        const movies = await Promise.all(
          favoriteIds.map((id) => getMovieDetails(id))
        );
        setFavoriteMovies(movies);
      } catch (error) {
        console.log("Помилка при отриманні улюблених фільмів:", error);
      }
    };
    fetchFavoriteMovies();
  }, [favoritesUpdated]);

  const onDeleteClick = (id) => {
    const myList = localStorage.getItem("favorites");
    const myListIds = myList ? JSON.parse(myList) : [];
    const updatedFavorites = myListIds.filter(
      (movieId) => movieId !== parseInt(id)
    );
    setFavoriteMovies(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    console.log(id);

    setFavoritesUpdated(!favoritesUpdated);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Favorite movies</h1>
      {favoriteMovies.length === 0 ? (
        <p className={styles.error}>Немає улюблених фільмів.</p>
      ) : (
        <div className={styles.mylist}>
          {favoriteMovies.map(({ id, title, poster_path }) => (
            <div className={styles.mylist__item} key={id}>
              {/* <p>{title}</p> */}
              <img
                className={styles.mylist__img}
                src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
                alt={title}
                width="205"
              />
              <div className={styles.mylist__btns}>
                <button className={styles.mylist__btn}>
                  <Link to={`/movie/${id}`}>
                    <BsInfo size={30} className={styles.mylist__svg} />
                  </Link>
                </button>
                <button
                  className={styles.mylist__btn}
                  onClick={() => onDeleteClick(id)}
                >
                  <AiOutlineDelete size={22} className={styles.mylist__svg} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
