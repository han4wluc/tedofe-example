import { action, observable } from 'mobx';
import { BaseStore, IStoreDependencies } from '~/utils/mobxConnect';
import AuthService from '~/services/AuthService';

export type Tedo = any;

export interface ISignInStoreDependencies extends IStoreDependencies {
  authService: AuthService;
}

export interface ISignInStore {
  signIn: () => void;
  signInIsLoading: boolean;
}

export class SignInStore extends BaseStore implements ISignInStore {
  private authService: AuthService;
  constructor(protected dependencies: ISignInStoreDependencies) {
    super(dependencies);
    this.authService = dependencies.authService;
  }

  @observable
  signInIsLoading: boolean = false;

  @action
  signIn = (): void => {
    this.signInIsLoading = true;
    this.authService.signIn('username', 'password');
  };
}
