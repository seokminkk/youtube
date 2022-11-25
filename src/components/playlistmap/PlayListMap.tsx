import React from "react";
import MainDetail from "../../pages/Main/MainDetail";
import { IYoutube, MainPropsType } from "../../typings/youtube";

type MainProp = {
  playlist: IYoutube[];
};

const PlayListMap: React.FC<MainProp & MainPropsType> = ({
  playlist,
  handleSetSearchGetvideoId,
}) => {
  return (
    <>
      {playlist.length !== 0 ? (
        playlist.map((item) => (
          <MainDetail
            item={item}
            key={item.etag}
            handleSetSearchGetvideoId={handleSetSearchGetvideoId}
          />
        ))
      ) : (
        <span>로딩중</span>
      )}
    </>
  );
};

export default PlayListMap;
