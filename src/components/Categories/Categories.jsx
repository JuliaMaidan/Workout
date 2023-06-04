import { Link, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./categories.module.scss";

function Categories({ categories }) {
  const location = useLocation();
  return (
    <div>
      <h2 className={styles.category__caption}>The most popular categories</h2>
      <ul className={styles.category}>
        {categories.map(
          ({
            idCategory,
            strCategory,
            strCategoryThumb,
            strCategoryDescription,
          }) => (
            <li className={styles.card} key={idCategory}>
              <img
                className={styles.card__img}
                src={strCategoryThumb}
                alt={strCategory}
              />
              <Link
                className={styles.link}
                to={`/recipes/category/${strCategory}`}
                state={{ from: location }}
              >
                <p className={styles.card__name}>{strCategory}</p>
                <div className={styles.card__overlay}>
                  <p className={styles.card__desc}>{strCategoryDescription}</p>
                </div>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Categories;
