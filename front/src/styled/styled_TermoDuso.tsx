import styled from "styled-components";

const styled_TermoDuso=()=>{
 const Body = styled.body`
  background-color: #7E5EC2;
  margin: 0;
  font-family: 'Roboto', Arial, sans-serif;
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
  padding: 20px;
  border: 2px solid #7d4cdb;
  border-radius: 10px;
  background-color: #7d4cdb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

 const Title = styled.h2`
  text-align: left;
  color: white;
  font-size: 40px;
  font-weight: bold;
`;

 const TermsContainer = styled.div`
  max-height: 200px;
  overflow-y: scroll;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
  color: black;
  margin-bottom: 20px;
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
  text-align: right;
  margin-right: 30px;
`;

 const NextButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: #21d29d;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 26px;
  cursor: pointer;

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
   NextButton, 
   TermsContainer, 
   Title 
}
}
export default styled_TermoDuso;