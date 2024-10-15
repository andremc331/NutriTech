import React, { useRef, useState } from "react";
import axios from "axios"; // Importa o axios
import logo from "../logo/logo.nutritech.png";
import styled_Definicao_M from "../styled/styled_Definicao_M";
import { useNavigate } from "react-router-dom";

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
} = styled_Definicao_M();

const DefinicaoMetas: React.FC = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [meta, setMeta] = useState(""); // Estado para guardar a meta

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
              <Card>
                <CardTitle>Ganhar ou Perder Peso</CardTitle>
                <ButtonGroup>
                  <MinusButton type="button">-</MinusButton>
                  <PlusButton
                    type="button"
                    onClick={() => setMeta("Ganhar ou Perder Peso")} // Atualiza o estado da meta
                  >
                    +
                  </PlusButton>
                </ButtonGroup>
              </Card>
              <Card>
                <CardTitle>Monitore seu problema alimentar</CardTitle>
                <ButtonGroup>
                  <MinusButton type="button">-</MinusButton>
                  <PlusButton
                    type="button"
                    onClick={() => setMeta("Monitore seu problema alimentar")}
                  >
                    +
                  </PlusButton>
                </ButtonGroup>
              </Card>
              {/* Adicione outros cards conforme necessário */}
            </Carousel>
            <NavButton className="right" type="button" onClick={scrollRight}>
              &gt;
            </NavButton>
          </form>
        </FormContainer>

        <ButtonContainer>
          <NextButton
            type="button"
            onClick={() => {
              enviarMeta(); // Envia a meta para o backend
              navigate("/termosdeuso");
            }}
          >
            →
          </NextButton>
        </ButtonContainer>
      </div>
    </>
  );
};

export default DefinicaoMetas;