import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyDcqVlSTiOX4LFrfN-L-AaSdbPv1r9KYUQ`;

const Main = () => {
  const [playlist, setPlaylist] = useState([]);
  let mainurl =
    "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCTQVIXvcHrR9jYoJ6qaBAow&maxResults=5&key=AIzaSyDcqVlSTiOX4LFrfN-L-AaSdbPv1r9KYUQ";
  const getVideo = () => {
    axios
      .get(mainurl)
      .then((res) => {
        console.log(res.data);
        setPlaylist(res.data.items);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getVideo();
  }, []);
  return (
    <Container>
      <div>ffffff</div> <div>22222222</div>
      <div>3333333</div>
      <div>4444444</div>
      <div>5555555</div>
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
  div {
    border: solid 1px;
    width: 300px;
    height: 200px;
    margin: 20px;
  }
`;
