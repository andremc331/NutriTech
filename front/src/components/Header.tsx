import styled from "styled-components";
import Logo from "../logo/img-logo-semfundo.png";
import UserMenu from "./UserMenu";
import { useUser } from "../hooks";
import AdmMenu from "./AdmMenu";

export default function Header() {
  const { currentUser } = useUser(); // Acesse currentUser em vez de token

  return (
    <Wrapper>
      <Logo />
      {currentUser && currentUser.role === "user" && <UserMenu />}
      {currentUser && currentUser.role === "adm" && <AdmMenu />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;