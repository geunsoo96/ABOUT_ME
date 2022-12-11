import styled from "styled-components";
import Club from "../Club/Club";
import ClubItem from "../Club/ClubItem";
const RankHeader = styled.div`
  width: 1700px;
  /* height: 100px; */
  color: white;
  font-family: esaMedium;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 20px;
`;
const RankContainer = styled.div`
  width: 1700px;
  height: 700px;
  border-top: 2px solid white;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const RankBox = styled.div`
  width: 850px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Ranking = () => {
  return (
    <>
      <RankHeader>2022시즌 기록/순위</RankHeader>
      <RankContainer>
        <RankBox>a</RankBox>
        <RankBox>a</RankBox>
      </RankContainer>
    </>
  );
};
export default Ranking;
