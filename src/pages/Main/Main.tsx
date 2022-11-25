import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { YoutubeType, IYoutube } from "../../typings/youtube";
import Search from "../../components/search/Search";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import PlayListMap from "../../components/playlistmap/PlayListMap";
import VideoPlay from "../../components/videoplay/VideoPlay";

//1. 처음 메인페이지에서 동영상들을 나타내줘야함o
//2. 검색시 동영상들도 나타내줘야함o
//3. 동영상 클릭시 그동영상 동영상만 나오는 페이지 필요

/**
 * list 폴더로 빼기o
 * 검색컴포넌트 집어넣기o
 * getYoutube() 로직정리 o
 */

const Main: FC<YoutubeType> = ({ youtube }) => {
  // const Main: FC<YoutubeType & SearchVideo> = (props) => {
  // const Main: Function = (props: YoutubeType): JSX.Element => {
  // const { youtube, searchVideo } = props;
  // const [playlist, setPlaylist] = useState<IYoutube[]>([]);
  const [playlist, setPlaylist] = useState<Array<IYoutube>>([]);
  const [searchVideo, setSearchVideo] = useState("르세라핌");
  const [videoId, setvideoId] = useState("");

  // const handleGetVideoId = (id: string) => {
  //   setvideoId(id);
  // };

  /**
   * @param id videoId
   * @param value search value
   */
  const handleSetSearchGetvideoId = (id: string, value: string) => {
    setvideoId(id);
    setSearchVideo(value);
  };

  useEffect(() => {
    youtube
      .getYoutube(searchVideo)
      .then((res) => {
        setPlaylist(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [searchVideo]);

  return (
    <>
      <Search handleSetSearchGetvideoId={handleSetSearchGetvideoId} />
      <Container>
        <Sidemenu />
        <ThumbNailContainer>
          {videoId === "" ? (
            <PlayListMap
              playlist={playlist}
              handleSetSearchGetvideoId={handleSetSearchGetvideoId}
            />
          ) : (
            <VideoPlay videoId={videoId} />
          )}

          {/* 
           삼항연산식 말고 이렇게도 쓸 수 있다.
          {!videoId.length && (
            <PlayListMap
              playlist={playlist}
              handleSetSearchGetvideoId={handleSetSearchGetvideoId}
            />
          )}
          
          {videoId.length && <VideoPlay videoId={videoId} />}

          이렇게해도 되는데 화면에 0 아니면 videoid.length 수만큼  화면에 숫자도 같이나옴 


          {videoId.length===0 && (
            <PlayListMap
              playlist={playlist}
              handleSetSearchGetvideoId={handleSetSearchGetvideoId}
            />
            {videoId.length!==0 && <VideoPlay videoId={videoId} />}
          )}
            이런식으로 사용하면 0 아니면 videoid.length 수만큼  화면에 숫자가 화면에 나오지 않음
        
          */}
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
