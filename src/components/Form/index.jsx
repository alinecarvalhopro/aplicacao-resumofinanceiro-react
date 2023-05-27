import { useState } from "react";
import { Input } from "../../fragments/Input";
import styles from "./style.module.css";

export function Form({ addTransition }) {
  const typeValue = [
    { name: "Entrada", value: "entrada" },
    { name: "Despesa", value: "despesa" },
  ];

  const [formData, setFormData] = useState({
    description: "",
    valueMoney: 0,
    typeValue: typeValue[0].name,
  });

  function submit(event) {
    event.preventDefault();
    setFormData({
      description: "",
      valueMoney: 0,
      typeValue: typeValue[0].name,
    });

    addTransition({
      ...formData,
      valueMoney:
        formData.typeValue === "Entrada"
          ? +formData.valueMoney
          : -formData.valueMoney,
    });
  }

  return (
    <form className={styles.form_registerTransition} onSubmit={submit}>
      <Input
        type="text"
        textLabel="Descrição"
        id="descricao"
        placeholder="Digite aqui sua descrição"
        typeEvent={(event) =>
          setFormData({ ...formData, description: event.target.value })
        }
        value={formData.description}
      />
      <p className={styles.p_observation}>Ex: Compra de roupas</p>
      <Input
        type="number"
        textLabel="Valor (R$)"
        id="valor"
        placeholder="Digite aqui o valor"
        typeEvent={(event) =>
          setFormData({ ...formData, valueMoney: Number(event.target.value) })
        }
        value={formData.valueMoney}
      />
      <label id={styles.label_typeValue}>Tipo de valor</label>
      <select
        className={styles.select_typeValue}
        name=""
        id=""
        onChange={(event) =>
          setFormData({ ...formData, typeValue: event.target.value })
        }
        value={formData.typeValue}
      >
        {typeValue.map((type) => (
          <option key={type.value} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      
      <button className={styles.button_addTransition} type="submit">
        Inserir valor
      </button>
    </form>
  );
}
