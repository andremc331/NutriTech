import React, { useRef, useState } from "react";
import logo from "../assets/logo.nutritech.png";
import { useNavigate } from "react-router-dom";
import styled_Definicao_M from "../styled/styled_Definicao_M"; // Importa o styled-components diretamente
import { api } from "../services/api";
import { useUser } from "../hooks";

const {
  ImageContainer,
  LogoImage,
  FormContainer,
  Title,
  Carousel,
  Card,
  CardTitle,
  ButtonGroup,
  MinusButton,
  NavButton,
  NextButton,
  ButtonContainer,
  PlusButton,
  SaveButton, // Adiciona o botão de salvar no styled components
  Button
} = styled_Definicao_M();

const DefinicaoMetas: React.FC = () => {
  const { saveGoal, error, setError } = useUser();
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [goal, setGoal] = useState<string>(""); // Estado para guardar a meta
  const [goalsUserId, setGoalsUserId] = useState<number>(1); // ID do usuário - exemplo para teste
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");
  
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Função para enviar a meta para o backend
  const enviarMeta = async () => {
    if (!goalsUserId) {
      setError({ error: "ID do usuário não fornecido." });
    } else if (!goal || !['Ganhar peso', 'Perder peso', 'Manter Peso'].includes(goal)) {
      setError({ error: "Meta inválida. Deve ser 'Ganhar peso', 'Perder peso' ou 'Manter Peso'." });
    } else {
      const response = await saveGoal(goal); // Passa a meta para a função no UserContext
      if (response) {
        setMessagePopup("Meta salva com sucesso!");
        setShowPopup(true);
      } else {
        setError({ error: "Erro ao salvar a meta." });
      }
    }
  };

  return (
    <>
      <ImageContainer>
        <LogoImage src={logo} alt="Logo Nutritech" />
      </ImageContainer>
      <div>
        <FormContainer>
          <Title>Definição de Metas</Title>
          <form>
            <NavButton className="left" type="button" onClick={scrollLeft}>
              &lt;
            </NavButton>
            <Carousel ref={carouselRef}>
              {/* Card para a meta de Ganhar Peso */}
              <Card>
                <CardTitle>Ganhar Peso</CardTitle>
                <ButtonGroup>
                  <MinusButton
                    type="button"
                    onClick={() => setGoal("")} // Reseta a meta para uma string vazia
                  >
                    -
                  </MinusButton>
                  <PlusButton
                    type="button"
                    onClick={() => setGoal("Ganhar peso")} // Atualiza a meta para "Ganhar peso"
                  >
                    +
                  </PlusButton>
                </ButtonGroup>
              </Card>

              {/* Card para a meta de Perder Peso */}
              <Card>
                <CardTitle>Perder Peso</CardTitle>
                <ButtonGroup>
                  <MinusButton
                    type="button"
                    onClick={() => setGoal("")} // Reseta a meta para uma string vazia
                  >
                    -
                  </MinusButton>
                  <PlusButton
                    type="button"
                    onClick={() => setGoal("Perder peso")} // Atualiza a meta para "Perder peso"
                  >
                    +
                  </PlusButton>
                </ButtonGroup>
              </Card>

              {/* Card para a meta de Manter Peso */}
              <Card>
                <CardTitle>Manter Peso</CardTitle>
                <ButtonGroup>
                  <MinusButton
                    type="button"
                    onClick={() => setGoal("")} // Reseta a meta para uma string vazia
                  >
                    -
                  </MinusButton>
                  <PlusButton
                    type="button"
                    onClick={() => setGoal("Manter peso")} // Atualiza a meta para "Manter peso"
                  >
                    +
                  </PlusButton>
                </ButtonGroup>
              </Card>
            </Carousel>
            <NavButton className="right" type="button" onClick={scrollRight}>
              &gt;
            </NavButton>
          </form>
        </FormContainer>

        <ButtonContainer>
          <Button
            onClick={() => enviarMeta()} // Envia a meta para o backend ao clicar em "Salvar"
          >
            Salvar
          </Button>
          <NextButton
            type="button"
            onClick={() => navigate("/termosdeuso")} // Navega para a próxima página
          >
            →
          </NextButton>
        </ButtonContainer>
      </div>
    </>
  );
};

export default DefinicaoMetas;