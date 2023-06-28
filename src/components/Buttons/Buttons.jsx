import { BsPlusLg, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./buttons.module.scss";

const Buttons = () => {
  return (
    <div className={styles.btns_wrapper}>
      <button className={styles.btn}>
        <BsPlusLg className={styles.btn__svg} />
      </button>
      <button className={styles.btn}>
        <AiOutlineHeart className={styles.btn__svg} />
      </button>
      <button className={styles.btn}>
        <BsThreeDots className={styles.btn__svg} />
      </button>
    </div>
  );
};

export default Buttons;
