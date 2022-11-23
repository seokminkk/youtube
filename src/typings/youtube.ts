import Youtube from "../service/youtube";

export interface IYoutube {
  etag: string;
  id: {
    kind: string;
    videoID: string;
  };
  kind: string;
  snippet: ISnippet;
}

export interface ISnippet {
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
}

/**
 * @params youtube api type
 */
export type YoutubeType = {
  youtube: Youtube;
};
