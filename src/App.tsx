import React from "react";
import styled from "styled-components";
import Search from "./components/search/Search";
import Sidemenu from "./components/sidemenu/Sidemenu";
// import Main from "./pages/Main/Main";
import loadable from "@loadable/component";
import { Route, Routes } from "react-router-dom";

const Main = loadable(() => import("./pages/Main/Main"));

function App() {
  return (
    <>
      <Search />
      <Container>
        <Sidemenu />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
