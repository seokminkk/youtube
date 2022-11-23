import { Axios } from "axios";

export default class Youtube {
  private youtube;
  constructor(private httpClient: Axios) {
    this.youtube = this.httpClient;
  }

  async getYoutube() {
    const response = await this.youtube.get("/", {});

    return response;
  }
}
