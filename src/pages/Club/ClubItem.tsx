import styled from "styled-components";
const ClubLogo = styled.img`
  width: 200px;
  height: 200px;
`;
// const ClubName = styled.div`
//   color: white;
//   font-family: esaLight;
//   font-size: 1.5rem;
// `;
const ClubItem = ({ data }: any) => {
  const ClubName = [
    "대구FC",
    "대전시티즌",
    "수원삼성블루윙즈",
    "울산현대",
    "인천유나이티드",
    "FC서울",
    "전북현대",
    "제주유나이티드",
    "포항스틸러스",
    "강원FC",
    "부산아이파크",
    "성남일화",
    "전남드래곤즈",
    "광주FC",
    "경남FC",
    "상주상무",
  ];
  return (
    <>
      <ClubLogo src={data}></ClubLogo>

      {/* <ClubName>대전시티즌</ClubName> */}
    </>
  );
};
export default ClubItem;
// export default ClubName;
