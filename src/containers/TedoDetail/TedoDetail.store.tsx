import { action, observable } from 'mobx';
import { BaseStore, IStoreDependencies } from '~/utils/mobxConnect';
import TedoService from '~/services/api/TedoService';

export type Tedo = any;

export interface ITedoDetailStoreDependencies extends IStoreDependencies {
  tedoService: TedoService;
}

export interface ITedoDetailStore {
  tedo: Tedo;
  tedoLoading: boolean;
  updateTedo: (data: any) => void;
}

export class TedoDetailStore extends BaseStore implements ITedoDetailStore {
  private tedoService: TedoService;

  constructor(protected dependencies: ITedoDetailStoreDependencies) {
    super(dependencies);
    this.tedoService = dependencies.tedoService;
  }

  mount(params: any): any {
    this.fetchTedo(params.router.query.slug);
  }

  @observable tedoLoading: boolean = true;
  @observable tedo: any = null;

  @action fetchTedo = async (slug: string): Promise<void> => {
    this.tedoLoading = true;
    try {
      const tedo = (await this.tedoService.fetchTedoBySlug(slug))['items'][0];
      this.tedo = tedo;
    } catch (error) {
      console.warn(error);
    }
    this.tedoLoading = false;
  };

  @action updateTedo = async (data: any): Promise<void> => {
    this.tedoService.updateItem(this.tedo.id, data);
  };
}
