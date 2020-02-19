import { action, observable } from 'mobx';
import { BaseStore, IStoreDependencies } from '~/utils/mobxConnect';
import AuthService from '~/services/AuthService';

export type Tedo = any;

export interface ISignUpStoreDependencies extends IStoreDependencies {
  authService: AuthService;
}

export interface ISignUpStore {
  signUp: () => void;
  signUpIsLoading: boolean;
}

export class SignUpStore extends BaseStore implements ISignUpStore {
  private authService: AuthService;
  constructor(protected dependencies: ISignUpStoreDependencies) {
    super(dependencies);
    this.authService = dependencies.authService;
  }

  @observable
  signUpIsLoading: boolean = false;

  @action
  signUp = (): void => {
    this.signUpIsLoading = true;
    this.authService.signUp('username', 'email', 'password');
  };
}
