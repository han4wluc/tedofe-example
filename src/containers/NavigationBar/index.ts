import NavigationBarView from './NavigationBar.view';
import {
  NavigationBarStore,
  INavigationBarDependencies,
} from './NavigationBar.store';

import { connect } from '~/utils/mobxConnect';
import { authService } from '~/services/AuthService';

export default connect<INavigationBarDependencies>({
  Store: NavigationBarStore,
  dependencies: {
    authService,
  },
})(NavigationBarView);
