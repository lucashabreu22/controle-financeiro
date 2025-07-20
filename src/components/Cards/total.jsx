import { Banknote } from "lucide-react";
import { IBox, ISpan, ITitle, IBoxTitle } from "./styled";

function Total({ getTotal }) {
  const total = getTotal();

  return (
    <IBox>
      <IBoxTitle>
        <ITitle>Total</ITitle>
        <Banknote size={25} />
      </IBoxTitle>
      <ISpan negativo={total < 0}>R$ {total}</ISpan>
    </IBox>
  );
}

export default Total;
