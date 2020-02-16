import TedoListView from './TedoList.view';
import { TedoListStore, ITedoListStoreDependencies } from './TedoList.store';
import { connect } from '~/utils/mobxConnect';
import { tedoService } from '~/services/api/TedoService';

export default connect<ITedoListStoreDependencies>({
  Store: TedoListStore,
  dependencies: {
    tedoService,
  },
})(TedoListView);
