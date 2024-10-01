import React, { useRef } from "react";
// import "../CSS/DefinicaoMetas.css";
import logo from "../logo/logo.nutritech.png";
import styled_Definicao_M from "../styled/styled_Definicao_M";
const{
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
  PlusButton
}=styled_Definicao_M();

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
export default DefinicaoMetas;
