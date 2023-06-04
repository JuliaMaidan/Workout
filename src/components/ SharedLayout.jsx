import { NavLink } from "react-router-dom";
import styles from "./sharedLayout.module.scss";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
// import Spinner from "./Loader/Loader";

const SharedLayout = () => {
  return (
    <div>
      <header>
        <p className={styles.logo}>WORKOUT</p>
        <nav className={styles.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.nav__link
            }
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.nav__link
            }
            to="/exercises"
          >
            Exercises
          </NavLink>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
