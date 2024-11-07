import React, { useState, useEffect } from 'react';

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
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', textAlign: 'center' }}>
      <h2>Verificação de Segurança</h2>
      
      {/* Se a verificação foi concluída, exibe a mensagem de sucesso */}
      {isVerified ? (
        <p style={{ color: 'green', fontWeight: 'bold' }}>Verificação Concluída</p>
      ) : (
        <>
          <p>Resolva: {question}</p>
          <input
            type="number"
            value={userAnswer}
            onChange={handleAnswerChange}
            required
            disabled={isVerified} // Desabilita o campo após a verificação
            style={{ marginBottom: '10px' }}
          />
          <p style={{ fontSize: '12px', color: '#888' }}>Mova o mouse para completar a verificação.</p>
        </>
      )}
      
      {/* Se houver mensagem de erro, exibe */}
      {errorMessage && <p style={{ color: 'red', fontSize: '12px' }}>{errorMessage}</p>}
    </div>
  );
};

export default Captcha;
