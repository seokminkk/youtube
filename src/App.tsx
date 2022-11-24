import React from "react";
import Main from "./pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import { YoutubeType } from "./typings/youtube";

function App(props: YoutubeType) {
  const { youtube } = props;

  return (
    <>
      <Routes>
        <Route path="/" element={<Main youtube={youtube} />} />
      </Routes>
    </>
  );
}

export default App;
