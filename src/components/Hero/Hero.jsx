import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.hero__title}>Welcome to movies world</h1>
      <p className={styles.hero__desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, maxime
        in? Nihil error voluptate delectus architecto asperiores eveniet, eum
        obcaecati corporis quos nobis distinctio deserunt?
      </p>
      {/* <form className={styles.hero__form}>
        <label htmlFor="search">Search by name..</label>
        <input type="text" name="search" />
        <button>Search</button>
      </form> */}
    </div>
  );
};

export default Hero;
