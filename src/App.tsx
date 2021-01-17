import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { VisualizeScreen } from './layouts';
import { configureStore, history } from './store';

const store = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <VisualizeScreen />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
