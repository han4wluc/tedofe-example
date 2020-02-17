import { action, observable, computed } from 'mobx';
import { BaseStore, IStoreDependencies } from '~/utils/mobxConnect';
import TedoService from '~/services/api/TedoService';
import ModalStore from '~/stores/ModalStore';
import { TedoEventEmitter } from '~/services/emitters/tedoEmitter';

export type Tedo = any;

export interface ICreateTedoStoreDependencies extends IStoreDependencies {
  tedoService: TedoService;
  tedoEventEmitter: TedoEventEmitter;
}

export interface ICreateTedoStore {
  showCreateTedoModal: () => void;
  hideCreateTedoModal: () => void;
  createTedo: (data: any) => void;
  modalVisible: boolean;
}

export class CreateTedoStore extends BaseStore implements ICreateTedoStore {
  private tedoService: TedoService;
  private tedoEventEmitter: TedoEventEmitter;
  @observable public modalState: ModalStore<any>;

  constructor(protected dependencies: ICreateTedoStoreDependencies) {
    super(dependencies);
    this.tedoService = dependencies.tedoService;
    this.tedoEventEmitter = dependencies.tedoEventEmitter;
    this.modalState = new ModalStore();
  }

  @computed
  get modalVisible(): boolean {
    return this.modalState.visible;
  }

  @action showCreateTedoModal = (): void => {
    this.modalState.show(null);
  };

  @action hideCreateTedoModal = (): void => {
    this.modalState.hide(null);
  };

  @action createTedo = async (data: any): Promise<void> => {
    const tedo = await this.tedoService.createItem({
      ...data,
      template: '',
      function: 'ejs',
    });
    this.tedoEventEmitter.emitOnCreateTedo(tedo);
    this.hideCreateTedoModal();
  };
}
