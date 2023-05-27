import styles from "./style.module.css";

export function TotalMoney({ listTransitions }) {
  const totalValue = listTransitions.reduce(
    (accumulator, currentValue) => accumulator + currentValue.valueMoney,
    0
  );

  return (
    <>
      {listTransitions.length > 0 ? (
        <div className={styles.div_box}>
          <div className={styles.div_title}>
            <h3 className={styles.h3_title}>Valor total:</h3>
            <p className={styles.p_description}>O valor se refere ao saldo</p>
          </div>

          <div className={styles.div_totalValue}>
            <h4 className={styles.h4_totalValue}>
              {totalValue.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </h4>
          </div>
        </div>
      ) : (
        <p className={styles.notification}>
          Você ainda não possui nenhum lançamento
        </p>
      )}
    </>
  );
}
