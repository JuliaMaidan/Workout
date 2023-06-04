import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./ SharedLayout";

const Home = lazy(() => import("../pages/Home"));
const Exercises = lazy(() => import("../pages/Exercises"));
const RecipesByCategory = lazy(() => import("../pages/RecipesByCategory"));
// const AboutMovie = lazy(() => import("pages/AboutMovie"));
// const Cast = lazy(() => import("pages/Cast"));
// const Reviews = lazy(() => import("pages/Reviews"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route
          path="/recipes/category/:category"
          element={<RecipesByCategory />}
        />
        {/* <Route path="movies/:id" element={<AboutMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
      </Route>
    </Routes>
  );
};
