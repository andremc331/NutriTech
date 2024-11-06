import styled from "styled-components";

const styled_TermoDuso=()=>{
 const Body = styled.body`
  margin: 0;
  font-family: "Roboto", sans-serif;
`;

 const ImageContainer = styled.div`
  text-align: center;
  max-width: 100%;
  margin: 50px auto;
`;

 const LogoImage = styled.img`
  width: 300px;
  height: auto;
`;

 const FormContainer = styled.div`
  width: 800px;
  margin: 20px auto;
  padding: 30px;
  border: 2px solid #7d4cdb;
  border-radius: 15px;
  background-color: var(--color-2);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

 const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: var(--color-1);
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
`;

 const TermsContainer = styled.div`
  font-family: "Roboto", sans-serif;
  max-height: 200px;
  overflow-y: scroll;
  background-color: var(--color-12);
  padding: 10px;
  border-radius: 10px;
  color: var(--color-10);
  margin-bottom: 20px;
  margin-top: 15px;
`;

  const CheckboxGroup = styled.div`
  margin-bottom: 20px;
  color: white;
  font-size: 18px;

  input {
    margin-right: 10px;
  }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
  `;

  const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: var(--color-5);
    font-weight: bold;
    font-size: 18px;
    color: var(--color-1);
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;

    &:hover {
      background-color: #1ca885;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 12px;
    }
  `;

  const BackButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: var(--color-5);
    font-weight: bold;
    font-size: 18px;
    color: var(--color-1);
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;

    &:hover {
      background-color: #1ca885;
    }
  `;


return{
  Body,
  ButtonContainer, 
  CheckboxGroup,
   FormContainer, 
   ImageContainer, 
   LogoImage, 
   Button,
   BackButton,
   TermsContainer, 
   Title 
}
}
export default styled_TermoDuso;