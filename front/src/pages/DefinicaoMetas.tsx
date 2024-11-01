import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.nutritech.png";
import { useNavigate } from "react-router-dom";
import styled_Definicao_M from "../styled/styled_Definicao_M";
import { api } from "../services/api";
import { useUser } from "../hooks";
import { GoalProps } from "../types"; // Assegure-se de que GoalProps está bem definido

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
  SaveButton,
  Button,
} = styled_Definicao_M();

const DefinicaoMetas: React.FC = () => {
  const { saveGoal, getGoals, setError } = useUser();
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [goal, setGoal] = useState<string>(""); // Estado para guardar a meta
  const [goalsUserId, setGoalsUserId] = useState<number>(1); // ID do usuário
  const [goals, setGoals] = useState<GoalProps[]>([]); 
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

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await getGoals();
        if (Array.isArray(response)) {
          setGoals(response);
        } else {
          setError({ error: "" });
        }
      } catch (error) {
        setError({ error: "Erro ao carregar metas." });
      }
    };

    fetchGoals();
  }, [setError]);

  const enviarMeta = async () => {
    if (!goalsUserId) {
      setError({ error: "ID do usuário não fornecido." });
      return;
    }
    if (!goal || !['Ganhar peso', 'Perder peso', 'Manter Peso'].includes(goal)) {
      setError({ error: "Meta inválida. Deve ser 'Ganhar peso', 'Perder peso' ou 'Manter Peso'." });
      return;
    }
    const response = await saveGoal(goal);
    if (response) {
      setMessagePopup("Meta salva com sucesso!");
      setShowPopup(true);
    } else {
      setError({ error: "Erro ao salvar a meta." });
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
                    onClick={() => {
                      setGoal("Ganhar peso"); // Atualiza a meta para "Ganhar peso"
                    }}
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
                    onClick={() => {
                      setGoal("Perder peso"); // Atualiza a meta para "Perder peso"
                    }}
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
                    onClick={() => {
                      setGoal("Manter peso"); // Atualiza a meta para "Manter peso"
                    }}
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
          <Button onClick={enviarMeta}>Salvar</Button>
          <NextButton type="button" onClick={() => navigate("/termosdeuso")}>
            →
          </NextButton>
        </ButtonContainer>
      </div>
    </>
  );
};

export default DefinicaoMetas;