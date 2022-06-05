import {Axios} from 'axios';

class ProwlarrAPI {
  private static readonly defaultHeaders: {[key: string]: string} = {
    'Content-Type': 'application/json',
  };

  private client: Axios;

  public constructor(url: string, apiKey: string) {
    this.client = new Axios({
      baseURL: url,
      headers: {
        ...ProwlarrAPI.defaultHeaders,
        'X-Api-Key': apiKey,
      },
    });
  }

  public async getHealth(): Promise<any> {
    const response = await this.client.get('api/v1/health');
    return response.data;
  }
}

export default ProwlarrAPI;
