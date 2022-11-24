import React from "react";
import MainDetail from "../../pages/Main/MainDetail";
import { IYoutube, GetVideoId } from "../../typings/youtube";

type MainProp = {
  playlist: IYoutube[];
};

const PlayListMap: React.FC<MainProp & GetVideoId> = ({
  playlist,
  setvideoId,
}) => {
  return (
    <>
      {playlist.length &&
        playlist.map((item) => (
          <MainDetail item={item} key={item.etag} setvideoId={setvideoId} />
        ))}
    </>
  );
};

export default PlayListMap;
