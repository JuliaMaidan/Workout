import { useEffect, useState } from "react";
import { getCategories } from "../services/fetchMovies";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const Movies = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
      console.log(data);
    }
    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <p>Categories</p>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/movies/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Movies;
