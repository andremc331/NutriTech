import React, { useRef } from "react";
// import "../CSS/DefinicaoMetas.css";
import logo from "../logo/logo.nutritech.png.png";
import styled from "styled-components";

interface DefinicaoMetasProps {
  setPage: React.Dispatch<
    React.SetStateAction<
      | "bem-vindo"
      | "cadastro"
      | "info-pessoal"
      | "definicao-metas"
      | "termosdeuso"
      | "home"
      | "cardapio"
      | "historico"
      | "metas"
      | "configuracoes"
    >
  >;
}

const DefinicaoMetas: React.FC<DefinicaoMetasProps> = ({ setPage }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

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
                  <PlusButton type="button">+</PlusButton>
                </ButtonGroup>
              </Card>
              <Card>
                <CardTitle>Monitore seu problema alimentar</CardTitle>
              </Card>
              <Card>
                <CardTitle>Auxiliar</CardTitle>
              </Card>
              <Card>
                <CardTitle>Quadrado Indefinido 1</CardTitle>
              </Card>
              <Card>
                <CardTitle>Quadrado Indefinido 2</CardTitle>
              </Card>
              <Card>
                <CardTitle>Quadrado Indefinido 3</CardTitle>
              </Card>
            </Carousel>
            <NavButton className="right" type="button" onClick={scrollRight}>
              &gt;
            </NavButton>
          </form>
        </FormContainer>

        <ButtonContainer>
          <NextButton type="button" onClick={() => setPage("termosdeuso")}>
            →
          </NextButton>
        </ButtonContainer>
      </div>
    </>
  );
};
export const Body = styled.body`
  background-color: #7E5EC2;
  margin: 0;
  font-family: 'Roboto', Arial, sans-serif;
`;

export const ImageContainer = styled.div`
  text-align: center;
  max-width: 100%;
  margin: 50px auto;
`;

export const LogoImage = styled.img`
  width: 300px;
  height: auto;
`;

export const FormContainer = styled.div`
  width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #7d4cdb;
  border-radius: 10px;
  background-color: #7d4cdb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  text-align: left;
  color: white;
  font-size: 40px;
  font-weight: bold;
`;

export const Carousel = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  width: 100%;
  padding: 10px;
`;

export const Card = styled.div`
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
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const MinusButton = styled.button`
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
`;

export const PlusButton = styled(MinusButton)``;

export const NavButton = styled.button`
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
`;

export const NextButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: #21D29D;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background-color: #1CA885;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const MediaQuery = styled.div`
  @media (max-width: 900px) {
    ${FormContainer} {
      width: 95%;
    }
  }
`;

export default DefinicaoMetas;
