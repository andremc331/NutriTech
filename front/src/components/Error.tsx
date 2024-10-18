import styled from "styled-components";
import React from "react";

// Interface para as props do componente
interface ErrorProps {
    message: string;
}

// Componente funcional com styled-components
const Error: React.FC<ErrorProps> = ({ message }) => {
    return <Wrapper>{message}</Wrapper>;
};

export default Error;

// Estilização usando styled-components
const Wrapper = styled.div`
  display: flex;
  background-color: rgb(202, 60, 74);
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;  