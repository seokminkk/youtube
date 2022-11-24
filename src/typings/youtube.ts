import Youtube from "../service/youtube";

/**
 * @type youtube search api
 */
export type IYoutube = {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
  snippet: ISnippet;
};

export type ISnippet = {
  channelId: string;
  channelTitle: string;
  description: string;
  localized: {
    description: string;
    title: string;
  };
  publishedAt: string;
  thumbnails: {
    default: { height: number; url: string; width: number };
    high: { height: number; url: string; width: number };
    medium: { height: number; url: string; width: number };
    standard: { height: number; url: string; width: number };
  };
  title: string;
};

/**
 * @params youtube axios class type
 */
export type YoutubeType = {
  youtube: Youtube;
};

export type SearchVideo = {
  setSearchVideo: React.Dispatch<React.SetStateAction<string>>;
  searchVideo?: string;
};
export type GetVideoId = {
  setvideoId: React.Dispatch<React.SetStateAction<string>>;
  videoId?: string;
};
