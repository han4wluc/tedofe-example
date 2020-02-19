import { action, observable, computed } from 'mobx';
import { BaseStore, IStoreDependencies } from '~/utils/mobxConnect';
import TedoService from '~/services/api/TedoService';
import ResourceStore from '~/stores/ResourceStore';
import ModalStore from '~/stores/ModalStore';
import { TedoEventEmitter } from '~/services/emitters/tedoEmitter';

export type Tedo = any;

export interface ITedoListStoreDependencies extends IStoreDependencies {
  tedoService: TedoService;
  tedoEventEmitter: TedoEventEmitter;
  tedos?: any[];
  isServerRendered?: boolean;
}

export interface IEntityTableStore {
  tedos: Tedo[];
  tedosLoading: boolean;
}

export class TedoListStore extends BaseStore implements IEntityTableStore {
  private tedoService: TedoService;
  private tedoEventEmitter: TedoEventEmitter;
  @observable public tedoResource: ResourceStore<Tedo>;
  @observable public modalState: ModalStore<any>;

  constructor(protected dependencies: ITedoListStoreDependencies) {
    super(dependencies);
    this.tedoService = dependencies.tedoService;
    this.tedoEventEmitter = dependencies.tedoEventEmitter;
    const tedos = dependencies.tedos || [];
    this.tedoResource = new ResourceStore<Tedo>(tedos, x => x.id);
    this.modalState = new ModalStore();
  }

  mount(): any {
    const listerner = this.tedoEventEmitter.addOnCreateTedoListener(() => {
      this.fetchTedos();
    });
    return (): void => {
      listerner.remove();
    };
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

  @action showCreateTedoModal = (): void => {
    this.modalState.show(null);
  };
}
