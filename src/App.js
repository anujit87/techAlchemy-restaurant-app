import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        restaurant app
      </div>
    </Provider>
  );
}

export default App;
