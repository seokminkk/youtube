import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MainDetail from "./MainDetail";
import { IYoutube, YoutubeType } from "../../typings/youtube";
import Youtube from "../../service/youtube";

// const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyDcqVlSTiOX4LFrfN-L-AaSdbPv1r9KYUQ`;
//1. 처음 메인페이지에서 동영상들을 나타내줘야함
//2. 검색시 동영상들도 나타내줘야함
//3. 동영상 클릭시 그동영상 동영상만 나오는 페이지 필요

const Main: Function = (props: YoutubeType): JSX.Element => {
  const { youtube } = props;
  const [playlist, setPlaylist] = useState<IYoutube[]>([]);
  let mainurl = `https://www.googleapis.com/youtube/v3/search?q=르세라핌&part=snippet&type=video&maxResults=25&key=AIzaSyDcqVlSTiOX4LFrfN-L-AaSdbPv1r9KYUQ`;

  const getVideo = () => {
    axios
      .get(mainurl)
      .then((res) => {
        console.log(res.data.items);
        setPlaylist(res.data.items);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getVideo();
  }, []);
  return (
    <Container>
      {playlist.map((item) => (
        <MainDetail item={item} key={item.etag} />
      ))}
    </Container>
  );
};

export default Main;
const Container = styled.div`
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
