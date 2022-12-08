import Header from "./header";
import styled from "styled-components";
const Img = styled.div`
  margin: 0;
  padding: 0;
  background-image: url("/img/background.png");
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;
const Main = () => {
  return (
    <Img>
      <Header />
    </Img>
  );
};
export default Main;
