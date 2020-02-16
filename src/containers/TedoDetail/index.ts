import TedoDetail from './TedoDetail.view';

import {
  TedoDetailStore,
  ITedoDetailStoreDependencies,
} from './TedoDetail.store';
import { connect } from '~/utils/mobxConnect';
import { tedoService } from '~/services/api/TedoService';

export default connect<ITedoDetailStoreDependencies>({
  Store: TedoDetailStore,
  dependencies: {
    tedoService,
  },
})(TedoDetail);
