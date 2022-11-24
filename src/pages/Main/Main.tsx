import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { YoutubeType, IYoutube } from "../../typings/youtube";
import Search from "../../components/search/Search";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import PlayListMap from "../../components/playlistmap/PlayListMap";
import VideoPlay from "../../components/videoplay/VideoPlay";

//1. 처음 메인페이지에서 동영상들을 나타내줘야함
//2. 검색시 동영상들도 나타내줘야함
//3. 동영상 클릭시 그동영상 동영상만 나오는 페이지 필요

/**
 * list 폴더로 빼기
 * 검색컴포넌트 집어넣기
 * getYoutube() 로직정리
 */

const Main: FC<YoutubeType> = ({ youtube }) => {
  // const Main: FC<YoutubeType & SearchVideo> = (props) => {
  // const Main: Function = (props: YoutubeType): JSX.Element => {
  // const { youtube, searchVideo } = props;
  // const [playlist, setPlaylist] = useState<IYoutube[]>([]);
  const [playlist, setPlaylist] = useState<Array<IYoutube>>([]);
  const [searchVideo, setSearchVideo] = useState("르세라핌");
  const [videoId, setvideoId] = useState("");

  const getVideo = (item: any) => {};

  useEffect(() => {
    youtube
      .getYoutube(searchVideo, 5)
      .then((res) => {
        console.log(res.data.items);
        setPlaylist(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [searchVideo]);

  useEffect(() => {
    console.log(videoId);
  }, [videoId]);
  return (
    <>
      <Search setSearchVideo={setSearchVideo} />
      <Container>
        <Sidemenu />
        <ThumbNailContainer>
          {videoId === "" ? (
            <PlayListMap playlist={playlist} setvideoId={setvideoId} />
          ) : (
            <VideoPlay />
          )}
          {/* <PlayListMap playlist={playlist} setvideoId={setvideoId} /> */}
        </ThumbNailContainer>
      </Container>
    </>
  );
};

export default Main;
const ThumbNailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-content: flex-start; */
  flex-wrap: wrap;
  flex-basis: auto;
  margin-top: 70px;
  margin-left: 50px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
