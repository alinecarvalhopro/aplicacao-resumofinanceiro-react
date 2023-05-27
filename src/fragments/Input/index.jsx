import styles from "./style.module.css";

export function Input({ id, type, textLabel, placeholder, typeEvent, value }) {
  return (
    <fieldset className={styles.fielset_input}>
      <label className={styles.label_inputDescription} htmlFor={id}>
        {textLabel}
      </label>
      <input
        className={styles.input_}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={typeEvent}
        value={value === 0 ? "" : value}
      />
    </fieldset>
  );
}
