import React, { useRef, useState } from "react";
import logo from "../assets/logo.nutritech.png";
import { useNavigate } from "react-router-dom";
import styled_Definicao_M from "../styled/styled_Definicao_M"; // Importa o styled-components diretamente
import { api } from "../services/api";

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
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [goal, setGoal] = useState<string>(""); // Estado para guardar a meta
  const [goalsUserId, setGoalsUserId] = useState<number>(1); // ID do usuário - exemplo para teste

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
    try {
      const response = await api.post("/metas", {
        goals_user_id: goalsUserId, // ID do usuário associado
        goals: goal, // A meta validada pelo domínio chk_goals
      });
      console.log("Meta salva com sucesso:", response.data);
    } catch (error: any) {
      console.error("Erro ao salvar a meta:", error.response?.data || "Erro desconhecido");
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