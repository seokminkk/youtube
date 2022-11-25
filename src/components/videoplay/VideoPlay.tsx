import React from "react";
import styled from "styled-components";
import { MainPropsType } from "../../typings/youtube";
import YouTube from "react-youtube";

const VideoPlay: React.FC<MainPropsType> = ({ videoId }) => {
  return (
    <VideoContainer>
      <YouTube
        videoId={videoId}
        // opts={{
        //   width: "600",
        //   height: "315",
        //   playerVars: {
        //     autoplay: 1,
        //   },
        // }}
      ></YouTube>
    </VideoContainer>
  );
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
