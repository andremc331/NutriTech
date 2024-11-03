import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Captcha: React.FC = () => {
  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState<number | ''>('');
  const [isVerified, setIsVerified] = useState(false);
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [mouseMoveCount, setMouseMoveCount] = useState(0);

  const generateQuestion = () => {
    const numCount = Math.floor(Math.random() * 3) + 2; // 2 ou 3 números
    const numbers = Array.from({ length: numCount }, () => Math.floor(Math.random() * 20));
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let questionText = numbers.join(` ${operation} `);
    let answer = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      switch (operation) {
        case '+':
          answer += numbers[i];
          break;
        case '-':
          answer -= numbers[i];
          break;
        case '*':
          answer *= numbers[i];
          break;
      }
    }

    setQuestion(questionText);
    setCorrectAnswer(answer);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAnswer === correctAnswer && mouseMoveCount > 5) { // Verificação adicional
      setIsVerified(true);
      navigate('/cadastro'); // Redireciona para a rota de cadastro
    } else {
      alert('Resposta incorreta ou movimento do mouse insuficiente, tente novamente!');
      setUserAnswer('');
      generateQuestion(); // Gera uma nova pergunta
    }
  };

  const handleMouseMove = () => {
    setMouseMoveCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    generateQuestion();
    window.addEventListener('mousemove', handleMouseMove); // Rastreia movimentos do mouse
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', textAlign: 'center' }}>
      <h2>Verificação de Segurança</h2>
      <p>Resolva: {question}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(Number(e.target.value))}
          required
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Enviar</button>
      </form>
      {isVerified && (
        <p style={{ color: 'green', marginTop: '10px' }}>Verificação concluída!</p>
      )}
      <p style={{ fontSize: '12px', color: '#888' }}>Mova o mouse para completar a verificação.</p>
    </div>
  );
};

export default Captcha;
