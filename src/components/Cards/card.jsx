import Entradas from "./entradas";
import Saidas from "./saidas";
import { CardContainer } from "./styled";
import Total from "./total";

function Cards({ getTotal, calculateTotal }) {
  return (
    <CardContainer id="cards">
      <Entradas calculateTotal={calculateTotal} />
      <Saidas calculateTotal={calculateTotal} />
      <Total getTotal={getTotal} />
    </CardContainer>
  );
}

export default Cards;
