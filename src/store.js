import {createStore} from 'redux';

import reducer from './reducers/index';
import fontsData from './data/fonts';
const fonts = fontsData.familyMetadataList;

export default createStore(
  reducer,
  {fonts},
  window.devToolsExtension && window.devToolsExtension()
);
