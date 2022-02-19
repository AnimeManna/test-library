import React from "react";
import styles from "./Button.module.css";

export const Button = (props: any) => {
  return (
    <button onClick={props.onClick} className={styles.container}>
      {props.children}
    </button>
  );
};
