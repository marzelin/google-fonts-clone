import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import {closeMenuPanel} from './actions/actionCreators';
import App from './components/app';
import onResize from './utils/onResize';

const Render = props => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
};

const mediaQuery = '(min-width: 650px)';
onResize(store, 'menuPanelOpened', closeMenuPanel, mediaQuery);

render(
  <Render/>,
  document.getElementById('root')
);
