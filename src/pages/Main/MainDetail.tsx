import React from "react";
import styled from "styled-components";
import { FC } from "react";
import { IYoutube, MainPropsType } from "../../typings/youtube";

type youtubeprops = {
  item: IYoutube;
};

const MainDetail: FC<youtubeprops & MainPropsType> = ({
  item,
  handleSetSearchGetvideoId,
}) => {
  let titleName = item.snippet.title.replaceAll("&#39;", "'");

  const onGetVideo = () => {
    // handleSetSearchGetvideoId &&
    handleSetSearchGetvideoId!(item.id.videoId);
    // console.log("디테일실행되냐", item.id.videoId);
  };

  return (
    <Container onClick={onGetVideo}>
      <img className="thumbNail" src={item.snippet.thumbnails.medium.url} />
      <span>{titleName}</span>
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
