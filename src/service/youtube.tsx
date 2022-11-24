import { Axios } from "axios";

export default class Youtube {
  private youtube;
  constructor(private httpClient: Axios) {
    this.youtube = this.httpClient;
  }

  async getYoutube(searchVideo: string, max: number = 5) {
    const response = await this.youtube.get(
      `/search?q=${searchVideo}&part=snippet&type=video&maxResults=${max}&key=AIzaSyAXhSuIyl8C2F0X0V8j_kiR4Pu56KTqBYo`,
      {}
    );

    return response;
  }
}
