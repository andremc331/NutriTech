import styled from "styled-components";

const styled_Configuracoes = () => {
  const Text = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    text-align: left;
  `;

  const Container = styled.div`
    font-family: "Roboto", sans-serif;
    text-align: center;
    flex-direction: column;
    width: 100%;
    overflow: auto;
    padding: 30px;
    border-radius: 15px;
    background-color: var(--color-6);
    color: var(--color-1);
  `;

  const TeamSection1 = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 25px;
  `;
  const TeamSection2 = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 25px;
    justify-content: flex-end;
  `;

  const IconsContainer = styled.div`
    display: flex;
    align-items: center; 
    margin-top: 5px; 
  `;

  const Icon = styled.div`
    margin-right: 10px; 
  `;

  const Title = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 15px;
  `;

  const Title1 = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    text-align: left;
  `;

  const Title2 = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    text-align: left;
  `;

  const ImgPerfil1 = styled.img`
    width: 100px; 
    height: 100px; 
    border-radius: 50%; 
    border: 3px solid #9400d3; 
    object-fit: cover;
  `;

  const ImgPerfil2 = styled.img`
    width: 100px; 
    height: 100px; 
    border-radius: 50%; 
    border: 3px solid #00fa9a; 
    object-fit: cover;
  `;

  const LogoImage = styled.img`
    width: 100px;
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      width: 200px; /* Reduz o tamanho da logo em telas menores */
    }
  `;

  return {
    Title,
    Text,
    Title1,
    Title2,
    Icon,
    LogoImage,
    IconsContainer,
    ImgPerfil1,
    ImgPerfil2,
    Container,
    TeamSection1,
    TeamSection2,
  };
};

export default styled_Configuracoes;