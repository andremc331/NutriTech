import React, { useRef, useState } from "react";
import axios from "axios"; // Importa o axios
import logo from "../logo/logo.nutritech.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"; // Importa o styled-components diretamente
import { api } from "../services/api";

const DefinicaoMetas: React.FC = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [meta, setMeta] = useState<string>(""); // Estado para guardar a meta
  const [metasUsuarioId, setMetasUsuarioId] = useState<number>(1); // ID do usuário - exemplo para teste

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
        metas_usuario_id: metasUsuarioId, // ID do usuário associado
        metas: meta, // A meta que será enviada, validada pelo domínio
      });
      console.log("Meta salva com sucesso:", response.data);
    } catch (error: any) {
      console.error("Erro ao salvar a meta:", error.error || "Erro desconhecido");
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
                  <MinusButton type="button">-</MinusButton>
                  <PlusButton
                    type="button"
                    onClick={() => setMeta("Ganhar peso")} // Atualiza a meta para "Ganhar peso"
                  >
                    +
                  </PlusButton>
                </ButtonGroup>
              </Card>

              {/* Card para a meta de Perder Peso */}
              <Card>
                <CardTitle>Perder Peso</CardTitle>
                <ButtonGroup>
                  <MinusButton type="button">-</MinusButton>
                  <PlusButton
                    type="button"
                    onClick={() => setMeta("Perder peso")} // Atualiza a meta para "Perder peso"
                  >
                    +
                  </PlusButton>
                </ButtonGroup>
              </Card>

              {/* Card para a meta de Manter Peso */}
              <Card>
                <CardTitle>Manter Peso</CardTitle>
                <ButtonGroup>
                  <MinusButton type="button">-</MinusButton>
                  <PlusButton
                    type="button"
                    onClick={() => setMeta("Manter peso")} // Atualiza a meta para "Manter peso"
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
          <NextButton
            type="button"
            onClick={() => {
              enviarMeta(); // Envia a meta para o backend
              navigate("/termosdeuso"); // Navega para a próxima página
            }}
          >
            →
          </NextButton>
        </ButtonContainer>
      </div>
    </>
  );
};

const ImageContainer = styled.div`
  text-align: center;
  max-width: 100%;
  margin: 50px auto;
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 200px; /* Limita o tamanho máximo */
  height: auto;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #7d4cdb;
  border-radius: 10px;
  background-color: #7d4cdb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 900px) {
    padding: 15px;
  }

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  text-align: left;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Carousel = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  width: 100%;
  padding: 10px;

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

const Card = styled.div`
  flex: 0 0 30%;
  margin: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    flex: 0 0 45%;
  }

  @media (max-width: 600px) {
    flex: 0 0 90%;
  }
`;

const CardTitle = styled.h3`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const MinusButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #21d29d;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background-color: #1ca885;
  }

  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #21d29d;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: #1ca885;
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

const NextButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: #21d29d;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background-color: #1ca885;
  }

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const PlusButton = styled(MinusButton)``;

export default DefinicaoMetas;