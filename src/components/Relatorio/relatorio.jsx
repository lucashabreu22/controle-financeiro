import { TrashIcon, BanknoteArrowUp, BanknoteArrowDown } from "lucide-react";
import { RelatorioContainer, DescriptionTable } from "./styled";

function Relatorio({ despesas, onDeleteDespesa }) {
  return (
    <RelatorioContainer>
      <DescriptionTable>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {despesas.map((despesa) => (
            <tr key={despesa.id}>
              <td>{despesa.description}</td>
              <td>{despesa.value.toFixed(2).replace(".", ",")}</td>
              <td id="type">
                {despesa.type === "entrada" ? (
                  <BanknoteArrowUp color="green" />
                ) : (
                  <BanknoteArrowDown color="red" />
                )}
              </td>
              <td>
                <button onClick={() => onDeleteDespesa(despesa.id)}>
                  <TrashIcon size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </DescriptionTable>
    </RelatorioContainer>
  );
}

export default Relatorio;
