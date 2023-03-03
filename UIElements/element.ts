import styled from "styled-components";

export const PrimaryButton = styled.button`
  width: 100%;
  outline-color: transparent;
  background-color: ${(props) => (props.color ? props.color : "#F2B137")};
  border-radius: 10px;
  padding: 12px 25px;
  text-align: center;
  box-shadow: inset 0px -4px 0px #00000047;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
  white-space: nowrap;
  color: #1a2a33;
  &:hover {
    background-color: ${(props) =>
      props.color ? props.color + "d9" : "#F2B137d9"};
  }
`;

export const SecondaryButton = styled.button`
  outline-color: transparent;
  background-color: ${(props) => (props.color ? props.color : "#F2B137")};
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: inset 0px -6px 0px #00000047;
  text-transform: uppercase;
  font-weight: 700;
  color: #1a2a33;
  &:hover {
    background-color: ${(props) =>
      props.color ? props.color + "d9" : "#F2B137d9"};
  }
`;
