import styled from "styled-components";
const NewsContainer = styled.div`
  width: 1700px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const News = () => {
  return <NewsContainer></NewsContainer>;
};
export default News;
