import React, { useState, useEffect } from "react";
import styles from "./home.module.scss";
import { getCategories } from "../components/services/fetchExercises";
import Categories from "../components/Categories/Categories";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data.categories);
    }
    fetchCategories();
  }, []);

  return (
    <section className={styles.home}>
      <h1 className={styles.home__caption}>Recipe App</h1>
      <p className={styles.home__desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className={styles.home__btn}>Create your own program</button>
      <Categories categories={categories} />
    </section>
  );
}

export default Home;
