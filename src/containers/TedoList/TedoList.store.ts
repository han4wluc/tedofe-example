import { action, observable, computed } from 'mobx';
import { BaseStore, IStoreDependencies } from '~/utils/mobxConnect';
import TedoService from '~/services/api/TedoService';
import ResourceStore from '~/stores/ResourceStore';

export type Tedo = any;

export interface ITedoListStoreDependencies extends IStoreDependencies {
  tedoService: TedoService;
}

export interface IEntityTableStore {
  tedos: Tedo[];
  tedosLoading: boolean;
}

export class TedoListStore extends BaseStore implements IEntityTableStore {
  private tedoService: TedoService;
  @observable public tedoResource: ResourceStore<Tedo>;

  constructor(protected dependencies: ITedoListStoreDependencies) {
    super(dependencies);
    this.tedoService = dependencies.tedoService;
    this.tedoResource = new ResourceStore<Tedo>([], x => x.id);
  }

  mount(): any {
    this.fetchTedos();
  }

  @observable tedosLoading: boolean = true;

  @computed get tedos(): any {
    return this.tedoResource.items;
  }

  @action fetchTedos = async (): Promise<void> => {
    this.tedosLoading = true;
    try {
      const tedos = (await this.tedoService.fetchTedos())['items'];
      this.tedoResource.replace(tedos);
    } catch (error) {
      console.warn(error);
    }
    this.tedosLoading = false;
  };
}
