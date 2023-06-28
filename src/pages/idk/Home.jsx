// import { useState, useEffect } from "react";
// import styles from "./home.module.scss";
// import { getCategories } from "../../components/idk/services/fetchExercises";
// // import Categories from "../components/Categories/Categories";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// function Home() {
//   const [categories, setCategories] = useState([]);
//   const location = useLocation();
//   const link = "https://wger.de";

//   useEffect(() => {
//     async function fetchCategories() {
//       const data = await getCategories();
//       console.log(data.results);
//       setCategories(data.results);
//     }
//     fetchCategories();
//   }, []);

//   return (
//     <section className={styles.home}>
//       <h1 className={styles.home__caption}>Recipe App</h1>
//       <p className={styles.home__desc}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua.
//       </p>
//       <button className={styles.home__btn}>Create your own program</button>
//       <ul>
//         {categories.map(({ id, name_en, image_url_main }) => (
//           <li key={id}>
//             <p>{name_en}</p>
//             <img src={link + image_url_main} alt="" />
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// export default Home;
