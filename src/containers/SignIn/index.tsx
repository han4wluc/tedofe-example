import SignInView from './SignIn.view';
import { SignInStore, ISignInStoreDependencies } from './SignIn.store';

import { connect } from '~/utils/mobxConnect';
import { authService } from '~/services/AuthService';

export default connect<ISignInStoreDependencies>({
  Store: SignInStore,
  dependencies: {
    authService,
  },
})(SignInView);
