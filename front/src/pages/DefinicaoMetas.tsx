import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import logo from "../assets/logo.nutritech.png";
import styled_Definicao_M from "../styled/styled_Definicao_M";
import { Icon } from "../styled/styled_Main";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks";
import { GoalProps } from "../types";

const {
  ImageContainer,
  Carousel,
  NavButton,
  Card,
  ButtonGroup,
  PlusButton,
  MinusButton,
  NextButton,
  Body,
  Logo,
  LogoImage,
  FormContainer,
  Title,
  Text,
  CardContainer,
  CardLoseWeight,
  CardGainWeight,
  CardMuscle,
  CardDiet,
  CardTitle,
  Button,
  BackButton,
  ButtonContainer,
} = styled_Definicao_M();

const DefinicaoMetas: React.FC = () => {
  const { saveGoal, getGoals, setError } = useUser();
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [goal, setGoal] = useState<string>("");
  const [goals, setGoals] = useState<GoalProps[]>([]); 
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");

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

  useEffect(() => {
    fetchGoals();
  }, [setError]);

  const enviarMeta = async () => {
    if (!goal || !['Ganhar peso', 'Perder peso', 'Manter peso'].includes(goal)) {
      setError({ error: "Meta inválida. Deve ser 'Ganhar peso', 'Perder peso' ou 'Manter peso'." });
      return;
    }
    const response = await saveGoal(goal);
    if (response) {
      setMessagePopup("Meta salva com sucesso!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Fecha o popup após 3 segundos
      navigate("/termosdeuso"); // Navega para a próxima página
    } else {
      setError({ error: "Erro ao salvar a meta." });
    }
  };

  return (
    <>
      <ImageContainer>
        <LogoImage src={logo} alt="Logo Nutritech" />
      </ImageContainer>

      <FormContainer>
        <Title>Definição de Metas</Title>

        <CardContainer>
          <CardLoseWeight onClick={() => setGoal("Perder peso")}>
            <CardTitle>Perder Peso</CardTitle>
            <Text>Emagracimento envolve uma combinação de alimentação equilibrada e atividade física regular...</Text>
          </CardLoseWeight>
          
          <CardGainWeight onClick={() => setGoal("Ganhar peso")}>
            <CardTitle>Ganhar Peso</CardTitle>
            <Text>Engordar envolve aumentar a massa muscular e/ou a gordura de maneira saudável...</Text>
          </CardGainWeight>
          
          <CardMuscle onClick={() => setGoal("Ganhar peso")}>
            <CardTitle>Ganhar Massa Muscular</CardTitle>
            <Text>Hipertrofismo envolve o aumento da força e volume muscular através de treinamento...</Text>
          </CardMuscle>
          
          <CardDiet onClick={() => setGoal("Manter peso")}>
            <CardTitle>Monitorar Dieta</CardTitle>
            <Text>Educação Alimentar envolve a conscientização e o registro dos alimentos consumidos diariamente...</Text>
          </CardDiet>
        </CardContainer>

        <ButtonContainer>
          <BackButton type="button" onClick={() => navigate("/Info-pessoal")}>
            <Icon>
              <IonIcon icon={Icons.chevronBack} />
            </Icon>
          </BackButton>
          <Button onClick={enviarMeta}>Next</Button>
        </ButtonContainer>

        {/* Popup de confirmação */}
        {showPopup && (
          <div className="popup">
            <p>{messagePopup}</p>
          </div>
        )}
      </FormContainer>
    </>
  );
};

export default DefinicaoMetas;