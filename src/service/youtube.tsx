import { Axios } from "axios";

export default class Youtube {
  private youtube;
  constructor(private httpClient: Axios) {
    this.youtube = this.httpClient;
  }

  /**
   * getting youtube search api function show thumbnail
   * @param searchVideo: searchvalue
   * @param max : thumbnail data quantity /default quantity=5
   */
  async getYoutube(searchVideo: string, max: number = 5) {
    const response = await this.youtube.get(
      `/search?q=${searchVideo}&part=snippet&type=video&maxResults=${max}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      {}
    );

    return response;
  }
}
