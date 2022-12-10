import Header from "./header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Top from "./top";
const Img = styled.div`
  margin: 0;
  padding: 0;
  background-image: url("/img/background.png");
  background-size: cover;
  width: 1920px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Main = () => {
  return (
    <Img>
      <Header />
      <Outlet />
    </Img>
  );
};
export default Main;
