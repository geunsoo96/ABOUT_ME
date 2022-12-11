import Header from "./components/header";
import Club from "./pages/Club/Club";
import News from "./pages/News/News";
import Ranking from "./pages/Ranking/Ranking";
import Schedule from "./pages/Schedule/Schedule";
import Main from "./components/main";
import Top from "./components/top";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Top />}></Route>
          <Route path="/club" element={<Club />}></Route>
          <Route path="/rank" element={<Ranking />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;
