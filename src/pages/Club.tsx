import styled from "styled-components";
import Header from "@/components/header";
import ClubItem from "./ClubItem";
const ClubContainer = styled.div`
  width: 1700px;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
// const ClubBox = styled.div`
//   width: 300px;
//   height: 250px;
//   margin: 50px;
//   border: 2px solid #aaa;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;
const Club = () => {
  const clubImg = [
    "/img/대구FC.png",
    "/img/대전 시티즌.png",
    "/img/수원 블루윙즈.png",
    "/img/울산 현대.png",
    "/img/인천 유나이티드.png",
    "/img/FC서울.png",
    "/img/전북 현대 모터스.png",
    "/img/제주 유나이티드.png",
    "/img/포항 스틸러스.png",
    "/img/강원FC.png",
    "/img/부산 아이파크.png",
    "/img/성남 일화.png",
    "/img/전남 드래곤즈.png",
    "/img/광주FC.png",
    "/img/경남FC.png",
    "/img/상주 상무.png",
  ];
  return (
    <ClubContainer>
      {/* <ClubBox> */}
      {clubImg.map((value, index) => {
        return <ClubItem key={index} data={value}></ClubItem>;
      })}
      {/* </ClubBox> */}
    </ClubContainer>
  );
};
export default Club;
