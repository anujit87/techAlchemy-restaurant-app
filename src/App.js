import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';
import './App.css';
import Sidebar, { sidebarItems } from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantDetails from './components/RestaurantDetails';

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Sidebar />
          <div style={{ marginLeft: '300px'}}>
            <Switch>
              {sidebarItems.map(route => (
                <Route key={route.name} exact path={route.to} component={route.component} />
              ))}
              <Route exact path="/restaurant/:id" component={RestaurantDetails} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
