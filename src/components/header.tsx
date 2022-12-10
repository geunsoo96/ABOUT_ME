import styled from "styled-components";
const Background = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 50, 4, 0) 100%);
`;
const MenuBar = styled.div`
  width: inherit;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  & > div {
    color: white;
  }

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-around;
    margin-top: 33px;
    & > a {
      font-size: 3rem;
      font-family: esaBold;
    }
  }
  & > div:nth-child(2) {
    width: 50%;
    display: flex;
    justify-content: space-around;
    position: relative;
    right: 90px;
    & > a {
      font-size: 2rem;
      font-family: esaMedium;
    }
  }
  & > div:nth-child(3) {
    display: flex;
    justify-content: space-around;
    & > a {
      font-size: 2rem;
      font-family: esaMedium;
    }
  }
`;
const Header = () => {
  return (
    <Background>
      <MenuBar>
        <div>
          <img src="/img/로고 4차 디자인.png"></img>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/">
            HALF
            <br />
            SPACE
          </a>
        </div>
        <div>
          <a href="/">경기 일정/결과</a>
          <a href="/">기록/순위</a>
          <a href="/">구단</a>
        </div>
        <div>
          <a href="/">이달의 뉴스</a>
        </div>
      </MenuBar>
    </Background>
  );
};

export default Header;
