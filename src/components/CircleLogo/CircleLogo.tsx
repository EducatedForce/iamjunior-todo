import styles from './CircleLogo.module.scss';
import {GoPlus} from "react-icons/go";

const CircleLogo = ({onClick}: { onClick: () => void }) => {
  return (
    <div onClick={onClick} className={styles.container}>
      <GoPlus/>
    </div>
  );
};

export default CircleLogo;
