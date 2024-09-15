import React from "react";
import styles from './Button.module.scss';

const Button = ({onClick, children}: {
  onClick: () => void,
  children: React.ReactNode
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
