import styled from "styled-components";

export const RelatorioContainer = styled.div`
  display: flex;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
`;

export const DescriptionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 10px;

  th,
  td {
    padding: 8px 66px;
    text-align: left;
  }

  #type {
    text-align: center;
  }

  thead {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  button:hover {
    color: #00b179;
  }
`;
