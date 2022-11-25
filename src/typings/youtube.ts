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
    default: ThumbNailUrl;
    high: ThumbNailUrl;
    medium: ThumbNailUrl;
    standard: ThumbNailUrl;
  };
  title: string;
};

export type ThumbNailUrl = {
  height: number;
  url: string;
  width: number;
};

/**
 * @type youtube axios class type
 */
export type YoutubeType = {
  youtube: Youtube;
};

/**
 * @param id video Id
 * @param value search value
 */
export type MainPropsType = {
  handleSetSearchGetvideoId?(id: string, value?: string): void;
  videoId?: string;
};
