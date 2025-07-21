import Header from "./components/Header/header";
import Cards from "./components/Cards/card";
import InputFields from "./components/InputFields/inputFields";
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import Relatorio from "./components/Relatorio/relatorio";

function App() {
  const [despesas, setTasks] = useState(
    JSON.parse(localStorage.getItem("despesas") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("despesas", JSON.stringify(despesas));
  }, [despesas]);

  function onAddDespesa(description, value, type) {
    const newDespesa = {
      id: v4(),
      description,
      value: parseFloat(value.replace("R$", "").replace(",", ".")),
      type,
    };
    setTasks([...despesas, newDespesa]);
  }

  function calculateTotal(type) {
    return despesas
      .filter((despesa) => despesa.type === type)
      .reduce((total, despesa) => total + despesa.value, 0);
  }

  function getTotal() {
    const totalEntradas = calculateTotal("entrada");
    const totalSaidas = calculateTotal("saida");
    return totalEntradas - totalSaidas;
  }

  function onDeleteDespesa(id) {
    setTasks(despesas.filter((despesa) => despesa.id !== id));
  }

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <Cards getTotal={getTotal} calculateTotal={calculateTotal} />
        <InputFields
          onAddDespesa={onAddDespesa}
          calculateTotal={calculateTotal}
        />
        <Relatorio despesas={despesas} onDeleteDespesa={onDeleteDespesa} />
      </div>
    </>
  );
}

export default App;
