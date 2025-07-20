import { BanknoteArrowUp } from "lucide-react";
import { IBox, ISpan, ITitle, IBoxTitle } from "./styled";

function Entradas({ calculateTotal }) {
  const totalEntradas = calculateTotal("entrada");
  return (
    <IBox>
      <IBoxTitle>
        <ITitle>Entradas</ITitle>
        <BanknoteArrowUp size={25} />
      </IBoxTitle>
      <ISpan>R$ {totalEntradas}</ISpan>
    </IBox>
  );
}

export default Entradas;
