import styled from "styled-components";

export const IBox = styled.div`
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: black;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const IBoxTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ITitle = styled.div`
  font-size: 20px;
`;

export const ISpan = styled.span`
  font-size: 30px;
  display: flex;
  justify-content: center;
  color: ${(props) => (props.negativo ? "red" : "inherit")};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 56px; // Espaço de 20px entre os cards
`;
