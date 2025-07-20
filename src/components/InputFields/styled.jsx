import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const InputField = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  border-radius: 4px;
  &:focus {
    border-color: #00b179;
    outline: none;
  }
  &[type="checkbox"] {
    margin-right: 5px;
    margin-left: 20px;
    margin-bottom: 5px;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const FieldTitle = styled.h1`
  font-size: 15px;
  margin-bottom: 5px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #00b179;
  color: white;
  border: none;
  border-radius: 4px;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #008f66;
  }
`;
