import { useParams, Link, Outlet } from "react-router-dom";
import { getRecipesByCategory } from "../components/services/fetchExercises";
import { useState, useEffect } from "react";
import styles from "./recipesByCategory.module.scss";
// import Spinner from "components/Loader/Loader";
import { useLocation } from "react-router";

function RecipesByCategory() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  // const { strCategory } = useParams();
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchRecipes() {
      const data = await getRecipesByCategory(category);
      setRecipes(data.meals);
      setIsLoading(true);
    }
    fetchRecipes();
  }, [category]);

  return (
    <div>
      {!isLoading && <p>...</p>}
      {isLoading && (
        <div className={styles.recipes}>
          <button className={styles.recipes__btn}>
            <Link to={backLinkHref}>Back</Link>
          </button>
          <ul className={styles.recipes__list}>
            {recipes.map(({ idMeal, strMeal, strMealThumb }) => (
              <li className={styles.recipes__item} key={idMeal}>
                <img
                  className={styles.recipes__img}
                  src={strMealThumb}
                  alt={strMeal}
                  width="180"
                />
                <p className={styles.recipes__name}>{strMeal}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 
      {!isLoading && <Spinner />}
      {isLoading && (
        <div>
          <div className={styles.wrapper}>
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/w780/${movies.backdrop_path}`}
              alt={movies.title}
              height="200"
            />
            <div className={styles.wrapper__name}>
              <h2 className={styles.title}>
                {movies.title ?? movies.name} ({movies.release_date})
              </h2>
              <p className={styles.score}>User score: {movies.vote_average}</p>
            </div>
          </div>
          <h3 className={styles.overview}>Overview</h3>
          <p className={styles.overview__desc}>{movies.overview}</p>
          <h4 className={styles.genres}>Genres</h4>
          <ul className={styles.genres__list}>
            {movies.genres.map(({ name }) => (
              <li className={styles.genres__item} key={name}>
                {name}
              </li>
            ))}
          </ul>
          <b className={styles.info}>Additional information</b>
          <ul className={styles.info__list}>
            <li>
              <Link className={styles.info__link} to={`/movies/${id}/cast`}>
                Cast
              </Link>
            </li>
            <li>
              <Link className={styles.info__link} to={`/movies/${id}/reviews`}>
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )} */}
    </div>
  );
}

export default RecipesByCategory;
