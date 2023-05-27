import styles from "./style.module.css";
import { Card } from "../Card";

export function List({ listTransitions, removeTransition }) {
  return (
    <ul className={styles.ul_listTransitions}>
      {listTransitions.map((transition) => (
        <Card
          key={transition.id}
          transition={transition}
          removeTransition={removeTransition}
        />
      ))}
    </ul>
  );
}
