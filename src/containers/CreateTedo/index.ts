import CreateTedoView from './CreateTedo.view';
import {
  CreateTedoStore,
  ICreateTedoStoreDependencies,
} from './CreateTedo.store';

import { connect } from '~/utils/mobxConnect';
import { tedoService } from '~/services/api/TedoService';
import tedoEventEmitter from '~/services/emitters/tedoEmitter';

export default connect<ICreateTedoStoreDependencies>({
  Store: CreateTedoStore,
  dependencies: {
    tedoService,
    tedoEventEmitter,
  },
})(CreateTedoView);
