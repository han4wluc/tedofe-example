import cookie from 'js-cookie';
import Router from 'next/router';

const key = 'auth_token';

class AuthService {
  private _saveCredentials = (payload: any): void => {
    cookie.set(key, payload);
  };

  private _clearCredentials = (): void => {
    cookie.remove(key);
  };

  private _redirectOnSignIn = (): void => {
    Router.replace('/list');
  };

  private _redirectOnSignOut = (): void => {
    Router.replace('/signin');
  };

  signIn = (userIdentifier: string, password: string): void => {
    // make http request
    // if success set cookie and redirect
    const payload = 'asdf';
    this._saveCredentials(payload);
    this._redirectOnSignIn();
  };

  signUp = (username: string, email: string, password: string): void => {
    const payload = 'asdf';
    this._saveCredentials(payload);
    this._redirectOnSignIn();
  };

  signOut = (): void => {
    this._clearCredentials();
    this._redirectOnSignOut();
  };
}

const authService = new AuthService();

export { authService };

export default AuthService;
