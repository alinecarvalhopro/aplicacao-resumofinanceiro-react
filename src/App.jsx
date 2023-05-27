import "./styles/reset.css";
import "./styles/globalStyles.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form/index.jsx";
import { useState } from "react";
import { List } from "./components/List";
import { v4 as uuidv4 } from "uuid";
import { TotalMoney } from "./components/TotalMoney";

function App() {
  const [listTransitions, setListTransitions] = useState([]);

  function addTransition(formData) {
    const newTransition = {
      ...formData,
      id: uuidv4(),
      valueMoney: Number(formData.valueMoney),
    };
    setListTransitions([...listTransitions, newTransition]);
  }

  function removeTransition(transitionId) {
    const newTransitionsList = listTransitions.filter((transition) => {
      return transition.id !== transitionId;
    });
    setListTransitions(newTransitionsList);
  }

  return (
    <div className="App">
      <Header />
      <Form addTransition={addTransition} />
      <h5>Resumo Finaceiro</h5>
      <TotalMoney listTransitions={listTransitions} />
      <List
        listTransitions={listTransitions}
        removeTransition={removeTransition}
      />
    </div>
  );
}

export default App;
