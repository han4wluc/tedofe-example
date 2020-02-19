import { action, observable } from 'mobx';
import { BaseStore, IStoreDependencies } from '~/utils/mobxConnect';
import AuthService from '~/services/AuthService';

export interface INavigationBarDependencies extends IStoreDependencies {
  authService: AuthService;
}

export interface INavigationBarStore {
  signOut: () => void;
  signOutIsLoading: boolean;
}

export class NavigationBarStore extends BaseStore
  implements INavigationBarStore {
  private authService: AuthService;
  constructor(protected dependencies: INavigationBarDependencies) {
    super(dependencies);
    this.authService = dependencies.authService;
  }

  @observable
  signOutIsLoading: boolean = false;

  @action
  signOut = (): void => {
    this.signOutIsLoading = true;
    this.authService.signOut();
  };
}
