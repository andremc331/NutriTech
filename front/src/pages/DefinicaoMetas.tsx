import React, { useState } from "react";
import axios from "axios";
import logo from "../logo/logo.nutritech.png";
import styled_Definicao_M from "../styled/styled_Definicao_M";
import { Icon } from "../styled/styled_Main";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import { useNavigate } from "react-router-dom";

const {
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
  const navigate = useNavigate();
  const [meta, setMeta] = useState(""); // Estado para guardar a meta

  // Função para enviar a meta para o backend
  const enviarMeta = async () => {
    try {
      const response = await axios.post("http://localhost:3011/api/metas", {
        meta: meta, // A meta que será enviada
      });
      console.log("Meta salva com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao salvar a meta:", error);
    }
  };

  return (
    <>
      <Body>
        <Logo>
          <LogoImage src={logo} alt="Nutritech logo" />
        </Logo>
        <FormContainer>
          <Title>Definição de Metas</Title>
          <CardContainer>
            <CardLoseWeight>
              <CardTitle>Perder Peso</CardTitle>
              <Text>
                Emagracimento <br/>
                envolve uma combinação de alimentação equilibrada e atividade física regular. Isso pode incluir reduzir a ingestão de calorias e incorporar exercícios aeróbicos e de resistência na rotina.
                </Text>
            </CardLoseWeight>
            <CardGainWeight>
              <CardTitle>Ganhar Peso</CardTitle>
              <Text>
                Engordar <br/>
                envolve aumentar a massa muscular e/ou a gordura de maneira saudável. Isso pode ser alcançado por meio de uma dieta rica em calorias e nutrientes, priorizando alimentos como proteínas magras, grãos integrais e gorduras saudáveis. 
                </Text>
            </CardGainWeight>
            <CardMuscle>
              <CardTitle>Ganhar Massa Muscular</CardTitle>
              <Text>
              Hipertrofismo <br/>
              envolve o aumento da força e volume muscular através de treinamento de resistência e uma nutrição adequada. Isso inclui uma dieta rica em proteínas, carboidratos complexos e gorduras saudáveis.
              </Text>
            </CardMuscle>
            <CardDiet>
              <CardTitle>Monitorar Dieta</CardTitle>
              <Text>
              Educação Alimentar <br/>
              envolve a conscientização e o registro dos alimentos consumidos diariamente. Isso pode incluir contar calorias, acompanhar a ingestão de macronutrientes e avaliar a qualidade dos alimentos.
              </Text>
            </CardDiet>
          </CardContainer>
            <ButtonContainer>
            <BackButton type="button" onClick={() => navigate("/info-pessoal")}>
              <Icon>
                <IonIcon icon={Icons.chevronBack} />
              </Icon>
              Voltar
            </BackButton>
            <Button type="submit" onClick={() => navigate("/TermosDeUso")}>Avançar
              <Icon>
                <IonIcon icon={Icons.chevronForward} />
              </Icon>
            </Button>
            </ButtonContainer>
        </FormContainer>
      </Body>
    </>
  );
};

export default DefinicaoMetas;
