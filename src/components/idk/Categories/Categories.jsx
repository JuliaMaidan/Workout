// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import styles from "./categories.module.scss";

function Categories({ categories }) {
  // const location = useLocation();
  return (
    <div>
      <h2 className={styles.category__caption}>The most popular categories</h2>
      {/* {categories.map(
          ({ idDrink, strDrink, strDrinkThumb, strCategoryDescription }) => (
            <li className={styles.card} key={idDrink}>
              <img
                className={styles.card__img}
                src={strDrinkThumb}
                alt={strDrink}
              />
              <Link
                className={styles.link}
                to={`/recipes/category/${strDrink}`}
                state={{ from: location }}
              >
                <p className={styles.card__name}>{strDrink}</p>
                <div className={styles.card__overlay}>
                  <p className={styles.card__desc}>{strCategoryDescription}</p>
                </div>
              </Link>
            </li>
          )
        )} */}
      {/* </ul> */}
    </div>
  );
}

export default Categories;
