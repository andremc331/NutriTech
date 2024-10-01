import styled from "styled-components";

const styled_BemV = () => {
  const Background = styled.div`
    background-image: url('../logo/logo.nutritech.png');
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const GlobalStyle = styled.body`
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #C9B7E6;
  `;

  const Logo = styled.img`
    width: 352px;
    height: auto;
    margin: 80px;
    position: absolute;
    top: 85px;
    left: 45%;
  `;

  const ContainerRightTitle = styled.h2`
    font-size: 3rem;
    color: black;
    margin-bottom: 20px;
    text-align: center;
    position: relative;
    top: 405px;
    left: 51%;
    letter-spacing: -0.02em;
    word-spacing: 0.2em;
  `;

  const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 70vh;
    padding: 70px;
    border-radius: 20px;
    box-sizing: border-box;
    background-color: #7E5EC2;
    margin-top: -5px;
    margin-left: -650px;
  `;

  const Header = styled.header`
    background-color: #282c34;
    color: white;
    padding: 1rem;
    text-align: center;
  `;

  const Title = styled.h1`
    font-size: 2rem;
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
  `;

  const EmailLabel = styled.label`
    font-size: 1rem;
    color: #fff;
    margin-top: 70px;
    display: block;
  `;

  const PasswordLabel = styled.label`
    font-size: 1rem;
    color: #fff;
    margin-top: 10px;
    display: block;
  `;

  const Input = styled.input`
    font-size: 1rem;
    padding: 10px;
    margin-top: 5px;
    border: none;
    border-radius: 5px;
    width: 92%;
  `;

  const MainContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  `;

  const Button1 = styled.button`
    position: absolute;
    margin-top: 517px;
    margin-left: 70px;
    background-color: #21D29D;
    border: none;
    color: black;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
    width: 200px;

    &:hover {
      background-color: #21a1f1;
    }
  `;

  const Button2 = styled.button`
    font-size: 80px;
    width: 90px;
    height: 70px;
    background-color: #21D29D;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1CA885;
    }
  `;

  const JustifiedText = styled.p`
    text-align: justify;
    margin: 0;
  `;
  return {
    Background,
    GlobalStyle,
    Logo,
    ContainerRightTitle,
    ContainerLeft,
    Header,
    Title,
    EmailLabel,
    PasswordLabel,
    Input,
    MainContent,
    Button1,
    Button2,
    JustifiedText,
  };
};
export default styled_BemV;