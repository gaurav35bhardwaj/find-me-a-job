import React from 'react';
import './App.css';
import { MainRoutes } from './Routes';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </div>
    </Provider>
);
}

export default App;
