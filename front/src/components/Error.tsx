import styled from "styled-components";
import React from 'react';

interface ErrorProps {
    message: string; // Define a prop message como uma string
    children?: React.ReactNode; // Adiciona children como uma prop opcional
}

const Error: React.FC<ErrorProps> = ({ message, children }) => {
    return (
        <Wrapper>
            {children} {/* Renderiza qualquer conteúdo passado como children */}
            <div style={{ color: 'red', padding: '10px', border: '1px solid red' }}>
                <strong>Erro:</strong> {message} {/* Renderiza a mensagem de erro */}
            </div>
        </Wrapper>
    );
};

export default Error;

const Wrapper = styled.div`
  display: flex;
  background-color: rgb(202, 60, 74);
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
`;