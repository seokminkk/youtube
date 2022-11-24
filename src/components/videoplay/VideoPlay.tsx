import React from "react";
import styled from "styled-components";

const VideoPlay = () => {
  return <VideoContainer>VideoPlay</VideoContainer>;
};

export default VideoPlay;
const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-content: flex-start; */
  /* flex-wrap: wrap;
  flex-basis: auto; */
  margin-top: 70px;
  margin-left: 50px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
