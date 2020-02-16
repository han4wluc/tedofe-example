import { AxiosInstance } from 'axios';
import tsAdminClient from './clients/tsAdminClient';

class TedoService {
  private httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  setAuthToken = (token: string): void => {
    this.httpClient.defaults.headers['Authorization'] = `Bearer ${token}`;
  };

  createItem = async (data: any): Promise<any> => {
    const res = await this.httpClient.post<any, any>('/tedos', {
      data,
    });
    return res.data;
  };

  updateItem = async (id: any, data: any): Promise<any> => {
    const res = await this.httpClient.patch<any, any>(`/tedos/${id}`, {
      data,
    });
    return res.data;
  };

  fetchTedos = async (): Promise<any> => {
    const reps = await this.httpClient.get<any, any>('/tedos');
    return reps.data;
  };

  fetchTedoBySlug = async (slug: string, config?: any): Promise<any> => {
    const reps = await this.httpClient.get<any, any>(`/tedos`, {
      params: {
        filter: `AND(slug:eq:${slug})`,
      },
      ...config,
    });
    return reps.data;
  };

  deleteTedo = async (id: any): Promise<any> => {
    const res = await this.httpClient.delete<any, any>(`/tedos/${id}`);
    return res.data;
  };
}

const tedoService = new TedoService(tsAdminClient);

export { tedoService };

export default TedoService;
