import React from "react";
import styled from "styled-components";
import Search from "./components/Search";
import Sidemenu from "./components/Sidemenu";
// import Main from "./pages/Main/Main";
import loadable from "@loadable/component";
import { Route, Routes } from "react-router-dom";

const Main = loadable(() => import("./pages/Main/Main"));

function App() {
  return (
    <div>
      <Search />
      <Sidemenu />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
