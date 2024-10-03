import styled from 'styled-components';

const styled_Metas =()=>{
 const Body = styled.body`
  font-family: Arial, sans-serif;
  background-color: #f0f0f5;
  color: #333;
  margin: 0;
  padding: 0;
`;

 const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

 const BarraNavegacao = styled.div`
  width: 100%;
  height: 80px;
  background-color: #C9B7E6;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

 const NavLinks = styled.div`
  display: flex;
`;

 const NavButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: 15px;
`;

 const Sidebar = styled.div`
  width: 100px;
  height: calc(100% - 60px);
  background-color: #714D95;
  color: #fff;
  position: fixed;
  top: 60px;
  left: 0;
  transition: width 0.3s;
  overflow: hidden;
  border-bottom-right-radius: 15px;

  &:hover {
    width: 200px;
  }
`;

 const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  padding: 10px;
`;

 const Item = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 15px 0;
  padding: 10px;
  position: relative;
  transition: background-color 0.3s;
  border-radius: 5px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #947cc7;
  }

  &:hover::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-color: #21D29D;
  }
`;

 const Icon = styled.span`
  font-size: 24px;
  margin-left: 10px;
`;

 const Text = styled.span`
  display: none;
  font-size: 20px;

  ${Sidebar}:hover & {
    display: block;
    margin-right: 10px;
  }
`;

// Container principal
 const Dashboard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

 const Content = styled.div`
  width: calc(100% - 100px);
  padding: 20px;
`;

 const Header = styled.div`
  background-color: #d8c2e1;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  color: #6d377e;
  font-size: 20px;
  font-weight: bold;
`;

 const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

 const Tab = styled.div`
  padding: 10px 20px;
  margin: 0 10px;
  color: #6d377e;
  font-weight: bold;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid #94c140;
  }
`;

 const Charts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

 const WeightLossChart = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    color: #333;
  }

  canvas {
    width: 100%;
  }
`;

 const FoodChart = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 30%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    color: #333;
  }
`;

 const GoalInfo = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
return{
  BarraNavegacao, 
  Body, 
  Charts, 
  ContainerMenu, 
  Content, 
  Dashboard, 
  FoodChart, 
  GoalInfo, 
  Header, 
  Icon, 
  Item, 
  NavButton, 
  NavLinks, 
  Sidebar, 
  SidebarContent, 
  Tab, 
  Tabs, 
  WeightLossChart, 
  Text
}
}
export default  styled_Metas;