import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo/cinema.png";
import styles from "./sharedLayout.module.scss";

const SharedLayout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <div className={styles.logo}>
            <img
              className={styles.logo__img}
              src={logo}
              alt="logo"
              width="60px"
            />
            <Link className={styles.logo__link} to="/">
              Film<span>Hub</span>
            </Link>
          </div>
          <nav className={styles.nav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.nav__link
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.nav__link
              }
              to="/movies"
            >
              Movies
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.nav__link
              }
              to="/popular"
            >
              Popular
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.nav__link
              }
              to="/favorite"
              end
            >
              Favorite
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.nav__link
              }
              to="/watchlist"
            >
              My list
            </NavLink>
          </nav>
        </div>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
