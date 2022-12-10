import styled from "styled-components";

const MainContainer = styled.div`
  width: 1700px;
  height: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Ground = styled.div`
  background-image: url("/img/그라운드 이모티콘.png");
  background-size: cover;
  background-position: center;
  width: 450px;
  height: 708px;
`;
const SubList = styled.div`
  width: 300px;
  height: 708px;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Top = () => {
  return (
    <MainContainer>
      <SubList></SubList>
      <Ground></Ground>
      <SubList></SubList>
    </MainContainer>
  );
};

export default Top;
