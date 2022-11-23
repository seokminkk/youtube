import React from "react";
import styled from "styled-components";
import { FC } from "react";
import { IYoutube } from "../../typings/youtube";

type youtubeprops = {
  item: IYoutube;
};

const MainDetail: FC<youtubeprops> = ({ item }) => {
  let titleName = item.snippet.title.replaceAll("&#39;", "'");
  return (
    <Container>
      <img className="thumbNail" src={item.snippet.thumbnails.medium.url} />
      <span>{titleName}</span>
      <span>{}</span>
    </Container>
  );
};

export default MainDetail;
const Container = styled.div`
  width: 320px;
  height: 250px;
  margin: 5px;
  .thumbNail {
    border-radius: 10px;
  }
`;
