import styles from "./style.module.css";

export function Card({ transition, removeTransition }) {
  const value =
    transition.valueMoney <= 0
      ? transition.valueMoney * -1
      : transition.valueMoney;

  return (
    <li
      className={styles.li_cardTransition}
      style={
        transition.typeValue === "Entrada"
          ? { borderLeft: "4px solid var(--color-secundary)" }
          : { borderLeft: "4px solid var(--greyScale-2)" }
      }
    >
      <div>
        <h3 className={styles.h3_transitionDescription}>
          {transition.description.substring(0, 20)}
        </h3>
        <p className={styles.p_transitionTypeValue}>{transition.typeValue}</p>
      </div>
      <div className={styles.div_buttonTransitionValueMoney}>
        <p className={styles.p_transitionValueMoney}>
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button
          className={styles.button_transitionRemove}
          onClick={() => removeTransition(transition.id)}
        >
          Excluir
        </button>
      </div>
    </li>
  );
}
