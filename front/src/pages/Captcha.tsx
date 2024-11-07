import React, { useState, useEffect } from 'react';
import styled from "styled-components";

interface CaptchaProps {
  onVerified: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVerified: React.Dispatch<React.SetStateAction<boolean>>;
}

const Captcha: React.FC<CaptchaProps> = ({ onVerified, setIsVerified }) => {
  const [userAnswer, setUserAnswer] = useState<number | ''>(''); // Resposta do usuário
  const [question, setQuestion] = useState(''); // Pergunta do CAPTCHA
  const [correctAnswer, setCorrectAnswer] = useState(0); // Resposta correta
  const [mouseMoveCount, setMouseMoveCount] = useState(0); // Contador de movimentos do mouse
  const [isVerified, setCaptchaVerified] = useState(false); // Estado de verificação
  const [errorMessage, setErrorMessage] = useState(''); // Mensagem de erro

  // Gera uma nova pergunta do CAPTCHA
  const generateQuestion = () => {
    const numCount = Math.floor(Math.random() * 3) + 2; // 2 ou 3 números
    const numbers = Array.from({ length: numCount }, () => Math.floor(Math.random() * 20));
    const operations = ['+', '-'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let questionText = numbers.join(` ${operation} `);
    let answer = numbers[0];

    // Calcula a resposta correta
    for (let i = 1; i < numbers.length; i++) {
      switch (operation) {
        case '+':
          answer += numbers[i];
          break;
        case '-':
          answer -= numbers[i];
          break;
      }
    }

    setQuestion(questionText);
    setCorrectAnswer(answer);
  };

  // Função que lida com a resposta do usuário e verifica a validade
  useEffect(() => {
    if (userAnswer === correctAnswer && mouseMoveCount > 5) {
      setIsVerified(true);  // Marca como verificado
      setCaptchaVerified(true);  // Verifica que o CAPTCHA foi resolvido
      onVerified(true);  // Chama a função onVerified
    }
  }, [userAnswer, mouseMoveCount, correctAnswer, onVerified, setIsVerified]);

  // Função chamada a cada movimento do mouse
  const handleMouseMove = () => {
    setMouseMoveCount(prevCount => prevCount + 1);
  };

  // Lida com a mudança da resposta do usuário
  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserAnswer(value ? Number(value) : ''); // Atualiza a resposta do usuário
    setErrorMessage(''); // Limpa a mensagem de erro
  };

  useEffect(() => {
    generateQuestion();  // Gera uma pergunta ao iniciar o componente
    window.addEventListener('mousemove', handleMouseMove); // Adiciona ouvinte de movimento de mouse
    return () => {
      window.removeEventListener('mousemove', handleMouseMove); // Remove ouvinte de movimento de mouse
    };
  }, []);

  return (
    <Body>
      <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', textAlign: 'center' }}>
        <CaptchaTitle>Verificação de Segurança</CaptchaTitle>

        {/* Se a verificação foi concluída, exibe a mensagem de sucesso */}
        {isVerified ? (
        <SuccessMessage>Verificação Concluída</SuccessMessage>
      ) : (
          <>
          <CaptchaQuestion>Resolva: {question}</CaptchaQuestion>
          <CaptchaInput
              type="number"
              value={userAnswer}
              onChange={handleAnswerChange}
              required
              disabled={isVerified} // Desabilita o campo após a verificação
              style={{ marginBottom: '10px' }}
            />
          <InstructionText>Mova o mouse para completar a verificação.</InstructionText>
          </>
        )}

        {/* Se houver mensagem de erro, exibe */}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    </Body>
  );
};

export default Captcha;

const Body = styled.div`
    display: flex; /* Alterado para flex */
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 60px;
    border-radius: 10px;

    @media (max-width: 768px) {
      padding: 10px;
    }
  `;

const CaptchaTitle = styled.h2`
font-family: "Roboto", sans-serif;
color: var(--color-1);
font-size: 24px;
font-weight: bold;
margin-bottom: 20px;
`;

const CaptchaQuestion = styled.p`
  font-size: 20px;
  color: var(--color-10);
`;

const CaptchaInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  margin: 10px 0;
`;

const InstructionText = styled.p`
  font-size: 14px;
  color: #888;
`;

const SuccessMessage = styled.p`
  color: #19f519;
  font-weight: bold;
  font-size: 20px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;