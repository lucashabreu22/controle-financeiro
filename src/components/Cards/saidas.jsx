import { BanknoteArrowDown } from "lucide-react";
import { IBox, ISpan, ITitle, IBoxTitle } from "./styled";

function Saidas({ calculateTotal }) {
  const totalSaidas = calculateTotal("saida");
  return (
    <IBox>
      <IBoxTitle>
        <ITitle>Saídas</ITitle>
        <BanknoteArrowDown size={25} />
      </IBoxTitle>
      <ISpan>R$ {totalSaidas}</ISpan>
    </IBox>
  );
}

export default Saidas;
