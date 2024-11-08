import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import imgLogoSemFundo from "../assets/img-logo-semfundo.png";

export default function Loading() {
  // Animação para o movimento de scanner
  const scanAnimation = useSpring({
    from: { transform: 'translateY(0%)' },
    to: async (next: (params: object) => void) => {
      await next({ transform: 'translateY(-100%)' }); // Move para cima
      await next({ transform: 'translateY(0%)' });    // Move de volta
    },
    loop: true, // Loop infinito
    config: { duration: 2000 },
  });

  return (
    <Wrapper>
      <LoadingContent>
        <ScannerImage src={imgLogoSemFundo} style={scanAnimation} />
        <LoadingText>Carregando...</LoadingText>
      </LoadingContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  background-color: #f5f5f5; /* Cor de fundo suave */
`;

const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ScannerImage = styled(animated.img)`
  width: 200px;  /* Tamanho da imagem */
  height: auto;
`;

const LoadingText = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #4a0364;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
