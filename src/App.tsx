import React from "react";
import styled from "styled-components";
import Search from "./components/search/Search";
import Sidemenu from "./components/sidemenu/Sidemenu";
import Main from "./pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import { YoutubeType } from "./typings/youtube";

function App(props: YoutubeType) {
  const { youtube } = props;

  return (
    <>
      <Search />
      <Container>
        <Sidemenu />
        <Routes>
          <Route path="/" element={<Main youtube={youtube} />} />
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
