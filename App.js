import React from 'react';
import {createStore} from 'redux';
import allReducers from './Reduce/allReducers';
import {Provider} from 'react-redux';
import ReduceApp from './ReduceApp';

const store = createStore(allReducers);

function App() {
  return (
    <Provider store={store}>
      <ReduceApp />
    </Provider>
  );
}
export default App;
