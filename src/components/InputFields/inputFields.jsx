import React, { useState } from "react";
import {
  FieldTitle,
  InputContainer,
  InputField,
  SectionContainer,
  CheckboxContainer,
  Button,
} from "./styled";

function InputFields({ onAddDespesa, calculateTotal }) {
  const [checked, setChecked] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  return (
    <SectionContainer>
      <InputContainer>
        <FieldTitle>Descrição</FieldTitle>
        <InputField
          type="text"
          placeholder="Digite a descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <FieldTitle>Valor</FieldTitle>
        <InputField
          type="number"
          placeholder="Digite o valor"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </InputContainer>
      <CheckboxContainer>
        <InputField
          type="checkbox"
          checked={checked === "entrada"}
          onChange={() => setChecked("entrada")}
        />
        <FieldTitle>Entrada</FieldTitle>
        <InputField
          type="checkbox"
          checked={checked === "saida"}
          onChange={() => setChecked("saida")}
        />
        <FieldTitle>Saida</FieldTitle>
      </CheckboxContainer>
      <Button
        type="submit"
        onClick={() => {
          if (description.trim() && value && checked) {
            onAddDespesa(description, value, checked);
            calculateTotal(checked);
            setDescription("");
            setValue("");
            setChecked("");
          } else {
            alert("Por favor, preencha todos os campos.");
          }
        }}
      >
        Adicionar
      </Button>
    </SectionContainer>
  );
}

export default InputFields;
