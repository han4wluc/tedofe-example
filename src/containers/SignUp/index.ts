import SignUpView from './SignUp.view';
import { SignUpStore, ISignUpStoreDependencies } from './SignUp.store';

import { connect } from '~/utils/mobxConnect';
import { authService } from '~/services/AuthService';

export default connect<ISignUpStoreDependencies>({
  Store: SignUpStore,
  dependencies: {
    authService,
  },
})(SignUpView);
